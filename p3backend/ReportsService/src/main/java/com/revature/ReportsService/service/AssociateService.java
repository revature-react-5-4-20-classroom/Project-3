package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Associate;

@Service
@Primary
public class AssociateService {

  // @Autowired
  // AssociateRepository associateRepository;

  public List<Associate> getAll() {
    // return associateRepository.getAll();
    return new MockAssociate().getAssociates();
  }

  public Associate getById(Integer id) {
    return new MockAssociate().getById(id);
  }

}
