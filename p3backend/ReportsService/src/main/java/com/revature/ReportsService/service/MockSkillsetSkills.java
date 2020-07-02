package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.SkillsetSkills;

@Service
public class MockSkillsetSkills {

  private List<SkillsetSkills> skillsetSkills;

  public MockSkillsetSkills() {
    super();
  }

  public List<SkillsetSkills> getSkillsetSkills() {
    return skillsetSkills;
  }

  public SkillsetSkills getSkillsetSkillsById(Integer id) {
    SkillsetSkills out = null;
    for (SkillsetSkills s : this.skillsetSkills) {
      if (s.getSkillsetId().equals(id)) {
        out = s;
        break;
      }
    }
    if (out == null) {
      throw new RuntimeException("SkillsetSkills with the id " + id + " not found");
    }
    return out;
  }



}
