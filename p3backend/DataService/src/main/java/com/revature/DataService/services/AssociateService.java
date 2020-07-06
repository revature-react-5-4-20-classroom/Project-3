package com.revature.DataService.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.revature.DataService.models.Associate;
import com.revature.DataService.repositories.AssociateRepository;

@Service
public class AssociateService
{

  @Autowired
  AssociateRepository associateRepository;

  public Associate getById(Integer id) throws Exception
  {
    Optional<Associate> associate = associateRepository.findById(id);
    if (associate.isPresent())
    {
      return associate.get();
    } else
    {
      throw new Exception("associate not found");
    }
  }

  public List<Associate> getAll()
  {

    return associateRepository.findAll();
  }

  public List<Associate> getAllActive()
  {
    return associateRepository.findAllWhere();
  }


  public String updateAssociate(Associate a)
  {
    try
    {
      associateRepository.save(a);
      return "Associate has been updated!";
    } catch (Exception e)
    {
      return e.getMessage();
      //throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
    }
  }
}

