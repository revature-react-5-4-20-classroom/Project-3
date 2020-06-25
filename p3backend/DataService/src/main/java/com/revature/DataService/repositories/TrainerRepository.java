package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Trainer;


@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer> {

}
