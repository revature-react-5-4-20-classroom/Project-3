package com.revature.DataService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(schema="project3", name="skills" )
public class Skills {
	
	@Id
	@Column(name="skill_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer skillId;
	
	
	@Column(name="skill_name")
	private String skillName;


	public Integer getSkillId() {
		return skillId;
	}


	public void setSkillId(Integer skillId) {
		this.skillId = skillId;
	}


	public String getSkillName() {
		return skillName;
	}


	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}
	
	public Skills() {
		
	}


	public Skills(Integer skillId, String skillName) {
		super();
		this.skillId = skillId;
		this.skillName = skillName;
	}


	@Override
	public String toString() {
		return "Skills [skillId=" + skillId + ", skillName=" + skillName + "]";
	}
	
	
	
	
	
	

}
