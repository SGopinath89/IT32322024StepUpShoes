package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.EmployeeData;

public interface EmployeeDataRepository extends JpaRepository<EmployeeData, Integer> {

}
