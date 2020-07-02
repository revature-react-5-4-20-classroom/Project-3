package com.revature.DataService.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.DataService.models.Consent;
import com.revature.DataService.repositories.ConsentRepository;



@Service
public class ConsentService {


  @Autowired
  ConsentRepository consentRepository;

  public List<Consent> getAll() {
    return consentRepository.findAll();
  }


  // public List<Consent> getConsentByTrainerId(Integer trainerId){
  // return consentRepository.getConsentByTrainerId(trainerId);
  // }

  public Consent create(Consent consent) {
    return consentRepository.save(consent);
  }

  public Consent update(Consent consent) {


    // We want to make sure the cat we're given exists before we save it to the DB
    Optional<Consent> existingConsents = consentRepository.findById(consent.getConsentId());
    if (existingConsents.isPresent()) {
      return consentRepository.save(consent);
    } else {
      throw new RuntimeException();
    }

  }
}
