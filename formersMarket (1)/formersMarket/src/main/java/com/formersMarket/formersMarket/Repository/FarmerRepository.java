package com.formersMarket.formersMarket.Repository;

import com.formersMarket.formersMarket.Entity.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FarmerRepository extends JpaRepository<Farmer,Integer> {

    Optional<Farmer> findByEmail(String email);
}
