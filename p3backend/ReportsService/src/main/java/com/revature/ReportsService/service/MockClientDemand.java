package com.revature.ReportsService.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.revature.ReportsService.models.ClientDemand;



public class MockClientDemand {
	private List<ClientDemand> clientDemand;

	public MockClientDemand() {
		super();
		// insert fake data here
	}

	public List<ClientDemand> getClientDemands() {
		this.clientDemand = new ArrayList<ClientDemand>();
		this.clientDemand.add(new ClientDemand(1,10,LocalDate.parse("2018-12-27"),1,1));
		this.clientDemand.add(new ClientDemand(2,10,LocalDate.parse("2018-12-27"),1,1));
		this.clientDemand.add(new ClientDemand(3,10,LocalDate.parse("2018-12-27"),1,1));
		return this.clientDemand;
	}

	public ClientDemand getClientDemandById(Integer id) {
		ClientDemand out = null;
		for (ClientDemand i : this.clientDemand) {
			if (i.getClientDemandId().equals(id)) {
				out = i;
				break;
			}
		}
		if (out == null) {
			throw new RuntimeException("batches with id " + id + " not found");
		}
		return out;
	}
}
