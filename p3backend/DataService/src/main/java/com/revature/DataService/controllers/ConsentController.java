package com.revature.DataService.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.DataService.models.Consent;
import com.revature.DataService.services.ConsentService;


@CrossOrigin(origins = "*")
@RestController

public class ConsentController {

	
	@Autowired
	ConsentService consentService;
	
	// get all items
		@CrossOrigin(origins = "*")
		@GetMapping("/consent")
		public List<Consent> getAllConsents() {
			return consentService.getAll();
		}
<<<<<<< HEAD
		@CrossOrigin(origins="*")
		@GetMapping("/consent/{trainerId}")
	    public List<Consent> getAllReviews(@PathVariable Integer trainerId){   
	        return consentService.getConsentByTrainerId(trainerId);
		}
//		
=======
//		@CrossOrigin(origins="*")
//		@GetMapping("/consent/{trainerId}")
//	    public List<Consent> getAllReviews(@PathVariable Integer trainerId){   
//	        return consentService.getConsentByTrainerId(trainerId);
//		}
		
>>>>>>> 2045e8691e7168fa0d0f1a9b1cf33261cbfe18ec
		@CrossOrigin(origins="*")
		@PatchMapping("/consent")
		public Consent updateConsentApproval(@RequestBody Consent consent) {
			System.out.println(consent);
			System.out.println("patch endpoint hit");
			Consent consentToReturn;
			try {
				consentToReturn =  consentService.update(consent);
				System.out.println(consentToReturn);
				return consentToReturn;
			} catch(RuntimeException e) {
				System.out.println(e);
				throw new RuntimeException(e);
				
			}
			
			
		}
		
		@CrossOrigin(origins="*")
		@PostMapping("/consent")
		public Consent createConsent(@RequestBody Consent consent) {
			return consentService.create(consent);
		}
	
	
}
