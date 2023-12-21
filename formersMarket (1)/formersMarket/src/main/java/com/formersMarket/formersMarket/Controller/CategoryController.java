package com.formersMarket.formersMarket.Controller;


import com.formersMarket.formersMarket.Entity.Category;
import com.formersMarket.formersMarket.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")

public class CategoryController {

    @Autowired
    public CategoryRepository categoryRepo;

    @PostMapping("/AddCategory")
    public ResponseEntity<?> addCategory(@RequestBody Category obj){
        categoryRepo.save(obj);
        return new ResponseEntity<>("category added", HttpStatus.OK);
    }
    @GetMapping("/GetCategories")
    public ResponseEntity<?> getCategory(){
        var category = categoryRepo.findAll();
        return new ResponseEntity<>(category,HttpStatus.OK);
    }
}
