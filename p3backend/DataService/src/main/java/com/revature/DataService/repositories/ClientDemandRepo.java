package com.revature.DataService.repositories;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.revature.DataService.models.ClientDemand;
import com.revature.DataService.models.Skillset;

@Repository
public interface ClientDemandRepo extends JpaRepository<ClientDemand, Integer> {
  // we now have basic CRUD methods
  // we take our naming convention VERY seriously around here


  List<ClientDemand> findByClientDemandId(Integer clientDemandId);

  @Query("Select c from ClientDemand c where deadline >= :date")
  List<ClientDemand> findCurrentClientDemands(LocalDate date);
  
  // I don't believe this is working
  // List<ClientDemand> findByClientId(Integer clientId);

  // Not working
  // List<ClientDemand> findByClientDemandSkillSet(Skillset clientDemandSkillset);

}
