package com.revature.DataService.models;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema="project3", name = "clientdemand")
public class ClientDemand
{

    @Id
    @Column(name="client_demand_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer clientDemandId;
    
    @Column(name="quantity")
    private Integer quantity;
    
    @Column(name="deadline")
    private LocalDate deadline;

    // Batch to curriculum
    @JsonIgnoreProperties({"clientDemand", "trainers", "curriculum"})
    @ManyToOne
    @JoinColumn(name = "clientdemand_skillset_id")
    private Skillset clientDemandSkillset;
    

    @JsonIgnoreProperties({"clientDemand"})
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="client_id")
    private Client client;

	public Integer getClientDemandId() {
		return clientDemandId;
	}

	public void setClientDemandId(Integer clientDemandId) {
		this.clientDemandId = clientDemandId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public LocalDate getDeadline() {
		return deadline;
	}

	public void setDeadline(LocalDate deadline) {
		this.deadline = deadline;
	}

	public Skillset getClientDemandSkillset() {
		return clientDemandSkillset;
	}

	public void setClientDemandSkillset(Skillset clientDemandSkillset) {
		this.clientDemandSkillset = clientDemandSkillset;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}


	@Override
	public String toString() {
		return "ClientDemand [clientDemandId=" + clientDemandId + ", quantity=" + quantity + ", deadline=" + deadline
				+ ", clientDemandSkillset=" + clientDemandSkillset + ", client=" + client + "]";
	}

	public ClientDemand(Integer clientDemandId, Integer quantity, LocalDate deadline, Skillset clientDemandSkillset,
			Client client) {
		super();
		this.clientDemandId = clientDemandId;
		this.quantity = quantity;
		this.deadline = deadline;
		this.clientDemandSkillset = clientDemandSkillset;
		this.client = client;
	}

	public ClientDemand() {
		super();
		// TODO Auto-generated constructor stub
	}

    
    
    
}
