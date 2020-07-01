package com.sqstests;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.sqstests.models.Data;
import com.sqstests.services.jmsService;

@SpringBootApplication
public class SqStestsApplication implements CommandLineRunner {
  @Autowired
  private jmsService jms;

  public static void main(String[] args) {
    
   SpringApplication.run(SqStestsApplication.class, args);
  }
  
  @Override
  public void run(String... args) throws Exception {
   //Create a JMS queue (this is misleading, as the queue already exists. This just creates a JMS Queue object that links to the SQS queue).
   this.jms.createConsumer(jms.createQueue("queueTest"));
   //Open the connection
   this.jms.connectionStart();
   //Sleep for 30 seconds. Doesn't block the listener functionality.
   Thread.sleep(30000);
   //Close connection
   this.jms.connectionClose();
   //Terminate program.
   System.exit(0);
   //sqsUtil.sendQueueMessage("hello world");
   /*
    for(Message m :sqsUtil.messageRetrieval(queue)) {
      System.out.println(m.getBody());
    }
    */
  }
}
