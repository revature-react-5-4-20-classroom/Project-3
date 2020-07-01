package com.sqstests.services;

import javax.annotation.PostConstruct;
import javax.jms.JMSException;
import javax.jms.MessageConsumer;
import javax.jms.Queue;
import javax.jms.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import com.amazon.sqs.javamessaging.AmazonSQSMessagingClientWrapper;
import com.amazon.sqs.javamessaging.ProviderConfiguration;
import com.amazon.sqs.javamessaging.SQSConnection;
import com.amazon.sqs.javamessaging.SQSConnectionFactory;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.sqs.AmazonSQSClientBuilder;

@Component
public class jmsService {
  private SQSConnectionFactory connectionFactory;
  private SQSConnection connection;
  private Session session;
  private Queue queue;
  private AmazonSQSMessagingClientWrapper client;
  private MessageConsumer consumer;
  
  @Autowired
  MyListener listener;
  
  @Value("${aws.accessKey}")
  private String awsAccessKey;

  @Value("${aws.secretKey}")
  private String awsSecretKey;

  @Value("${aws.region}")
  private String awsRegion;
  
  private static final Logger logger = LoggerFactory.getLogger(jmsService.class);
  
  @PostConstruct
  public void jmsService() throws InterruptedException {
    //Takes the credentials given above to create a credentials object.
    AWSCredentialsProvider awsCredentialsProvider = new AWSStaticCredentialsProvider(
        new BasicAWSCredentials(awsAccessKey, awsSecretKey)
        );
    //Use the previous credential object, the region variable, and creates a connection with standard settings.
    this.connectionFactory = new SQSConnectionFactory(new ProviderConfiguration(),AmazonSQSClientBuilder.standard().withRegion(awsRegion).withCredentials(awsCredentialsProvider));
    try {
      //Create a connection
      this.connection = connectionFactory.createConnection();
      //Create a session with acknowledgement set to client (default is auto). This means that message.acknowledge() has to be called whenever a message is received
      //to let SQS know not to send it again and to delete it
      this.session = connection.createSession(false, Session.CLIENT_ACKNOWLEDGE);
    } catch (JMSException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    //This just makes it work. Don't ask me why.
    this.client = connection.getWrappedAmazonSQSClient();
  }
  //Create a JMS Queue object with a given String. If it doesn't exist in SQS, it will throw an error. 
  public Queue createQueue(String queue) throws JMSException {
    this.queue = this.session.createQueue(queue);
    return this.queue;
  }
  //Create a consumer object for a JMS queue. Also sets a message listener for asynchronous message receiving. 
  public void createConsumer(Queue queue) throws JMSException {
    this.consumer = this.session.createConsumer(this.queue);
    this.consumer.setMessageListener(listener);
  }
  
  public void connectionStart() throws JMSException {
    this.connection.start();
  }
  public void connectionClose() throws JMSException {
    this.connection.close();
  }

  public SQSConnection getConnection() {
    return connection;
  }

  public Session getSession() {
    return session;
  }
  
  
}
