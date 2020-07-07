package com.revature.pkg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.pkg.repository.AssociateRepository;


@Service
public class AssociateService {

  @Autowired
  AssociateRepository associatedData;
  
  public Boolean checkAssociate(String email) {
	    return associatedData.checkAssociate(email).size() > 0;
	  }

}
