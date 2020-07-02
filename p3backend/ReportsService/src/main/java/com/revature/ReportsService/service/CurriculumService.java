package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Curriculum;

@Service
@Primary
public class CurriculumService {

  public List<Curriculum> getAll() {
    // Return openFeign grab to db endpoing for all
    return new MockCurriculum().getCurricula();
  }

  public Curriculum getById(Integer id) {
    return new MockCurriculum().getCurriculumById(id);
  }
}
