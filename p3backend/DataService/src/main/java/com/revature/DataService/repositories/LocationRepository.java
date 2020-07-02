package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.revature.DataService.models.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {



}
