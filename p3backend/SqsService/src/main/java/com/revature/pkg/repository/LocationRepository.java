package com.revature.pkg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.pkg.model.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer>{


	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "select * from proj3.location where location_name=:name",
		      nativeQuery = true)
	List<Location> checkLocation(String name);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	  @Query(value = "insert into proj3.location values(default,:name)",
		      nativeQuery = true)
	void createLocation(String name);

	  

}
