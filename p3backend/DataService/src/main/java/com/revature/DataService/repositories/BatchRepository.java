package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Batch;

@Repository
public interface BatchRepository extends JpaRepository<Batch, Integer>{
	
	@Query("select b from Batch b where :param between b.startDate and b.endDate")
	public List<Batch> findByInProgress(Date param);



@Query("select c from Batch c where c.curriculum.curriculumId=:id ")
	List<Batch> getBatchByCurriculaJ(Integer id);
	
	@Query("select b from Batch b join "
	+ "  b.curriculum.curriculumSkillset.clientDemands c where c.client.clientId=:id" )
	List<Batch> getBatchByClient(Integer id);
	
}
