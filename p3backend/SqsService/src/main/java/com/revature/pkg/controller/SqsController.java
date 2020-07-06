package com.revature.pkg.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.aws.messaging.core.QueueMessagingTemplate;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.revature.pkg.repository.AssociateRepository;
import com.revature.pkg.repository.BatchRepository;
import com.revature.pkg.repository.ClientRepository;
import com.revature.pkg.repository.ClientdemandRepository;
import com.revature.pkg.repository.ConsentRepository;
import com.revature.pkg.repository.CurriculumRepository;
import com.revature.pkg.repository.LocationRepository;
import com.revature.pkg.repository.SkillsRepository;
import com.revature.pkg.repository.SkillsetRepository;
import com.revature.pkg.repository.TrainerRepository;
import com.revature.pkg.repository.TrainerbatchRepository;


@Component
public class SqsController {
	
	private static final Logger LOG = LoggerFactory.getLogger(SqsController.class);
	
	@Autowired
	@SuppressWarnings("unused")
	private QueueMessagingTemplate queueMessagingTemplate;
	
	@Autowired
	  AssociateRepository associateData;
	@Autowired
	  BatchRepository batchData;
	@Autowired
	ClientRepository clientData;
	@Autowired
	  ClientdemandRepository clientdemandData;
	@Autowired
	  ConsentRepository consentData;
	@Autowired
	CurriculumRepository curriculumData;
	@Autowired
	  LocationRepository locationData;
	@Autowired
	  SkillsRepository skillsdata;
	@Autowired
	  SkillsetRepository SkillsetData;
	@Autowired
	  SkillsetRepository skillsetskillsData;
	@Autowired
	  TrainerRepository trainerData;
	@Autowired
	  TrainerbatchRepository trainerbatchdata;
	@Autowired
	  TrainerbatchRepository trainerskillsdata;
	

	@Value("${url}")
	private String sqsEndPoint;
	

	//Batch -- needs to wait
	public void handleBatch(JsonArray jsonArray, String request) {	
		LOG.info("this is batch & ("+ request +") "+jsonArray.toString());
		if(request.equals("add")) {
			LOG.info("add this to batch");
		}
}

	//Associate
	public void handleAssociate(JsonArray jsonArray, String request) {	
		LOG.info("working on Associate & ("+ request +")");
		if(request.equals("add")) {
			 int counting = 0;
			LOG.info("adding associates");
			for(JsonElement element : jsonArray) {
				JsonObject singleObject = element.getAsJsonObject();
				associateData.addAssociates(singleObject.get("firstName").getAsString(), singleObject.get("lastName").getAsString()
						, singleObject.get("email").getAsString(), singleObject.get("technicalScreeningScore").getAsFloat());
				counting++;
			}
			LOG.info("Done.."+counting+" Record handled");
		}


	}
	//skills
	public void handleSkill(JsonArray jsonArray, String request) {	
		LOG.info("working on skills & ("+ request +")");
		if(request.equals("add")) {
			 int counting = 0;
			LOG.info("adding skills");
		
			for(JsonElement element : jsonArray) {
				JsonObject singleObject = element.getAsJsonObject();
				skillsdata.addSkill(singleObject.get("skillId").getAsInt(), singleObject.get("skillName").getAsString());
				counting++;
			}
			LOG.info("Done.."+counting+" skill/s added");
		}
		
		if(request.equals("delete")) {
			
			 int counting = 0;
			LOG.info("adding skills");
		
			for(JsonElement element : jsonArray) {
				JsonObject singleObject = element.getAsJsonObject();
				skillsdata.deleteSkill(singleObject.get("skillId").getAsInt(), singleObject.get("skillName").getAsString());
				counting++;
			}
			LOG.info("Done.."+counting+" skill/s removed");
		}


}
	
	
	
	@JmsListener(destination = "sqs",containerFactory = "jmsListenerContainerFactory")
	public void receive(@Payload String message) {
		try {
			JsonObject jsonObject = new JsonParser().parse(message).getAsJsonObject();
			String type = jsonObject.get("objectType").getAsString();
			String request = jsonObject.get("requestType").getAsString();
			JsonArray value = jsonObject.get("values").getAsJsonArray();
			switch (type.toUpperCase()) {
			  case "BATCH":
				  	handleBatch(value,request);
			    break;
			  case "ASSOCIATE":
				    handleAssociate(value,request);
			    break;
			  case "SKILL":
				    handleSkill(value,request);
				break;
			  default:
			    LOG.info("No match!");
			}

		}catch(Exception e) {
			LOG.info("Error: "+e.getMessage());
		}
	}

	     
	



}
	
	
	
	
	
	
	

	
//	try {
//	JsonArray jsonObject = new JsonParser().parse(message).getAsJsonArray();
//		JsonObject jsonObj = new JsonObject(message);
//	if(jsonObject.isJsonArray()) {
//		for(JsonElement pa : jsonObject) {
//			JsonObject All = pa.getAsJsonObject();
//			if(All.get("objectType").getAsString() == "Batch") {
//				LOG.info("this is "+All.get("objectType"));
//			}
//			JsonObject trainers = pa.getAsJsonObject().get("trainers").getAsJsonArray().get(0).getAsJsonObject();
//			JsonObject associates = pa.getAsJsonObject().get("associates").getAsJsonArray().get(0).getAsJsonObject();
//			
//		     LOG.info("to database");
//		     push(All.get("location").toString());
//		     pushUsers(associates.get("firstName").getAsString(),
//		    		 associates.get("lastName").getAsString(),
//		    		 associates.get("email").getAsString());
//
//		}
//	     LOG.info("Received {}", jsonObject.toString());
//	}
//	if(jsonObject.has("ele2")) {
//	     LOG.info("Received {}", jsonObject.get("ele2").getAsJsonObject().get("age"));
//	     String value = jsonObject.get("ele2").getAsJsonObject().get("age").getAsString();
//	     dataa.feed(value);
//	}

//	}catch(Exception e) {
//		LOG.info(""+e.getMessage());
//	} 
	




//public void push(String pushed) {
//try {
//dataa.feed(pushed);
//LOG.info("submitted to test data");
//}catch(Exception e) {
//	LOG.info("Error: "+e.getMessage());
//}
//}
//
//public void pushUsers(String firstname,String lastname,String email) {
//try {
//users.users(firstname, lastname, email);
//LOG.info("submitted to users");
//}catch(Exception e) {
//	LOG.info("Error: "+e.getMessage());
//}
//}
