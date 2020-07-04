package com.revature.DataService.controllers;

import java.util.List;
import org.hibernate.criterion.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.revature.DataService.models.Associate;
import com.revature.DataService.models.TrainerBatch;
import com.revature.DataService.repositories.TrainerBatchRepository;
import com.revature.DataService.services.TrainerBatchService;

@CrossOrigin(origins = "*")
@RestController
public class TrainerBatchController {

  @Autowired
  TrainerBatchService trainerBatchService;

  @Autowired
  TrainerBatchRepository tbr;
  
  @GetMapping("/trainerBatchAll")
  public List<TrainerBatch> trainerBatchAll()
  {
    return tbr.findAll();
  }
  
  /*
   * TrainerBatch looks like this {trainerId,batchId}
   */
  //@JsonIgnoreProperties({})
  @PatchMapping("/trainerBatch/{del}")
  public String trainerPatch(@RequestBody TrainerBatch tb,@PathVariable Integer del)
  {
    try
    {
      if(del==123456789)
      {
        tbr.delete(tb);
        return "TrainerBatch has been DELETED!";
      }
      else
      {
        tbr.save(tb);
        return "TrainerBatch has been SAVED!";
       
      }
    } catch (Exception e)
    {
      return e.getMessage();
      //throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
    }
  }
  
  @PostMapping("/trainerBatch")
  public String trainerPost(@RequestBody TrainerBatch tb) {
    try
    {
      tbr.save(tb);
      return "TrainerBatch has been posted!";
    } catch (Exception e)
    {
      return e.getMessage();
      //throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
    }
  }
  
  //Could not send a body in axios delete on frontend
  @DeleteMapping("/trainerBatch")
  public String trainerDel(@RequestBody TrainerBatch tb) {
    try
    {
      tbr.delete(tb);
      return "TrainerBatch has been removed!";
    } catch (Exception e)
    {
      return e.getMessage();
      //throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
    }
  }
}














