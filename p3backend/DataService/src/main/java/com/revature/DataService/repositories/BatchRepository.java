package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.DataService.models.Batch;


public interface BatchRepository extends JpaRepository<Batch, Integer>{

}