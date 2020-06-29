package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Curriculum;
import com.revature.ReportsService.models.Skillset;

@Service
public class MockSkillset {

private List<Skillset> skillsets;
	
	
	public MockSkillset() {
		super();
		//insert fake data here
		this.skillsets = new ArrayList<Skillset>();
		this.skillsets.add(new Skillset(1,"java"));
		this.skillsets.add(new Skillset(2,"react"));
		this.skillsets.add(new Skillset(3,"big data"));
	}


	public List<Skillset> getSkillsets() {
		return skillsets;
	}
	
	public Skillset getSkillsetById(Integer id) {
		Skillset out = null;
		for(Skillset i : this.skillsets) {
			if(i.getSkillsetId().equals(id)) {
				out = i;
				break; 
			}
		}
		if(out == null) {
			throw new RuntimeException("Skillset with id " + id + " not found");
		}
		return out;
	}
	
}
