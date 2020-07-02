package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Trainer;

@Service
@Primary
public class TrainerService {

  public List<Trainer> getAll() {
    // return open feign grab to the dataService endpoint for all
    return new MockTrainer().getTrainers();
  }

  public Trainer getByID(Integer id) {
    // return open feign grab to the dataService endpoint for one
    return new MockTrainer().getTrainerById(id);
  }

}
