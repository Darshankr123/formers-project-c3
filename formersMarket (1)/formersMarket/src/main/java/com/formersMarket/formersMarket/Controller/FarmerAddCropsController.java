package com.formersMarket.formersMarket.Controller;

import com.formersMarket.formersMarket.Entity.FarmerAddCrops;
import com.formersMarket.formersMarket.Repository.FarmerAddCropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")

public class FarmerAddCropsController {

    @Autowired
    public FarmerAddCropRepository farmerAddCropRepo;

    @PostMapping("/AddCropsFarmer")
    public ResponseEntity<?> addCropsFarmer(@RequestBody FarmerAddCrops obj){
        farmerAddCropRepo.save(obj);
        return new ResponseEntity<>("crops added", HttpStatus.OK);
    }
    @GetMapping("/GetFormerCrops")
    public ResponseEntity<?> getFormerCrops(){
        var crops = farmerAddCropRepo.findAll();
        return new ResponseEntity<>(crops,HttpStatus.OK);
    }
    @GetMapping("/GetFarmerCropsById/{id}")
    public ResponseEntity<?> getFormerCropsById(@PathVariable int id){
        var farmerCrops = farmerAddCropRepo.findById(id).orElseThrow(()->new RuntimeException("not found"));
        var crops = farmerAddCropRepo.findById((int) farmerCrops.getId());
        return new ResponseEntity<>(crops,HttpStatus.OK);
    }

}
