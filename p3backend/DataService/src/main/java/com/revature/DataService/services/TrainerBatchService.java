package com.revature.DataService.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.revature.DataService.models.Skills;
import com.revature.DataService.models.TrainerBatch;
import com.revature.DataService.repositories.SkillsRepository;
import com.revature.DataService.repositories.TrainerBatchRepository;


@Service
public class TrainerBatchService {


  @Autowired
  TrainerBatchRepository trainerBatchRepository;

  
  public TrainerBatch save(TrainerBatch trainerBatch) {
    return trainerBatchRepository.save(trainerBatch);
  }
  
  public void delete(TrainerBatch trainerBatch) {
    trainerBatchRepository.delete(trainerBatch);
  }
}
