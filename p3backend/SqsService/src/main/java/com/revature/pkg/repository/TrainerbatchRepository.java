package com.revature.pkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Trainerbatch;

@Repository
public interface TrainerbatchRepository extends JpaRepository<Trainerbatch, Integer>{


	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from trainerbatch",
		      nativeQuery = true)
	Trainerbatch select();
	  

}
