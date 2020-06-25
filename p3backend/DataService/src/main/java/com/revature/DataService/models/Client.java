package com.revature.DataService.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema="project3", name="client")
public class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="client_id")
	private Integer clientId;
	
	@Column(name="name")
	private String name;
	
	// Multiplicity
	// Note: should skillset/client be one to many?
	@OneToOne // Skillset should have mappedBy="client"
	@JsonIgnoreProperties({"client"})
	@Column(name="client_skillset_id")
	private Skillset clientSkillset;
	
	@OneToMany(mappedBy="client", cascade=CascadeType.MERGE)
	@JsonIgnoreProperties({"client"})
	private ClientDemand clientDemand;

	public Integer getClientId() {
		return clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Skillset getClientSkillset() {
		return clientSkillset;
	}

	public void setClientSkillset(Skillset clientSkillset) {
		this.clientSkillset = clientSkillset;
	}

	public ClientDemand getClientDemand() {
		return clientDemand;
	}

	public void setClientDemand(ClientDemand clientDemand) {
		this.clientDemand = clientDemand;
	}
	
	

}
