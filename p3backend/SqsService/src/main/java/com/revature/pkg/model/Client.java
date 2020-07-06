package com.revature.pkg.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema="proj3", name = "client")
public class Client {
	
	@Id
	  @Column(name = "client_id")
	private Integer clientId;
	  @Column(name = "name")
	private String name;
	  
	  
	  public Client() {
			super();
		}
	  
	  public Client(Integer clientId, String name ) {
		  super();
		  this.clientId = clientId;
		  this.name = name;
		  
	  }
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
	@Override
	public String toString() {
		return "Client [clientId=" + clientId + ", name=" + name + "]";
	}

	  
	

}
