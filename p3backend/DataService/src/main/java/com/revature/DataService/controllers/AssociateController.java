package com.revature.DataService.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.revature.DataService.services.AssociateService;


@RestController
public class AssociateController {
	@Autowired
	AssociateService associateService;
}
