package com.revature.DataService.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Batch;

@Repository
public interface BatchRepository extends JpaRepository<Batch, Integer>{
	
	@Query("select b from Batch b where :param between b.startDate and b.endDate")
	public List<Batch> findByInProgress(Date param);
	
}
