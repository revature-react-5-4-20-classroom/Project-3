package com.revature.ReportsService.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Batch;
import com.revature.ReportsService.models.ClientDemand;

@Service
public class MockBatch {

	private List<Batch> batches;
    private Integer nextId;

	public MockBatch() {
		super();
        this.batches = new ArrayList<Batch>();
        this.batches.add(new Batch(1, 3, LocalDate.parse("2020-08-01"), LocalDate.parse("2020-11-01"), false, 70, 1));
        this.batches.add(new Batch(2, 2, LocalDate.parse("2020-08-01"), LocalDate.parse("2020-11-01"), true, 80, 2));
        this.batches.add(new Batch(3, 1, LocalDate.parse("2020-08-01"), LocalDate.parse("2020-11-01"), false, 90, 3));
        this.nextId = 4;
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
