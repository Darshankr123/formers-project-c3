package com.formersMarket.formersMarket.Repository;

import com.formersMarket.formersMarket.Entity.CustomerFeedBack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


public interface CustomerFeedBackRepository extends JpaRepository<CustomerFeedBack,Integer> {
}
