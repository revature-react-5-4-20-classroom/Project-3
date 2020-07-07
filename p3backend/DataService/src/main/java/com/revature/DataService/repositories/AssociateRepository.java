package com.revature.DataService.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.revature.DataService.models.Associate;

public interface AssociateRepository extends JpaRepository<Associate, Integer> {


  public Associate save(Associate a);

  @Query("select a from Associate a where a.active = true")
  List<Associate> findAllWhere();
}
