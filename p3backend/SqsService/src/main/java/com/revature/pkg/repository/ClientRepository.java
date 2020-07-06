package com.revature.pkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer>{


	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from client",
		      nativeQuery = true)
			Client select();
	  

}
