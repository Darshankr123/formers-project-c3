package com.formersMarket.formersMarket.Controller;

import com.formersMarket.formersMarket.Dto.UserDto;
import com.formersMarket.formersMarket.Entity.Admin;
import com.formersMarket.formersMarket.Entity.Customer;
import com.formersMarket.formersMarket.Entity.Farmer;
import com.formersMarket.formersMarket.Repository.AdminRepository;
import com.formersMarket.formersMarket.Repository.CustomerRepository;
import com.formersMarket.formersMarket.Repository.FarmerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")

public class LoginController {

    @Autowired
    public CustomerRepository customerRepo;

    @Autowired
    public FarmerRepository farmerRepo;

    @Autowired
    public AdminRepository adminRepo;

    @PostMapping("/UserLogin")
    public ResponseEntity<?> userLogin(@RequestBody UserDto obj){
        if(obj.getUserType().equals("customer")){
            Customer customer = customerRepo.findByEmail(obj.email).orElseThrow(()->new RuntimeException("no customer found"));
            if(customer.getPassword().equals(obj.getPassword())){
                return new ResponseEntity<>("customer", HttpStatus.OK);
            }
            else {
                throw new RuntimeException("invalid password");
            }
        } else if (obj.getUserType().equals("farmer")) {
            Farmer farmer = farmerRepo.findByEmail(obj.email).orElseThrow(()->new RuntimeException("no farmer found"));
            if(farmer.getPassword().equals(obj.getPassword())){
                return new ResponseEntity<>("farmer",HttpStatus.OK);
            }
            else {
                throw new RuntimeException("invalid password");
            }
        } else if (obj.getUserType().equals("admin")) {
            Admin admin = adminRepo.findByEmail(obj.email).orElseThrow(()->new RuntimeException("admin not found"));
            if(admin.getPassword().equals(obj.getPassword())){
                return new ResponseEntity<>("admin",HttpStatus.OK);
            }
            else {
                throw new RuntimeException("invalid password");
            }
        } else{
            throw new RuntimeException("select user type");
        }
    }
}
