package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Skillset;

@Service
@Primary
public class SkillsetService {

  public List<Skillset> getAll() {
    // return open feign grab to the dataService endpoint for all
    return new MockSkillset().getSkillsets();
  }

  public Skillset getByID(Integer id) {
    // return open feign grab to the dataService endpoint for one
    return new MockSkillset().getSkillsetById(id);
  }

}
