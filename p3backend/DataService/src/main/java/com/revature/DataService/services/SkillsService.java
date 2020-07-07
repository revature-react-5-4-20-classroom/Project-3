package com.revature.DataService.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.DataService.models.Location;
import com.revature.DataService.models.Skills;
import com.revature.DataService.models.Skillset;
import com.revature.DataService.repositories.SkillsRepository;


@Service
public class SkillsService {



  @Autowired
  SkillsRepository skillsRepository;



  public List<Skills> getAll() {
    return skillsRepository.findAll();
  }

  public Skills getbyId(Integer id) {
    Optional<Skills> existing = skillsRepository.findById(id);
    if (existing.isPresent()) {
      return existing.get();
    } else {
      throw new RuntimeException("no id");
    }
  }


  public Skills save(Skills skill) {
    skill.setSkillId(0);
    return skillsRepository.save(skill);
  }


  public Skills update(Skills skill) {
    Optional<Skills> existing = skillsRepository.findById(skill.getSkillId());
    if (existing.isPresent()) {
      return skillsRepository.save(skill);
    } else {
      throw new RuntimeException("skill not found");
    }



  }


}


