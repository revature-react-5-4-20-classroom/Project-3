package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.SkillsetSkills;

@Service
@Primary
public class SkillsetSkillsService {

  public List<SkillsetSkills> getAll() {
    return new MockSkillsetSkills().getSkillsetSkills();
  }

  public SkillsetSkills getById(Integer id) {
    return new MockSkillsetSkills().getSkillsetSkillsById(id);
  }
}
