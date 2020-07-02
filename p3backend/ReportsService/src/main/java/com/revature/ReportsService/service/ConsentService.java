package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Consent;

@Service
@Primary
public class ConsentService {
  public List<Consent> getAll() {
    // return open feign grab to the dataService endpoint for all
    return new MockConsent().getConsents();
  }

  public Consent getByID(Integer id) {
    // return open feign grab to the dataService endpoint for one
    return new MockConsent().getConsentById(id);
  }
}
