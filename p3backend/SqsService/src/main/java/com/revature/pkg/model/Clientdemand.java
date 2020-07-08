package com.revature.pkg.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema="project3", name = "clientdemand")
public class Clientdemand {
	
	@Id
	  @Column(name = "client_demand_id")
	private Integer clientDemandId;
	  @Column(name = "quantity")
	private Integer quantity;
	  @Column(name = "deadline")
	private Date deadline;
	  @Column(name = "client_id")
	private Integer clientId;
	@Column(name = "clientdemand_skillset_id")
	private Integer clientdemandSkillsetId;
	
	
	public Clientdemand() {
		super();
	}
	
	public Clientdemand(Integer clientDemandId, Integer quantity, Date deadline,
			Integer clientId, Integer clientdemandSkillsetId) {
		super();
		this.clientDemandId = clientDemandId;
		this.quantity = quantity;
		this.deadline = deadline;
		this.clientId = clientId;
		this.clientdemandSkillsetId = clientdemandSkillsetId;
	}
	
	
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
	public Date getDeadline() {
		return deadline;
	}
	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}
	public Integer getClientId() {
		return clientId;
	}
	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}
	public Integer getClientdemandSkillsetId() {
		return clientdemandSkillsetId;
	}
	public void setClientdemandSkillsetId(Integer clientdemandSkillsetId) {
		this.clientdemandSkillsetId = clientdemandSkillsetId;
	}
	@Override
	public String toString() {
		return "Clientdemand [clientDemandId=" + clientDemandId + ", quantity=" + quantity + ", deadline=" + deadline
				+ ", clientId=" + clientId + ", clientdemandSkillsetId=" + clientdemandSkillsetId + "]";
	}
	
	


}
