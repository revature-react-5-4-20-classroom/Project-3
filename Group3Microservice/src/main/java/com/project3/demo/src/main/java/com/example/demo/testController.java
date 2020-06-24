package com.project3.controllers;



import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.ResponseStatus;



import org.springframework.web.server.ResponseStatusException;

import com.revature.project3.exceptions.Associate NotFoundException;
import com.project3.services.AssociateService;


@RestController
@RequestMapping(path="/associate")
public class AssociateController {
	@Autowired
	AssociateService associateService;
	
	@GetMapping
	public List<Associate> getAssociates() {
		
		associateService.getAllAssociates();
	}
	
	@PostMapping ()  
	public void updateAssociateBatch (@RequestBody Integer associateId, @RequestBody Integer assignedBatchId) {
		associateService.updateAssociateBatch(associateId, assignedBatchId);
	}
	
}
