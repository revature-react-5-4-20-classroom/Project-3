package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.revature.DataService.models.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

}
