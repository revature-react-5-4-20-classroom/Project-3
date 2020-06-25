package com.revature.ReportsService.service;

import java.util.List;

import com.revature.ReportsService.models.ClientDemand;



public class MockClientDemand {
	private List<ClientDemand> clientDemand;

	public MockClientDemand() {
		super();
		// insert fake data here
	}

	public List<ClientDemand> getClientDemands() {
		return clientDemand;
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
