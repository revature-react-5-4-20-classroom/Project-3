package com.revature.pkg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema="project3", name = "skillsetskills")
public class Skillsetskills {

	
	@Id
	  @Column(name = "skillset_id")
	private Integer skillSetId;
	  @Column(name = "skill_id")
	private Integer skillId;
	  
	  public Skillsetskills (Integer skillSetId, Integer skillId) {
		  super();
		  this.skillSetId = skillSetId;
		  this.skillId = skillId;
		  
	  }
	  
	  public Skillsetskills() {
		  super();
	  }
	  
	  
	  
	public Integer getSkillSetId() {
		return skillSetId;
	}
	public void setSkillSetId(Integer skillSetId) {
		this.skillSetId = skillSetId;
	}
	public Integer getSkillId() {
		return skillId;
	}
	public void setSkillId(Integer skillId) {
		this.skillId = skillId;
	}
	
	
	@Override
	public String toString() {
		return "Skillsetskills [skillSetId=" + skillSetId + ", skillId=" + skillId + "]";
	}
	  
	
	
	
	  
	  
	  
	
	  
	  

	
	  
	  
	  

	
}
