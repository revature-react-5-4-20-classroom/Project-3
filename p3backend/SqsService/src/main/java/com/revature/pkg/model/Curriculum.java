package com.revature.pkg.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema="project3", name = "curriculum")
public class Curriculum {

	
	@Id
	  @Column(name = "curriculum_id")
	private Integer curriculumId;
	  @Column(name = "name")
	private String name;
	  @Column(name = "curriculum_skillset_id")
	private Integer curriculumSkillsetId;
	  
	  public Curriculum(Integer curriculumId, String name, Integer curriculumSkillsetId) {
		  super();
		  this.curriculumId = curriculumId;
		  this.name = name;
		  this.curriculumSkillsetId = curriculumSkillsetId;
	  }
	  
	  public Curriculum() {
		  super();
	  }
	  
	  
	public Integer getCurriculumId() {
		return curriculumId;
	}
	public void setCurriculumId(Integer curriculumId) {
		this.curriculumId = curriculumId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getCurriculumSkillsetId() {
		return curriculumSkillsetId;
	}
	public void setCurriculumSkillsetId(Integer curriculumSkillsetId) {
		this.curriculumSkillsetId = curriculumSkillsetId;
	}
	
	
	@Override
	public String toString() {
		return "Curriculum [curriculumId=" + curriculumId + ", name=" + name + ", curriculumSkillsetId="
				+ curriculumSkillsetId + "]";
	}
	  
	  
	
	
	  
	  
	

	
}
