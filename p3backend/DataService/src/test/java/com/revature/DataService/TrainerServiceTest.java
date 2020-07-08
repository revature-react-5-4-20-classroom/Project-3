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

import com.revature.DataService.models.Trainer;
import com.revature.DataService.repositories.TrainerRepository;
import com.revature.DataService.services.TrainerService;

class TrainerServiceTest {

	@InjectMocks 
	TrainerService trainerService; 
	
	@Mock
	TrainerRepository trainerRepository; 
	
	@BeforeEach
	void setUp() throws Exception
	{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	void testGetById() throws Exception {
		Optional<Trainer> trainers = Optional.of(new Trainer());
		trainers.get().setFirstName("Tom");
		trainers.get().setLastName("Hanks");
		trainers.get().setIsEligible(true);
		trainers.get().setEmail("tomhanks@g.com");
		
		
		when(trainerRepository.findById(Mockito.anyInt())).thenReturn(trainers);
		
		Trainer trainerInstance = trainerService.getById(1);
		
		assertNotNull(trainerInstance);
		assertEquals("Tom", trainerInstance.getFirstName());
		assertEquals("Hanks", trainerInstance.getLastName());
		assertEquals(true, trainerInstance.getIsEligible());
		assertEquals("tomhanks@g.com", trainerInstance.getEmail());
		
		
	}
	
	@Test
	void testGetAll() 
	{
		ArrayList<Trainer> trainers = new ArrayList<Trainer>();
		trainers.add(new Trainer());
		trainers.add(new Trainer());
		trainers.add(new Trainer());
		
		when(trainerRepository.findAll()).thenReturn(trainers);
		
		ArrayList<Trainer> trainersTest = (ArrayList<Trainer>) trainerService.getAll();
		
		assertNotNull(trainersTest.get(0));
		assertNotNull(trainersTest.get(1));
		assertNotNull(trainersTest.get(2));
		assertTrue(trainersTest.size()>0);
	}

}
