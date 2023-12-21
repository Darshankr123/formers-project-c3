package com.formersMarket.formersMarket.Controller;

import com.formersMarket.formersMarket.Entity.CustomerByProduct;
import com.formersMarket.formersMarket.Repository.CustomerByProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class CustomerBuyProductController  {

    @Autowired
    public CustomerByProductRepository cRepo;

    @PostMapping("/BuyProducts")
    public ResponseEntity<?> buyProducts(@RequestBody CustomerByProduct obj){
        cRepo.save(obj);
        return new ResponseEntity<>("buyed the product", HttpStatus.OK);
    }
}
