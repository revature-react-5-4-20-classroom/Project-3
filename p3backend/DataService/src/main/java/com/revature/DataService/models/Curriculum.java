package com.revature.DataService.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(schema = "project3", name = "curriculum")
public class Curriculum {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "curriculum_id")
	private Integer curriculumId;

	@Column(name = "name")
	private String name;

	// Batch to curriculum
	@JsonIgnoreProperties({ "curriculum" })
	@OneToOne(mappedBy = "curriculum")
	private Batch batch;

	@OneToOne
	@JsonIgnoreProperties({ "curriculum" })
	@JoinColumn(name = "curriculum_skillset_id")
	private Skillset curriculumSkillset;

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

	public Skillset getCurriculumSkillset() {
		return curriculumSkillset;
	}

	public void setCurriculumSkillset(Skillset curriculumSkillset) {
		this.curriculumSkillset = curriculumSkillset;
	}

	public Batch getBatch() {
		return batch;
	}

	public void setBatch(Batch batch) {
		this.batch = batch;
	}

	@Override
	public String toString() {
		return "Curriculum [curriculumId=" + curriculumId + ", name=" + name + ", batch=" + batch
				+ ", curriculumSkillset=" + curriculumSkillset + "]";
	}

	public Curriculum(Integer curriculumId, String name, Batch batch, Skillset curriculumSkillset) {
		super();
		this.curriculumId = curriculumId;
		this.name = name;
		this.batch = batch;
		this.curriculumSkillset = curriculumSkillset;
	}

	public Curriculum() {
		super();
		// TODO Auto-generated constructor stub
	}



}
