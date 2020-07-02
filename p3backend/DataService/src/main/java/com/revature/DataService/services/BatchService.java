package com.revature.DataService.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.DataService.models.Batch;

import com.revature.DataService.repositories.BatchRepository;

@Service
public class BatchService {

	@Autowired
	BatchRepository batchRepository;
	
	public List<Batch> getAll()
	{
	  try
	  {
	    return batchRepository.findAll();
	  }
	  catch(Exception e)
	  {
	     return null;
	    //hrow new Exception("Issue getting all batches "+e.getMessage());
	  }
	}
	
	public Batch getById(Integer id) throws Exception {
	  Optional<Batch> batch = batchRepository.findById(id);
	  if(batch.isPresent()) {
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

public List<Batch> getBatchByCurricula(Integer id){
		
		List<Batch> existingBatch=batchRepository.getBatchByCurriculaJ(id);
		return existingBatch;
		
	}
	
	public List<Batch> getBatchByClientId(Integer id){
		
		List<Batch> existingBatch=batchRepository.getBatchByClient(id);
		return existingBatch;
		
	}	
}
