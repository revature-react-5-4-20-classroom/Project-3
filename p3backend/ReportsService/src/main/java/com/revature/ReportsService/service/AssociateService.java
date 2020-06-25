package com.revature.ReportsService.service;

import java.util.List;

import com.revature.ReportsService.models.Associate;

public class AssociateService {

//	@Autowired
//	AssociateRepository associateRepository;

	public List<Associate> getAll() {
//		return associateRepository.getAll();
		return new MockAssociate().getAll();
	}

	public Associate getById(Integer id) {
		return new MockAssociate().getById(id);
	}

}
