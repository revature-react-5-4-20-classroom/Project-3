package com.revature.pkg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Associate;
 
@Repository
public interface AssociateRepository extends JpaRepository<Associate, Integer>{


	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "insert into project3.associate values(default,:firstname,:lastname,:email,:active,:score,:batchid)",
		      nativeQuery = true)
		  void addAssociates(String firstname,String lastname,String email,boolean active, float score,Integer batchid);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "insert into project3.associate values(default,:firstname,:lastname,:email,:active,:score,null)",
		      nativeQuery = true)
		  void addAssociateswithoutBatch(String firstname,String lastname,String email,boolean active, float score);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "update project3.associate set assigned_batch_id=:batchid where email=:email",
		      nativeQuery = true)
		  void updateAssociates(Integer batchid,String email);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "update project3.associate set assigned_batch_id=null where assigned_batch_id=:batchid",
		      nativeQuery = true)
		  void unassignAssociates(Integer batchid);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from project3.associate where email=:email",
		      nativeQuery = true)
	List<Associate> checkAssociate(String email);
	  

}
