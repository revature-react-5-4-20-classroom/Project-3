package com.revature.DataService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Optional;

import com.revature.DataService.models.Client;
import com.revature.DataService.repositories.ClientRepository;
import com.revature.DataService.services.ClientService;

class ClientServiceTest {

	@InjectMocks 
	ClientService clientService; 
	
	@Mock
	ClientRepository clientRepository; 
	
	@BeforeEach
	void setUp() throws Exception
	{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	void testGetById() throws Exception {
		Optional<Client> clients = Optional.of(new Client());
		clients.get().setName("Microsoft");
		
		when(clientRepository.findById(Mockito.anyInt())).thenReturn(clients);
		
		Client clientInstance = clientService.getById(1);
		
		assertNotNull(clientInstance);
		assertEquals("Microsoft", clientInstance.getName());
		
	}
	
	@Test
	void testGetAll() 
	{
		ArrayList<Client> clients = new ArrayList<Client>();
		clients.add(new Client());
		clients.add(new Client());
		clients.add(new Client());
		
		when(clientRepository.findAll()).thenReturn(clients);
		
		ArrayList<Client> clientsTest = (ArrayList<Client>) clientService.getAll();
		
		assertNotNull(clientsTest.get(0));
		assertNotNull(clientsTest.get(1));
		assertNotNull(clientsTest.get(2));
		assertTrue(clientsTest.size()>0);
	}

}
