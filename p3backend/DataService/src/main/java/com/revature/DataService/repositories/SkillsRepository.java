package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Skills;

@Repository
public interface SkillsRepository extends JpaRepository<Skills, Integer> {



}
