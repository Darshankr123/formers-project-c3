package com.formersMarket.formersMarket.Controller;

import com.formersMarket.formersMarket.Entity.AdminAddCrops;
import com.formersMarket.formersMarket.Repository.AdminAddCropsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class AdminAddCropsController {

    @Autowired
    public AdminAddCropsRepository cropRepo;

    @PostMapping("/AddCrops")
        public ResponseEntity<?> addCrops(@RequestBody AdminAddCrops obj){
        cropRepo.save(obj);
        return new ResponseEntity<>("crop added", HttpStatus.OK);
    }
    @GetMapping("/GetCrops")
    public ResponseEntity<?> getCrops(){
        var crops = cropRepo.findAll();
        return new ResponseEntity<>(crops,HttpStatus.OK);
    }

    @GetMapping("/GetCropsById/{id}")
    public ResponseEntity<?> getCropsById(@PathVariable int id){
        var crop = cropRepo.findById(id).orElseThrow(()->new RuntimeException("crop not found"));
        var data = cropRepo.findById((int) crop.getId());
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

}
