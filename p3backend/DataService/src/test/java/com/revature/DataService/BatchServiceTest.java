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

import com.revature.DataService.models.Batch;
import com.revature.DataService.repositories.BatchRepository;
import com.revature.DataService.services.BatchService;

class BatchServiceTest {

	@InjectMocks
	BatchService batchService;

	@Mock
	BatchRepository batchRepository;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	void testGetById() throws Exception {
		Optional<Batch> batches = Optional.of(new Batch());
		batches.get().setInterviewScoreLower(75);
		batches.get().setIsConfirmed(false);
		batches.get().setBatchId(5);
		

		when(batchRepository.findById(Mockito.anyInt())).thenReturn(batches);

		Batch batchInstance = batchService.getById(1);

		assertNotNull(batchInstance);
		assertEquals(75, batchInstance.getInterviewScoreLower());
		assertEquals(false, batchInstance.getIsConfirmed());
		assertEquals(5, batchInstance.getBatchId());
		

	}

	@Test
	void testGetAll() {
		ArrayList<Batch> batches = new ArrayList<Batch>();
		batches.add(new Batch());
		batches.add(new Batch());
		batches.add(new Batch());

		when(batchRepository.findAll()).thenReturn(batches);

		ArrayList<Batch> batchsTest = (ArrayList<Batch>) batchService.getAll();

		assertNotNull(batchsTest.get(0));
		assertNotNull(batchsTest.get(1));
		assertNotNull(batchsTest.get(2));
		assertTrue(batchsTest.size() > 0);
	}

}
