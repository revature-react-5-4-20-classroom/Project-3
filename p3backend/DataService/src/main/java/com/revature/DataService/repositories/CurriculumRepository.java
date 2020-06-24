package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.DataService.models.Curriculum;

public interface CurriculumRepository extends JpaRepository<Curriculum,Integer> {

}
