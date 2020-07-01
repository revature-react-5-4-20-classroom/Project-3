package com.sqstests.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sqstests.models.Data;

public interface DataRepository extends JpaRepository<Data, Integer> {

}
