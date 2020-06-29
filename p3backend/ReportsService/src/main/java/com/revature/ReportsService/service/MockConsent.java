package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Consent;

@Service
public class MockConsent {
	private List<Consent> consents;

	public MockConsent() {
		super();
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
