package com.revature.pkg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.pkg.model.Skillset;
import com.revature.pkg.repository.SkillsetRepository;


@Service
public class SkillsetService {

  @Autowired
  SkillsetRepository skillsetData;
  
  
  public Boolean checkSkillset(String name) {
	    return skillsetData.checkSkillset(name).size() > 0;
	  }
  
  public List<Skillset> getSkillsetInfo(String name) {
	    return skillsetData.checkSkillset(name);
	  }
  

}
