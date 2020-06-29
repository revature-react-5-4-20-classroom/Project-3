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
	
	public List<Batch> getAll() {
	  return batchRepository.findAll();
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
	  Optional<Batch> existingBatch = batchRepository.findById(batch.getBatchId());
	  if (existingBatch.isPresent()) {
        return batchRepository.save(batch);
      } else {
        throw new Exception("batch failed to update");
      }
	}
	
	public List<Batch> getByInProgress(Date d) {
		return batchRepository.findByInProgress(d);
	}
}
