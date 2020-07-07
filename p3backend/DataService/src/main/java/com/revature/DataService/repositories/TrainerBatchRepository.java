package com.revature.DataService.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.revature.DataService.models.Skills;
import com.revature.DataService.models.TrainerBatch;


@Repository
public interface TrainerBatchRepository extends JpaRepository<TrainerBatch, Integer> {
  
  //inserts a new trainerBatch pair into the join table representing trainers assigned to batches
  //@Transactional
  
  //Defines whether we should clear the underlying persistence context after executing the modifying query.
  //@Modifying(clearAutomatically = true)
  
  //Defines whether we should flush the underlying persistence context before executing the modifying query.
  //@Modifying(flushAutomatically=true)
  @Transactional
  @Modifying(clearAutomatically = true)
  @Query(value = "insert into project3.trainerbatch values(:trainerid,:batchid)",nativeQuery = true)
  void insertTrainerBatch(Integer trainerid, Integer batchid);
  
  
  //returns the total number of trainerBatches (trainers assigned to a batch) given a trainerid and batchid pair
  //@Transactional
  //@Modifying(clearAutomatically = true)
  @Query(value = "select count(*) from project3.trainerbatch where trainer_id=:trainerid and batch_id=:batchid",nativeQuery = true)
  Integer getTotalTrainerBatches(Integer trainerid, Integer batchid);
  
}
