package com.revature.pkg.repository;

import java.util.List;

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
	  @Query(value = "insert into project3.trainerbatch values(:trainerid,:batchid)",
		      nativeQuery = true)
	void createTrainerBatch(Integer trainerid, Integer batchid);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from  project3.trainerbatch where trainer_id=:trainerid and batch_id=:batchid",
		      nativeQuery = true)
	List<Trainerbatch> checkTrainerBatch(Integer trainerid, Integer batchid);
	  

}
