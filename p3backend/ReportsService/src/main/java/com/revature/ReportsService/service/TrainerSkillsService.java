package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.TrainerSkills;

@Service
@Primary
public class TrainerSkillsService {

  public List<TrainerSkills> getAll() {
    // return open feign grab to the dataService endpoint for all
    return new MockTrainerSkills().getTrainerSkillsAll();
  }

  public List<Integer> getByID(Integer id) {
    // return open feign grab to the dataService endpoint for one
    return new MockTrainerSkills().getTrainerSkillsById(id);
  }

}
