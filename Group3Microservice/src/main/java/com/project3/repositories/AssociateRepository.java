package com.project3.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.project3.models.Associate;

public interface AssociateRepository extends JpaRepository<Associate, Integer> {

	@Query(value="select * from associates", nativeQuery=true)
	public List<Associate> findAll();
	
	@Query(value="update associates set assigned_batch_id = :assignedBatchId where associate_id = :associate_Id")
	public void update(Integer associateId, Integer assignedBatchId);


}


