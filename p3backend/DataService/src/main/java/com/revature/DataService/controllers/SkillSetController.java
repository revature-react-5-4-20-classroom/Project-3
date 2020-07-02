package com.revature.DataService.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.revature.DataService.models.Skillset;
import com.revature.DataService.services.SkillSetService;

@RequestMapping(path = "/skillsets")
@RestController
public class SkillSetController {

  @Autowired
  SkillSetService skillSetService;

  @GetMapping
  public List<Skillset> getAllSkillSets() {
    return skillSetService.getAll();
  }

  @GetMapping("/{id}")
  public Skillset getSkillSetById(@PathVariable Integer id) {
    return skillSetService.getById(id);
  }
}
