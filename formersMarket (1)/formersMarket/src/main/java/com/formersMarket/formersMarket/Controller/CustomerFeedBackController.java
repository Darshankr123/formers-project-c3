package com.formersMarket.formersMarket.Controller;

import com.formersMarket.formersMarket.Entity.CustomerFeedBack;
import com.formersMarket.formersMarket.Repository.CustomerFeedBackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class CustomerFeedBackController {

    @Autowired
    public CustomerFeedBackRepository feedBackRepo;

    @PostMapping("/addFeedBack")
    public ResponseEntity<?> addFeedBack(@RequestBody CustomerFeedBack obj){
        feedBackRepo.save(obj);
        return new ResponseEntity<>("feed back added", HttpStatus.OK);
    }
}
