package com.revature.DataService.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.DataService.models.Client;
import com.revature.DataService.services.ClientService;

@RequestMapping(path="/clients")
@RestController
public class ClientController {

	@Autowired ClientService clientService;
	
	@GetMapping
	public List<Client> getAllClients() {
		return clientService.getAll();
	}
	
	@GetMapping("/{id}")
	public Client getClientById(@PathVariable Integer id) {
//		try {
			return clientService.getById(id);
//		} catch (clientNotFoundException e) {
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//		}
	}
}
