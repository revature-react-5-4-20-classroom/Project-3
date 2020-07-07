package com.revature.DataService.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Trainer;


@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer> {

  @Query("select t from Trainer t where t.email = :email")
  public Trainer findByEmail(String email);
}
