package com.revature.pkg.repository;

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
	  @Query(value = "insert into proj3.associate values(default,:firstname,:lastname,:email,false,:score,null)",
		      nativeQuery = true)
		  void addAssociates(String firstname,String lastname,String email,float score);
	  

}
