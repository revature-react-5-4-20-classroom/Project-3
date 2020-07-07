package com.revature.DataService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Optional;

import com.revature.DataService.models.Associate;
import com.revature.DataService.repositories.AssociateRepository;
import com.revature.DataService.services.AssociateService;

class AssociateServiceTest {
	
	@InjectMocks
	AssociateService associateService; 
	
	@Mock
	AssociateRepository associateRepository;
	
	@BeforeEach
	void setUp() throws Exception
	{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	void testGetById() throws Exception {
		Optional<Associate> associate = Optional.of(new Associate());
		associate.get().setFirstName("Bill");
		associate.get().setLastName("Nye");
		associate.get().setEmail("bnye@science.com");
		associate.get().setInterviewScore(85);
		
		when(associateRepository.findById(Mockito.anyInt())).thenReturn(associate);
		
		Associate associateInstance = associateService.getById(4);
		
		assertNotNull(associateInstance);
		assertEquals("Bill", associateInstance.getFirstName());
			
	}
	@Test
	void testGetAll() 
	{
		ArrayList<Associate> associates = new ArrayList<Associate>();
		associates.add(new Associate());
		associates.add(new Associate());
		associates.add(new Associate());
		
		when(associateRepository.findAll()).thenReturn(associates);
		
		ArrayList<Associate> associatesTest = (ArrayList<Associate>) associateService.getAll();
		
		assertNotNull(associatesTest.get(0));
		assertNotNull(associatesTest.get(1));
		assertNotNull(associatesTest.get(2));
		assertTrue(associatesTest.size()>0);
	} 

}
