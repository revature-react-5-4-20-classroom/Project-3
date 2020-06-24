package com.project3.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.project3.exceptions.TrainerNotFoundException;
import com.project3.models.Trainer;
import com.project3.services.TrainerService;

@RestController
public class TrainerController {

	@Autowired
	TrainerService trainerService;
	
	@GetMapping
	  public List<Trainer> getAllTrainers() {
	    return trainerService.getAll();
	  } 
	  
	  @GetMapping("/{id}")
	  public Trainer getTrainerById(@PathVariable Integer id) {
	    try {
	      return trainerService.getById(id);
	    }catch(TrainerNotFoundException e) {
	      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	    }
	  }
	  /*
	  @PostMapping
	  public Trainer createTrainer(@RequestBody Trainer trainer) {
	    return trainerService.create(trainer);
	  }
	  
	  @PostMapping("/{id}")
	  public Trainer updateTrainerWithId(@RequestBody Trainer trainer,@PathVariable Integer id) {
	    trainer.setTrainerId(id);
	    return trainerService.update(trainer);
	  }
	  */
}
