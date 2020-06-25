package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.revature.DataService.models.ClientDemand;

@Repository
public interface ClientDemandRepo extends JpaRepository<ClientDemand, Integer> 
{
  //we now have basic CRUD methods
  //we take our naming convention VERY seriously around here
  
  ClientDemand findByClientDemandId(Integer clientDemandId);
  
  ClientDemand findByClientId(Integer clientId);
}
