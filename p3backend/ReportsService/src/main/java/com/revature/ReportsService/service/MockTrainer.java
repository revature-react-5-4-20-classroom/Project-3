package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Associate;
import com.revature.ReportsService.models.Trainer;

@Service
public class MockTrainer {

	private List<Trainer> trainers;
	
	
	public MockTrainer() {
		super();
		trainers = new ArrayList<Trainer>();
		trainers.add(new Trainer(0, "f", "l", "e.m"));
		trainers.add(new Trainer(1, "i", "a", "a.i"));
		trainers.add(new Trainer(2, "r", "s", "l.e"));
		trainers.add(new Trainer(3, "s", "t", "m.a"));
		trainers.add(new Trainer(4, "t", "n", "i.l"));
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
