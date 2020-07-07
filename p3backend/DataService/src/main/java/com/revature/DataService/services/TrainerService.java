package com.revature.DataService.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.revature.DataService.exceptions.TrainerNotFoundException;
import com.revature.DataService.models.Skills;
import com.revature.DataService.models.Trainer;
import com.revature.DataService.repositories.TrainerRepository;

@Service
public class TrainerService {
  @Autowired
  TrainerRepository trainerRepository;

  public List<Trainer> getAll() {
    return trainerRepository.findAll();
  }

  public Trainer getById(Integer id) {
    Optional<Trainer> trainer = trainerRepository.findById(id);
    if (trainer.isPresent()) {
      return trainer.get();
    } else {
      throw new TrainerNotFoundException();
    }
  }
  
  
  // 7/6/20 SQS MOVE LATER
  public Trainer getByEmail(@PathVariable String email) {
    try {
      Trainer trainerWithEmail;
      trainerWithEmail = trainerRepository.findByEmail(email);
      return trainerWithEmail;
    } catch (Exception e) {
      System.out.println(e);
      throw new RuntimeException(e);
    }
  }
  // 7/6/20 Next go to trainer Service
  
  /*
   * public Trainer create(Trainer trainer) { trainer.setTrainerId(0); return
   * trainerRepository.save(trainer); }
   * 
   * public Trainer update(Trainer trainer) { Optional<Trainer> existingTrainer =
   * trainerRepository.findById(trainer.getTrainerId()); if(existingTrainer.isPresent()) { return
   * trainerRepository.save(trainer); }else { throw new TrainerNotFoundException(); } }
   */

}
