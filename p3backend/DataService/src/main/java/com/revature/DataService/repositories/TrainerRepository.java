package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.DataService.models.Trainer;


public interface TrainerRepository extends JpaRepository<Trainer, Integer> {

}
