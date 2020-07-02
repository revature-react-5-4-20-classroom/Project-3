package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Curriculum;

@Repository
public interface CurriculumRepository extends JpaRepository<Curriculum, Integer> {

}
