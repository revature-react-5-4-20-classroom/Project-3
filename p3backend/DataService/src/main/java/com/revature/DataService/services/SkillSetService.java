package com.revature.DataService.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.DataService.models.Skillset;
import com.revature.DataService.repositories.SkillSetRepository;

@Service
public class SkillSetService {

  @Autowired
  SkillSetRepository skillSetRepository;

  public List<Skillset> getAll() {
    return skillSetRepository.findAll();
  }

  public Skillset getById(Integer id) {
    Optional<Skillset> skillset = skillSetRepository.findById(id);
    return skillset.get();
  }
}
