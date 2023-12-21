package com.formersMarket.formersMarket.Repository;

import com.formersMarket.formersMarket.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin,Integer> {

    Optional<Admin> findByEmail(String email);
}
