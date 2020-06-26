package com.revature.DataService.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.revature.DataService.models.ClientDemand;
import com.revature.DataService.models.Skillset;

@Repository
public interface ClientDemandRepo extends JpaRepository<ClientDemand, Integer> 
{
  //we now have basic CRUD methods
  //we take our naming convention VERY seriously around here
  
  List<ClientDemand> findByClientDemandId(Integer clientDemandId);
  
  // I don't believe this is working
//  List<ClientDemand> findByClientId(Integer clientId);
  
  // Not working
//  List<ClientDemand> findByClientDemandSkillSet(Skillset clientDemandSkillset);
  
}
