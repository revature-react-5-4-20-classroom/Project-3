package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Trainer;

@Service
@Primary
public class TrainerService {

	public List<Trainer> getAll(){
		//return open feign grab to the dataService endpoint for all trainers 
		return new MockTrainer().getTrainers();
	}
	
	public List<Trainer> getByID(){
		//return open feign grab to the dataService endpoint for all trainers 
		return new MockTrainer().getTrainers();
	}
	
}
