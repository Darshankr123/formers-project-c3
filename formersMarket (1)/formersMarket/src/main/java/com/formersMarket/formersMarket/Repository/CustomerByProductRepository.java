package com.formersMarket.formersMarket.Repository;

import com.formersMarket.formersMarket.Entity.CustomerByProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerByProductRepository extends JpaRepository<CustomerByProduct,Integer> {
}
