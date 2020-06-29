package com.revature.DataService.controllers;

import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.revature.DataService.models.Batch;
import com.revature.DataService.services.BatchService;

@RestController
public class BatchController {
	@Autowired
	BatchService batchService;
	
	@GetMapping("/batches")
	public List<Batch> getAllBatches() {
	  return batchService.getAll();
	}
	
	@GetMapping("/batches/{id}")
	public Batch getBatchById(@PathVariable Integer id) {
	  try {
        return batchService.getById(id);
      } catch (Exception e) {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
      }
	}
	
//	@PatchMapping("batches/{id}")
//	public Batch updateBatchWithId(@RequestBody Batch batch, @PathVariable Integer id) {
//	  batch.setBatchId(id);
//	  try {
//        return batchService.updateBatch(batch);
//      } catch (Exception e) {
//          throw new ResponseStatusException(HttpStatus.CONFLICT);
//      }
//	}
//	
	

	@GetMapping("/batches/date/{date}")
	public List<Batch> getInProgressBatches(@PathVariable String date) {
		try {
			DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			Date d = df.parse(date);
			return batchService.getByInProgress(d);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,e.getMessage());
		}
	}
	@GetMapping("/batches/curricula/{id}")  //get batches by curricula id
	public List<Batch> getBatchesByCurricula(@PathVariable Integer id){
		
		try {
			return batchService.getBatchByCurricula(id);
			
		}catch(RuntimeException e) {
			  throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/batches/clients/{id}")
	public List<Batch> getBatchesByClients(@PathVariable Integer id){
		try {
			return batchService.getBatchByClientId(id);
			
		}catch(RuntimeException e) {
			  throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
	}
	

}
