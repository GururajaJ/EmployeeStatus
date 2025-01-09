package com.employee.employee.controller;

import com.employee.employee.entity.Employee;
import com.employee.employee.service.EmployeeService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employee")
    public ResponseEntity<String> postEmployee(@RequestBody Employee employee) {
        employeeService.postEmployee(employee);
        return ResponseEntity.ok("Employee saved successfully");
    }
    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
    	  return employeeService.getAllEmployee();
    }
    
    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
    	 try {
    		 employeeService.delete(id);
    		 return new ResponseEntity<>("employee" + id + " deleted",HttpStatus.OK);
    	 }
    	 catch(EntityNotFoundException e) {
    		 return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
    		 
    	 }
    }
    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getAllId(@PathVariable Long id){
    	Employee employee = employeeService.getAllId(id);
    	if(employee == null) return ResponseEntity.notFound().build();
    	return ResponseEntity.ok(employee);
    }
}
