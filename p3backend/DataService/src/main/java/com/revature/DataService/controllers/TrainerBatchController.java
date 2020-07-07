package com.revature.DataService.controllers;

import java.util.List;
import java.util.Optional;
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
import com.revature.DataService.models.Batch;
import com.revature.DataService.models.Trainer;
import com.revature.DataService.models.TrainerBatch;
import com.revature.DataService.repositories.BatchRepository;
import com.revature.DataService.repositories.TrainerBatchRepository;
import com.revature.DataService.repositories.TrainerRepository;
import com.revature.DataService.services.TrainerBatchService;

@CrossOrigin(origins = "*")
@RestController
public class TrainerBatchController {

  @Autowired
  TrainerBatchService trainerBatchService;

  @Autowired
  TrainerBatchRepository tbr;
  
  @Autowired
  BatchRepository batchRepo;
  
  @Autowired
  TrainerRepository trainerRepo;
  
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
      tbr.save(tb);
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
  
  @PostMapping("/trainerBatch")
  public String trainerPost(@RequestBody TrainerBatch tb) {
    try
    {
      System.out.println();
      System.out.println();
      System.out.println();
      System.out.println();
       System.out.print("TrainerBatch Post tb=");
       System.out.println(tb);
       
       int total=tbr.getTotalTrainerBatches(tb.getTrainerId(), tb.getBatchId());
       
       if(total==0)//if the tb pair is not already in the join table
       {
         tbr.insertTrainerBatch(tb.getTrainerId(), tb.getBatchId());
         return "TrainerBatch has been posted! total="+total;
       }
       else
       {
         return "TrainerBatch pair already exists and another was not posted. total="+total;
       }
    } catch (Exception e)
    {
      return e.getMessage();
      //throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
    }
  }
}














