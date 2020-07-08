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

import com.revature.DataService.models.Curriculum;
import com.revature.DataService.repositories.CurriculumRepository;
import com.revature.DataService.services.CurriculumService;

class CurriculumServiceTest {

	@InjectMocks 
	CurriculumService CurriculumService; 
	
	@Mock
	CurriculumRepository CurriculumRepository; 
	
	@BeforeEach
	void setUp() throws Exception
	{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	void testGetById() throws Exception {
		Optional<Curriculum> curriculums = Optional.of(new Curriculum());
		curriculums.get().setName("React");
		
		when(CurriculumRepository.findById(Mockito.anyInt())).thenReturn(curriculums);
		
		Curriculum curriculumInstance = CurriculumService.getById(1);
		
		assertNotNull(curriculumInstance);
		assertEquals("React", curriculumInstance.getName());
		
	}
	
	@Test
	void testGetAll() 
	{
		ArrayList<Curriculum> Curriculums = new ArrayList<Curriculum>();
		Curriculums.add(new Curriculum());
		Curriculums.add(new Curriculum());
		Curriculums.add(new Curriculum());
		
		when(CurriculumRepository.findAll()).thenReturn(Curriculums);
		
		ArrayList<Curriculum> CurriculumsTest = (ArrayList<Curriculum>) CurriculumService.getAll();
		
		assertNotNull(CurriculumsTest.get(0));
		assertNotNull(CurriculumsTest.get(1));
		assertNotNull(CurriculumsTest.get(2));
		assertTrue(CurriculumsTest.size()>0);
	}

}
