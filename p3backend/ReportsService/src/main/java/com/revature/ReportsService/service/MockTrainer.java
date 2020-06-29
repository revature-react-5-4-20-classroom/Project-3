package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Trainer;

@Service
public class MockTrainer {

	private List<Trainer> trainers;
	
	
	public MockTrainer() {
		super();
		//insert fake data here
	}


	public List<Trainer> getTrainers() {
		return trainers;
	}
	
	public Trainer getTrainerById(Integer id) {
		Trainer out = null;
		for(Trainer i : this.trainers) {
			if(i.getTrainerId().equals(id)) {
				out = i;
				break; 
			}
		}
		if(out == null) {
			throw new RuntimeException("Trainer with id " + id + " not found");
		}
		return out;
	}
	
}
