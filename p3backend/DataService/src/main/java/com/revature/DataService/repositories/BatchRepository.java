package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Batch;


@Repository
public interface BatchRepository extends JpaRepository<Batch, Integer>{

}
