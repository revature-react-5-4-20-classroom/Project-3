package com.revature.DataService.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.DataService.models.Curriculum;
import com.revature.DataService.repositories.CurriculumRepository;

@Service
public class CurriculumService {

  @Autowired
  CurriculumRepository curriculumRepository;

  public List<Curriculum> getAll() {
    return curriculumRepository.findAll();
  }

  public Curriculum getById(Integer id) {
    Optional<Curriculum> curriculum = curriculumRepository.findById(id);
    if (curriculum.isPresent()) {
      return curriculum.get();
    } else {
      // throw new CurriculumNotFoundException; // Maybe add in later?
      throw new RuntimeException();
    }
  }

}
