package com.sqstests.services;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sqstests.models.Data;

@Component
public class MyListener implements MessageListener {
  @Autowired
  DataService ds;

  @Override
  public void onMessage(Message message) {
   try {
      // Cast the received message as TextMessage and print the text to screen.
      System.out.println("Received: " + ((TextMessage) message).getText());
      fromMessage(message);
      //Sends message received ack to SQS. SQS will then delete the message.
      message.acknowledge();
    } catch (JMSException | JsonProcessingException e) {
        e.printStackTrace();
    }
    
  }
  public void fromMessage(Message message) throws JMSException, JsonMappingException, JsonProcessingException {
    //Jackson objectMapper for parsing Json
    ObjectMapper mapper = new ObjectMapper();
    //Read the Json, and attempt to apply it to Data class object
    //FIELDS MUST MATCH IN JSON AND JAVA FOR VARIABLES.
    Data data = mapper.readValue(((TextMessage)message).getText(), Data.class);
    //toString testing
    System.out.println(data.toString());
    //send to ds service to create item in db with object
    ds.create(data);
  }
}
