package com.revature.DataService.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.DataService.models.Associate;
import com.revature.DataService.repositories.AssociateRepository;

@Service
public class AssociateService {
	@Autowired
	AssociateRepository associateRepository;
	
	public Associate[] getAllAssociates()  {
		
		return (Associate[])(associateRepository.findAll()).toArray();
	}
	
public void updateAssociateBatch(Integer associateId, Integer assignedBatchId) {
	associateRepository.update(associateId, assignedBatchId);
}
	
	
}

