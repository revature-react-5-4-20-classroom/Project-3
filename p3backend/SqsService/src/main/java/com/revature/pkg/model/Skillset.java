package com.revature.pkg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema="proj3", name = "skillset")
public class Skillset {

	
	@Id
	  @Column(name = "skillset_id")
	private Integer skillSetId;
	  @Column(name = "name")
	private String name;
	  
	  public Skillset(Integer skillSetId, String name ) {
		  super();
		  this.skillSetId = skillSetId;
		  this.name = name;
		  
	  }
	  
	  public Skillset() {
		  super();
	  }
	  
	public Integer getSkillSetId() {
		return skillSetId;
	}
	public void setSkillSetId(Integer skillSetId) {
		this.skillSetId = skillSetId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	@Override
	public String toString() {
		return "Skillset [skillSetId=" + skillSetId + ", name=" + name + "]";
	}
	  
	  

	
	  
	  
	  

	
}
