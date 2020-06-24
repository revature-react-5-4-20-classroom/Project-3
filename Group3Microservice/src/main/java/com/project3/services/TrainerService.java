package com.project3.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project3.exceptions.TrainerNotFoundException;
import com.project3.models.Trainer;
import com.project3.repositories.TrainerRepository;

@Service
public class TrainerService {
	@Autowired
	TrainerRepository trainerRepository;
	
	public List<Trainer> getAll(){
	    return trainerRepository.findAll();
	  }
	  
	  public Trainer getById(Integer id) {
	    Optional<Trainer> trainer = trainerRepository.findById(id);
	    if(trainer.isPresent()) {
	      return trainer.get();
	    }else {
	      throw new TrainerNotFoundException();
	    }
	  }
	  /*
	  public Trainer create(Trainer trainer) {
	    trainer.setTrainerId(0);
	    return trainerRepository.save(trainer);
	  }
	  
	  public Trainer update(Trainer trainer) {
	    Optional<Trainer> existingTrainer = trainerRepository.findById(trainer.getTrainerId());
	    if(existingTrainer.isPresent()) {
	      return trainerRepository.save(trainer);
	    }else {
	      throw new TrainerNotFoundException();
	    }
	  }
	  */
}
