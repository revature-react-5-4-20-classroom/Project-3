package com.project3.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.project3.repositories.TrainerRepository;

@Service
public class TrainerService {

	
	@Autowired
	TrainerRepository trainerRepository;
}
