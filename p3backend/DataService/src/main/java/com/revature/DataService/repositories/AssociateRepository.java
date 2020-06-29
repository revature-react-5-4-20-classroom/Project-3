package com.revature.DataService.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


import com.revature.DataService.models.Associate;

import org.springframework.data.jpa.repository.Query;



public interface AssociateRepository extends JpaRepository<Associate, Integer> {


//	@Query(value="select * from associate", nativeQuery=true)
//	public List<Associate> findAll();
	
	//@Query(value="update associates set assigned_batch_id = :assignedBatchId where associate_id = :associate_Id")
	//public void update(Integer associateId, Integer assignedBatchId);


}
