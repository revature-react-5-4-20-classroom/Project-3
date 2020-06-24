package com.project3.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project3.models.Consent;
import com.project3.services.ConsentService;



@RestController
public class ConsentController {

	
	@Autowired
	ConsentService consentService;
	
	// get all items
		@CrossOrigin(origins = "*")
		@GetMapping("/consent")
		public List<Consent> getAllItems() {
			return consentService.getAll();
		}
		@CrossOrigin(origins="*")
		@GetMapping("/reviews/{itemId}")
	    public List<Consent> getAllReviews(@PathVariable Integer trainerId)
		{
		    
		    
	        return consentService.getConsentByTrainerId(trainerId);
		}
		
		@CrossOrigin(origins="*")
		@PatchMapping("/consent")
		public Consent updateConsentApproval(@RequestBody Consent consent) {
			return consentService.update(consent);
		}
		
		@CrossOrigin(origins="*")
		@PostMapping("/consent")
		public Consent createConsent(@RequestBody Consent consent) {
			return consentService.create(consent);
		}
	
	
}
