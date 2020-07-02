package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Skillset;

@Service
public class MockSkillset {

  private List<Skillset> skillsets;


  public MockSkillset() {
    super();
    // insert fake data here
  }


  public List<Skillset> getSkillsets() {
    return skillsets;
  }

  public Skillset getSkillsetById(Integer id) {
    Skillset out = null;
    for (Skillset i : this.skillsets) {
      if (i.getSkillsetId().equals(id)) {
        out = i;
        break;
      }
    }
    if (out == null) {
      throw new RuntimeException("Skillset with id " + id + " not found");
    }
    return out;
  }

}
