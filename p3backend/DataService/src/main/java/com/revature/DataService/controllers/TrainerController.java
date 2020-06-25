package com.revature.DataService.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.revature.DataService.exceptions.TrainerNotFoundException;
import com.revature.DataService.models.Skills;
import com.revature.DataService.models.Skillset;
import com.revature.DataService.models.SkillsetSkills;
import com.revature.DataService.models.Trainer;
import com.revature.DataService.services.TrainerService;

@RestController
public class TrainerController {

	@Autowired
	TrainerService trainerService;
	
	  @GetMapping("/trainer")
	  public List<Trainer> getAllTrainers() {
	    return trainerService.getAll();
	  } 
	  
	  @GetMapping("/trainer/{id}")
	  public Trainer getTrainerById(@PathVariable Integer id) {
	    try {
	      return trainerService.getById(id);
	    }catch(TrainerNotFoundException e) {
	      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	    }
	  }
	  //Commented out until Trainer skillset is defined/implemented
	  
	   
	  @GetMapping("/trainer/eligible/{id}")
	  public boolean getTrainerByEligibility(@RequestBody ArrayList<Skills>cSkills, @PathVariable Integer id) {
	    Trainer trainer = trainerService.getById(id);
	    Skillset ss = trainer.getTrainerSkills();
	    List<SkillsetSkills> sss = ss.getSkillSetSkils();
	    List<Skills> trainerSkillList = sss.get(0).getSkills();
	      if(skillsComparison(trainerSkillList, cSkills)) {
	    	  return true;
	      } else {
	    	  return false;
	      }
	  }
	  
	  public boolean skillsComparison(List<Skills> tSkills, ArrayList<Skills> cSkills) {
		    ArrayList<String> sharedSkills = new ArrayList<String>();
		    for(Skills i : cSkills) {
		      for (Skills x: tSkills) {
		        if(x.getSkillName().equals(i.getSkillName()))
		          sharedSkills.add(x.getSkillName());
		      }
		    }
		    System.out.print("Shared Trainer Skills with Curriculum: ");
		    for(String p : sharedSkills)
		      System.out.print(p + " ");
		    if(sharedSkills.size() / cSkills.size() > .8)
		      return true;
		    else
		      return false;
		  }
	  
	  
	  /*
	  @PostMapping
	  public Trainer createTrainer(@RequestBody Trainer trainer) {
	    return trainerService.create(trainer);
	  }
	  
	  @PostMapping("/{id}")
	  public Trainer updateTrainerWithId(@RequestBody Trainer trainer,@PathVariable Integer id) {
	    trainer.setTrainerId(id);
	    return trainerService.update(trainer);
	  }
	  */
	  
}
