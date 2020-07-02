package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.context.annotation.Primary;

import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Skills;

@Service
@Primary
public class SkillsService {


  public List<Skills> getAll() {
    return new MockSkills().getSkills();
  }

  public Skills getById(Integer id) {
    return new MockSkills().getSkillById(id);
  }
}
