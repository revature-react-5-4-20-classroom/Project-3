package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Associate;
import com.revature.ReportsService.models.SkillsetSkills;

@Service
public class MockSkillsetSkills {

  private List<SkillsetSkills> skillsetSkills;
  
  public MockSkillsetSkills() {
    super();
    skillsetSkills = new ArrayList<SkillsetSkills>();
    skillsetSkills.add(new SkillsetSkills(0, 0));
    skillsetSkills.add(new SkillsetSkills(0, 1));
    skillsetSkills.add(new SkillsetSkills(1, 1));
    skillsetSkills.add(new SkillsetSkills(1, 3));
    skillsetSkills.add(new SkillsetSkills(2, 2));
  }
  
  public List<SkillsetSkills> getSkillsetSkills() {
    return skillsetSkills;
  }
  
  public SkillsetSkills getSkillsetSkillsById(Integer id) {
    SkillsetSkills out = null;
    for (SkillsetSkills s: this.skillsetSkills) {
      if (s.getSkillsetId().equals(id)) {
        out = s;
        break;
      }
    }
    if(out ==null) {
      throw new RuntimeException("SkillsetSkills with the id " + id + " not found");
    }
    return out;
  }
  
  
  
  
}
