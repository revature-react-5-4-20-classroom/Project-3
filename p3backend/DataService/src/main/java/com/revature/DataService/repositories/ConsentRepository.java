package com.revature.DataService.repositories;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Consent;

@Repository
public interface ConsentRepository extends JpaRepository<Consent, Integer> {



  
  
//  @Query("select c from Consent c where (c.trainer.trainerId=:id and c.isApprovedColumn is null)") // HQL
//  List<Consent> getConsentByTrainerId(Integer id);
  
  @Query("select c from Consent c where c.isApprovedColumn is null") // HQL
  List<Consent> getConsentByTrainerId(Integer id);

}
