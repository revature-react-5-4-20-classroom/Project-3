package com.revature.pkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Skills;

@Repository
public interface SkillsRepository extends JpaRepository<Skills, Integer>{


	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "insert into proj3.skills values(:skillId,:name)",
		      nativeQuery = true)
	void addSkill(Integer skillId,String name);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "delete from proj3.skills where skill_id=:skillId and skill_name=:name",
		      nativeQuery = true)
	void deleteSkill(Integer skillId,String name);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select from proj3.skills where skill_id=:skillId and skill_name=:name",
		      nativeQuery = true)
	boolean checkSkill(Integer skillId,String name);
	  

}
