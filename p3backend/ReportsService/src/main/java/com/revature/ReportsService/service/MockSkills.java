package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Skills;

@Service
public class MockSkills {

  private List<Skills> skills;

  public MockSkills() {
    super();
  }

  public List<Skills> getSkills() {
    return skills;
  }

  public Skills getSkillById(Integer id) {
    Skills out = null;
    for (Skills s : this.skills) {
      if (s.getSkillId().equals(id)) {
        out = s;
        break;
      }
    }
    if (out == null) {
      throw new RuntimeException("Skills with the id " + id + " not found.");
    }
    return out;

  }


}
