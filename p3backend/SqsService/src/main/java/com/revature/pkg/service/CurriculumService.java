package com.revature.pkg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.pkg.model.Curriculum;
import com.revature.pkg.repository.CurriculumRepository;


@Service
public class CurriculumService {

  @Autowired
  CurriculumRepository curriculumData;
  
  public Boolean checkCurriculum(String name) {
	    return curriculumData.checkCurriculum(name).size() > 0;
	  }

public List<Curriculum> getCurriculumInfo(String name) {
	    return curriculumData.checkCurriculum(name);
	  }

}
