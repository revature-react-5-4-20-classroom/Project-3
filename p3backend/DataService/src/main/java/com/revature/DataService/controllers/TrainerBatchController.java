package com.revature.DataService.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.DataService.models.TrainerBatch;
import com.revature.DataService.services.TrainerBatchService;

@RestController
public class TrainerBatchController {

	@Autowired
	TrainerBatchService trainerBatchService;
	
	
	@PostMapping("/trainerbatch")
	 public TrainerBatch createTrainer(@RequestBody TrainerBatch trainerBatch) {
	    return trainerBatchService.create(trainerBatch);
	 }
}
