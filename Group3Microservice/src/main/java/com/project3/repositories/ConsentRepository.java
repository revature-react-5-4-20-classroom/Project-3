package com.project3.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.project3.models.Consent;

public interface ConsentRepository extends JpaRepository<Consent, Integer>{

}
