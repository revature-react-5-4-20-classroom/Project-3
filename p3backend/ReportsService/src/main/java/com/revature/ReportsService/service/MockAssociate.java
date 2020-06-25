package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;

import com.revature.ReportsService.models.Associate;

public class MockAssociate {

	private List<Associate> mockAssociatesData;
	private Integer nextId;

	public MockAssociate() {
		super();
		this.mockAssociatesData = new ArrayList<Associate>();
		this.mockAssociatesData.add(new Associate(1, "aaa", "bbb", "aaa@gmail.com", true, 100, 1));
		this.mockAssociatesData.add(new Associate(2, "fname", "lname", "aaa1@gmail.com", true, 90, 2));
		this.mockAssociatesData.add(new Associate(3, "f1", "l2", "aaa2@gmail.com", true, 95, 1));
		this.mockAssociatesData.add(new Associate(4, "f", "l", "aaa3@gmail.com", true, 80, 2));
		this.mockAssociatesData.add(new Associate(5, "f2", "l3", "aaa4@gmail.com", true, 88, 1));
		this.mockAssociatesData.add(new Associate(6, "a", "b", "ab@gmail.com", true, 86, 1));
		this.nextId = 7;
	}

	public List<Associate> getAll() {
		return this.mockAssociatesData;
	}

	public Associate getById(Integer id) {
		Associate out = null;
		for (Associate c : this.mockAssociatesData) {
			if (c.getId().equals(id)) {
				out = c;
				break;
			}
		}
		if (out == null) {
			// throw new AssociateNotFound
		}
		return out;
	}

//	public Associate create(Associate associate) {
//		associate.setId(this.nextId);
//		this.nextId++;
//		this.mockAssociates.add(associate);
//		return associate;
//	}
//
//	public Associate update(Associate associate) {
//		Associate newAssoci = this.getById(associate.getId());
//		newAssoci.setFirstName(associate.getFirstName());
//		newAssoci.setLastName(associate.getLastName());
//		newAssoci.setInterviewScore(associate.getInterviewScore());
//		newAssoci.setBatchId(associate.getBatchId());
//		return newAssoci;
//	}
//
//	public Associate updateBatch(Associate associate) {
//		Associate newAssoci = this.getById(associate.getId());
//		newAssoci.setBatchId(associate.getBatchId());
//		return newAssoci;
//	}
//
//	public Associate createOrUpdate(Associate associate) {
//		Associate newAssoci = this.getById(associate.getId());
//		if(newAssoci==null) {
//			 this.mockAssociates.add(associate);
//		}
//		else {
//			this.update(associate);	
//		}
//		return associate;
//		
//	}
//
//	public void delete(Integer id) {
//		mockAssociates.remove(this.getById(id));
//		throw new NotYetImplementedException();

//	}

}
