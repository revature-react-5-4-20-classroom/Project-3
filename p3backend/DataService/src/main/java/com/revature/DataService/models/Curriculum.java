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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
	@JsonIgnoreProperties({ "curriculum", "trainers", "location", "associates", "consent" })
	@OneToMany(mappedBy = "curriculum")
	private List<Batch> batch;

	// Working
	@ManyToOne
	@JsonIgnoreProperties({ "curriculum","curricula" })
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

	public List<Batch> getBatch() {
		return batch;
	}

	public void setBatch(List<Batch> batch) {
		this.batch = batch;
	}

	@Override
	public String toString() {
		return "Curriculum [curriculumId=" + curriculumId + ", name=" + name + ", batch=" + batch
				+ ", curriculumSkillset=" + curriculumSkillset + "]";
	}

	public Curriculum(Integer curriculumId, String name, List<Batch> batch, Skillset curriculumSkillset) {
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
