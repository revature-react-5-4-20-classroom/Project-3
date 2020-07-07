package com.revature.pkg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Curriculum;

@Repository
public interface CurriculumRepository extends JpaRepository<Curriculum, Integer>{


	
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from proj3.curriculum where name=:name",
		      nativeQuery = true)
	List<Curriculum> checkCurriculum(String name);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "insert into proj3.curriculum values(default,:name,:id)",
		      nativeQuery = true)
	void createCurriculum(String name,Integer id);
	  

}
