package com.project3.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project3.models.Associate;
import com.project3.repositories.AssociateRepository;

@Service
public class AssociateService {
	@Autowired
	AssociateRepository associateRepository;
	
	public List<Associate> getAllAssociates()  {
		
		return associateRepository.findAll();
	}
	
public void updateAssociateBatch(Integer associateId, Integer assignedBatchId) {
	associateRepository.update(associateId, assignedBatchId);
}
	
	
}
