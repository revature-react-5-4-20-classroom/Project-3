package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Batch;

@Service
public class MockBatch {

	private List<Batch> batches;

	public MockBatch() {
		super();
		// insert fake data here
	}

	public List<Batch> getBatches() {
		return batches;
	}

	public Batch getBatchById(Integer id) {
		Batch out = null;
		for (Batch i : this.batches) {
			if (i.getBatchId().equals(id)) {
				out = i;
				break;
			}
		}
		if (out == null) {
			throw new RuntimeException("batches with id " + id + " not found");
		}
		return out;
	}
}
