package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Consent;

@Service
public class MockConsent {
	private List<Consent> consents;
    private Integer nextId;

	public MockConsent() {
		super();
		this.consents = new ArrayList<Consent>();
		this.consents.add(new Consent(1, 1, 1, false));
        this.consents.add(new Consent(2, 2, 2, true));
        this.consents.add(new Consent(3, 3, 3, false));
        this.consents.add(new Consent(4, 4, 4, false));
        this.nextId = 5;
		
	}

	public List<Consent> getConsents() {
		return this.consents;
	}

	public Consent getConsentById(Integer id) {
		Consent out = null;
		for (Consent c : this.consents) {
			if (c.getConsentId().equals(id)) {
				out = c;
				break;
			}
		}
		if (out == null) {
			throw new RuntimeException("consent with id " + id + " not found");
		}
		return out;
	}
}
