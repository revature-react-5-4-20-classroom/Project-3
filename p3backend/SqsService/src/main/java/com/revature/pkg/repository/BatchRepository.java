package com.revature.pkg.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Batch;

@Repository
public interface BatchRepository extends JpaRepository<Batch, Integer>{



	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from proj3.batch where location_id=:locationid and curriculum_id=:curriculumid ",
		      nativeQuery = true)
	List<Batch> getBatchInfo(Integer locationid,Integer curriculumid);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from proj3.batch where true",
		      nativeQuery = true)
	List<Batch> getRandomBatchInfo();
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "insert into proj3.batch values(default,:start,:end,:isConfirmed,:score,:programType"
	  		+ ":locationid,:curriculumid)",
		      nativeQuery = true)
	void createBatch(Date start,Date end,boolean isConfirmed,Integer score, String programType,
			Integer locationid, Integer curriculumid);
	  

}
