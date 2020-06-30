package com.revature.DataService.controllers;

import com.revature.DataService.models.Associate;
import com.revature.DataService.services.AssociateService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping(path="/associates")
public class AssociateController {
	@Autowired
	AssociateService associateService;
	
	@GetMapping
	public List<Associate> getAssociates() {
		
		return associateService.getAllAssociates();
	}
	
	@GetMapping("/{id}")
	public Associate getAssociateById(@PathVariable Integer id) {
		try {
			return associateService.getById(id);
		} catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
		}
	}
	
//	@PostMapping  
//	public void updateAssociateBatch (@RequestBody Integer associateId, @RequestBody Integer assignedBatchId) {
//		associateService.updateAssociateBatch(associateId, assignedBatchId);
//	}
	
}
