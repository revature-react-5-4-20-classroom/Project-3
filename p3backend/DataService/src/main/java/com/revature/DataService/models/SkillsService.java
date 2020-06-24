package com.revature.DataService.models;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SkillsService {
	
	
	
	@Autowired
	SkillsDao skillsDao;
	
	
	
	
	public List<Skills> getAll() {
		return skillsDao.findAll();
	}
	
	
	public Skills save(Skills skill) {
		skill.setSkillId(0);
		return skillsDao.save(skill);
	}
	
	
	public Skills update(Skills skill) {
	Optional<Skills> existing=skillsDao.findById(skill.getSkillId());
	if(existing.isPresent()) {
		return skillsDao.save(skill);
	}else {
		throw new RuntimeException("skill not found");
	}
	
		
		
	}
	

}


