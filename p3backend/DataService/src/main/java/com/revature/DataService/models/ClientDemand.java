package com.revature.DataService.models;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema="project3")
public class ClientDemand
{
    public ClientDemand() {super();}

    public ClientDemand(Integer clientDemandId, Integer quantity, LocalDate deadline, Integer clientId)
    {
      super();
      this.clientDemandId = clientDemandId;
      this.quantity = quantity;
      this.deadline = deadline;
    }

    @Id
    @Column(name="client_demand_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    public Integer clientDemandId;
    
    @Column(name="quantity")
    public Integer quantity;
    
    @Column(name="deadline")
    public LocalDate deadline;

    @Column(name="skillset_id")
    public Integer skillsetId;
    
    @JsonIgnoreProperties({"clientDemand"})
    @ManyToOne
    @JoinColumn(name="client_id")
    private Client client;
    
    public Integer getClientDemandId()
    {
      return clientDemandId;
    }

    public void setClientDemandId(Integer clientDemandId)
    {
      this.clientDemandId = clientDemandId;
    }

    public Integer getQuantity()
    {
      return quantity;
    }

    public void setQuantity(Integer quantity)
    {
      this.quantity = quantity;
    }

    public LocalDate getDeadline()
    {
      return deadline;
    }

    public void setDeadline(LocalDate deadline)
    {
      this.deadline = deadline;
    }

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}


    
}
