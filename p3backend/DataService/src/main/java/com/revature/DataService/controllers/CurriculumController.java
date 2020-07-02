package com.revature.DataService.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.revature.DataService.models.Curriculum;
import com.revature.DataService.services.CurriculumService;

@RequestMapping(path = "/curricula")
@RestController
public class CurriculumController {

  @Autowired
  CurriculumService curriculumService;

  @GetMapping
  public List<Curriculum> getAllCurricula() {
    return curriculumService.getAll();
  }

  @GetMapping("/{id}")
  public Curriculum getCurriculumById(@PathVariable Integer id) {
    // try {
    return curriculumService.getById(id);
    // } catch (CurriculumNotFoundException e) {
    // throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    // }
  }

}
