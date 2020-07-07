package com.revature.pkg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.pkg.model.Trainer;
import com.revature.pkg.repository.TrainerRepository;


@Service
public class TrainerService {

  @Autowired
  TrainerRepository trainerData;
  
  public Boolean checkTrainer(String email) {
	    return trainerData.checkTrainer(email).size() > 0;
	  }

public List<Trainer> getTrainerInfo(String email) {
	    return trainerData.checkTrainer(email);
	  }

}
