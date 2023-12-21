package com.formersMarket.formersMarket.Controller;

import com.formersMarket.formersMarket.Entity.Farmer;
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
public class FarmerController {

    @Autowired
    public FarmerRepository farmerRepo;

    @PostMapping("/AddFarmer")
    public ResponseEntity<?> addFarmer(@RequestBody Farmer obj){
        farmerRepo.save(obj);
        return new ResponseEntity<>("farmer added", HttpStatus.OK);
    }
}
