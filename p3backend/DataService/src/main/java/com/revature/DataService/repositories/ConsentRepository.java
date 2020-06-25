package com.revature.DataService.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Consent;


@Repository
public interface ConsentRepository extends JpaRepository<Consent, Integer>{

	
	@Query("select c from Consent c where c.trainerId=:id") //HQL
	  List<Consent> getConsentByTrainerId(Integer id);
}
