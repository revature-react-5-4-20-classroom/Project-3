package com.revature.DataService.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.DataService.models.Client;
import com.revature.DataService.repositories.ClientRepository;

@Service
public class ClientService {
	
	@Autowired
	ClientRepository clientRepository;
	
	public List<Client> getAll() {
		return clientRepository.findAll();
	}
	
	public Client getById(Integer id) {
		Optional<Client> client = clientRepository.findById(id);
		if(client.isPresent()) {
			return client.get();
		} else {
			// throw new ClientNotFoundException; // Maybe add in later?
			throw new RuntimeException();
		}
	}
	
}
