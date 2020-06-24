package com.project3.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project3.models.Trainer;


public interface TrainerRepository extends JpaRepository<Trainer, Integer> {

}
