package com.revature.pkg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Skillset;

@Repository
public interface SkillsetRepository extends JpaRepository<Skillset, Integer>{


	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from project3.skillset where name=:name",
		      nativeQuery = true)
	List<Skillset> checkSkillset(String name);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "insert into project3.skillset values(default,:name)",
		      nativeQuery = true)
	void createSkillset(String name);
	  

}
