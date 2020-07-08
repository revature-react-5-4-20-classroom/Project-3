package com.revature.DataService.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.DataService.models.Batch;
import com.revature.DataService.models.Trainer;
import com.revature.DataService.repositories.BatchRepository;
import com.revature.DataService.repositories.TrainerRepository;

@Service
public class BatchService {

  @Autowired
  BatchRepository batchRepository;
  
  @Autowired
  TrainerRepository trainerRepository;

  public List<Batch> getAll() {
    try {
      return batchRepository.findAll();
    } catch (Exception e) {
      return null;
      // throw new Exception("Issue getting all batches "+e.getMessage());
    }
  }

  public Batch getById(Integer id) throws Exception {
    Optional<Batch> batch = batchRepository.findById(id);
    if (batch.isPresent()) {
      return batch.get();
    } else {
      throw new Exception("batch not found");
    }
  }

  public Batch updateBatch(Batch batch) throws Exception {
    Integer id = batch.getBatchId();

    Optional<Batch> existingBatch = batchRepository.findById(id);
    if (existingBatch.isPresent()) {
      return batchRepository.save(batch);
    } else {
      throw new Exception("batch failed to update");
    }
  }

  public List<Batch> getByInProgress(Date d) {
    return batchRepository.findByInProgress(d);
  }

  public List<Batch> getBatchByCurricula(Integer id) {

    List<Batch> existingBatch = batchRepository.getBatchByCurriculaJ(id);
    return existingBatch;

  }

  public List<Batch> getBatchByClientId(Integer id) {

    List<Batch> existingBatch = batchRepository.getBatchByClient(id);
    return existingBatch;

  }
  
  public Batch batchtrain(Integer trainerId, Integer batchId) throws Exception {
    
    Optional<Batch> existingBatch = batchRepository.findById(batchId);
    Optional<Trainer> trainer = trainerRepository.findById(trainerId);
       
    
    if (existingBatch.isPresent()) {
     Batch batch=existingBatch.get();
     Trainer trainers=trainer.get();
     batch.setTrainerOne(trainers); //pushes a trainer into the list
     return batchRepository.save(batch);
     
     
    } else {
      throw new Exception("batch failed to update");
    }
    
  }
}
