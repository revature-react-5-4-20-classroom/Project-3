package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Curriculum;
import com.revature.ReportsService.models.Skills;

@Service
public class MockSkills {

  private List<Skills> skills;
  
  public MockSkills() {
    super();
    this.skills = new ArrayList<Skills>();
    this.skills.add(new Skills(1,"java"));
    this.skills.add(new Skills(2,"spring"));
    this.skills.add(new Skills(4,"java script"));
    this.skills.add(new Skills(3,"big data")); 	
  }
  
  public List<Skills> getSkills() {
    return skills;
  }
  
  public Skills getSkillById(Integer id) {
    Skills out = null;
    for (Skills s: this.skills) {
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
