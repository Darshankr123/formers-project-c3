package com.formersMarket.formersMarket.Controller;

import com.formersMarket.formersMarket.Entity.Customer;
import com.formersMarket.formersMarket.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class CustomerController {

    @Autowired
    public CustomerRepository customerRepo;

    @PostMapping("/AddCustomer")
    public ResponseEntity<?> addCustomer(@RequestBody Customer cObj){
        customerRepo.save(cObj);
        return new ResponseEntity<>("customer added", HttpStatus.OK);
    }
}
