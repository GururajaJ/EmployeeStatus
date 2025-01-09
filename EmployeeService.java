package com.employee.employee.service;

import com.employee.employee.entity.Employee;
import com.employee.employee.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public void postEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
    
    public List<Employee> getAllEmployee(){
    	return employeeRepository.findAll();
    }
    
    public void delete(long id) {
    	if(!employeeRepository.existsById(id)) {
    		throw new EntityNotFoundException("not found");
    	}
    	
    	employeeRepository.deleteById(id);
    }
    
    public Employee getAllId(Long id) {
    	 return employeeRepository.findById(id).orElse(null);
    }
}
