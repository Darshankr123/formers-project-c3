package com.formersMarket.formersMarket.Controller;

import com.formersMarket.formersMarket.Entity.Admin;
import com.formersMarket.formersMarket.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class AdminController {
    @Autowired
    public AdminRepository adminRepo;
    @PostMapping("/AddAdmin")
    public ResponseEntity<?> addAdmin(@RequestBody Admin adminObj){
        adminRepo.save(adminObj);
        return new ResponseEntity<>("admin added", HttpStatus.OK);
    }
}
