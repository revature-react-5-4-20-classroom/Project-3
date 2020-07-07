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
import com.revature.DataService.models.TrainerBatchIdentity;
import com.revature.DataService.models.TrainerBatchPost;
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
  @PatchMapping("/trainerBatch")
  public String trainerPatch(@RequestBody TrainerBatch tb)
  {
    try
    {
      System.out.println();
      System.out.println();
      System.out.println();
      System.out.println();
       System.out.print("TrainerBatch Patch tb=");
       System.out.println(tb);
      trainerBatchService.save(tb);
       //trainerBatchService.save(tb);
        return "TrainerBatch has been patched!";
    } catch (Exception e)
    {
      return e.getMessage();
      //throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
    }
  }
  
  
  
  @DeleteMapping("/trainerBatch")
  public String trainerDel(@RequestBody TrainerBatch tb) {
    try
    {
      System.out.println();
      System.out.println();
      System.out.println();
      System.out.println();
      System.out.print("TrainerBatch Delete tb=");
      System.out.println(tb);
      tbr.delete(tb);
      //trainerBatchService.delete(tb);
      return "TrainerBatch has been deleted!";
    } catch (Exception e)
    {
      return e.getMessage();
      //throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
    }
  }
  
  @PostMapping("/trainerbatch")
  public String trainerPost(@RequestBody TrainerBatchPost tb) {
    try
    {
      
       TrainerBatchIdentity tbi = new TrainerBatchIdentity(tb.getTrainerId(), tb.getBatchId());
       TrainerBatch tbNew = new TrainerBatch(tbi);
       
       //This will not add more than 5 rows into the trainerbatch for some reason
       //I assume there is some kind of limitation imposed on it by the database
       //maybe there is some business logic I do not know about
       trainerBatchService.save(tbNew);
      return "TrainerBatch has been posted!";
    } catch (Exception e)
    {
      return e.getMessage();
      //throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
    }
  }
}














