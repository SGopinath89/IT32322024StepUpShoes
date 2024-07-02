package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.EmployeeData;
import com.example.demo.service.CustomerService;

@RestController
@RequestMapping("/employee")
public class EmployeeDataController {
	@Autowired
	
	private CustomerService customerService;
	
	@PostMapping("/add")
	public String add(@RequestBody EmployeeData employeeData) {
		customerService.saveData(employeeData);
		return "new customer added";
	}
}
