package com.revature.DataService.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(schema = "project3",name = "skillset_skills")
public class SkillsetSkills {

	@Id
	@Column(name="skillset_id")
	private Integer skillSetId;
	
	@Column(name="skill_id")
	private Integer skillId;
	
	@ManyToMany
	@JoinColumn(name="skill_id", referencedColumnName="skill_id")
	private List<Skills> skills;
	
	public SkillsetSkills() {
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

	public List<Skills> getSkills() {
		return skills;
	}

	public void setSkills(List<Skills> skills) {
		this.skills = skills;
	}

	public SkillsetSkills(Integer skillSetId, Integer skillId, List<Skills> skills) {
		super();
		this.skillSetId = skillSetId;
		this.skillId = skillId;
		this.skills = skills;
	}
	
	
}
