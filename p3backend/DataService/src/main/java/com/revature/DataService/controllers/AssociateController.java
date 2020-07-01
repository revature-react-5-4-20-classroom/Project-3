package com.revature.DataService.controllers;

import com.revature.DataService.exceptions.UpdateFailedException;
import com.revature.DataService.models.Associate;
import com.revature.DataService.services.AssociateService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/associates")

public class AssociateController {
	@Autowired
	AssociateService associateService;
	

	@CrossOrigin(origins = "*")
	@GetMapping 
	public List<Associate> getAssociate() {
		
		return associateService.getAll();
	}
	

	@GetMapping("/{id}")
	public Associate getAssociateById(@PathVariable Integer id) {
		try {
			return associateService.getById(id);
		} catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
		}
	}
	
	@PatchMapping
	public void updateAssociate(@RequestBody Associate a) {
		try {
			associateService.updateAssociate(a);
		} catch (Exception e) {
			throw new UpdateFailedException("Associate batch did not update");
		}
		
	}

	
}
