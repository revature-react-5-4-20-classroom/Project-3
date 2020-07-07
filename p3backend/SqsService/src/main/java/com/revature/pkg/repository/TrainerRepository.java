package com.revature.pkg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{


	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from proj3.trainer where email=:email",
		      nativeQuery = true)
	List<Trainer> checkTrainer(String email);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "insert into proj3.trainer values(default,:firstname,:lastname,:email,:isEligible)",
		      nativeQuery = true)
	void createTrainer(String firstname,String lastname, String email, boolean isEligible);
	  

}
