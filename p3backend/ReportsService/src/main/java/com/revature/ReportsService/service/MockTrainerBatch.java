package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Associate;
import com.revature.ReportsService.models.TrainerBatch;

@Service
public class MockTrainerBatch {

	private List<TrainerBatch> trainerBatch;

	public MockTrainerBatch() {
		super();
		trainerBatch = new ArrayList<TrainerBatch>();
		trainerBatch.add(new TrainerBatch(0, 1));
		trainerBatch.add(new TrainerBatch(1, 1));
		trainerBatch.add(new TrainerBatch(0, 2));
		trainerBatch.add(new TrainerBatch(2, 3));
		trainerBatch.add(new TrainerBatch(3, 1));
	}

	public List<TrainerBatch> getTrainerBatchAll() {
		return trainerBatch;
	}

	public List<Integer> getTrainerBatchById(Integer id) {

		List<Integer> out = null;
		for (TrainerBatch i : trainerBatch) {
			if (i.getTrainerId().equals(id)) {
				out.add(i.getBatchId());

			}
		}
		if (out == null) {
			throw new RuntimeException("batches for trainer with  id " + id + " not found");
		}
		return out;
	}

}
