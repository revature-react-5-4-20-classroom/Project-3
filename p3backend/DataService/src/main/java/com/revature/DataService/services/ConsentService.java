package com.revature.DataService.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.DataService.models.Consent;
import com.revature.DataService.repositories.ConsentRepository;


@Service
public class ConsentService {

	
	@Autowired
	ConsentRepository consentRepository;
	
	public List<Consent> getAll(){
		return consentRepository.findAll();
	}
	
	public List<Consent> getConsentByTrainerId(Integer id){
		return consentRepository.getConsentByTrainerId(id);
	}
	
	public Consent create(Consent consent) {
		return consentRepository.save(consent);
	}
	
	public Consent update(Consent consent) {
		return consentRepository.save(consent);
	}
}
