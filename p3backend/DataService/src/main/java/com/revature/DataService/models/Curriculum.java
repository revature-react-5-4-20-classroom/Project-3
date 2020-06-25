package com.revature.DataService.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// Current model for Curriculum - may change, depending on how it works w/ skillset
@Entity
@Table(schema="project3", name="curriculum")
public class Curriculum {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "curriculum_id")
	private Integer curriculumId;
	
	@Column(name = "name")
	private String name;
	
	@OneToOne
	@JsonIgnoreProperties({"curriculum"})
	@JoinColumn(name="curriculum_id")
	private Skillset skillset;

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

	public Skillset getSkillset() {
		return skillset;
	}

	public void setSkillset(Skillset skillset) {
		this.skillset = skillset;
	}
	
}
