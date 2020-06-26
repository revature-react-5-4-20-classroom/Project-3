package com.revature.DataService.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema = "project3", name = "skills")
public class Skills {

	@Id
	@Column(name = "skill_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer skillId;

	@Column(name = "skill_name")
	private String skillName;

	@JsonIgnoreProperties({ "skills", "trainers", "curriculum", "clientDemand" })
	@ManyToMany(mappedBy = "skills", cascade = CascadeType.ALL)
	private List<Skillset> skillSets;

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

	public List<Skillset> getSkillSets() {
		return skillSets;
	}

	public void setSkillSets(List<Skillset> skillSets) {
		this.skillSets = skillSets;
	}

	@Override
	public String toString() {
		return "Skills [skillId=" + skillId + ", skillName=" + skillName + ", skillSets=" + skillSets + "]";
	}

	public Skills(Integer skillId, String skillName, List<Skillset> skillSets) {
		super();
		this.skillId = skillId;
		this.skillName = skillName;
		this.skillSets = skillSets;
	}

}
