package com.revature.pkg;

import javax.jms.Session;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.support.destination.DynamicDestinationResolver;
//import org.springframework.util.ErrorHandler;
import org.springframework.util.ErrorHandler;

import com.amazon.sqs.javamessaging.ProviderConfiguration;
import com.amazon.sqs.javamessaging.SQSConnectionFactory;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.sqs.AmazonSQS;
import com.amazonaws.services.sqs.AmazonSQSClientBuilder;




@EnableJms
@Configuration
public class JmsConfig {
        @Bean
	public ErrorHandler errorHandler() {
		return null;
	}

	public SQSConnectionFactory sqsConnectionFactory() {
		AmazonSQS sqs = AmazonSQSClientBuilder.standard().withRegion(Regions.US_EAST_1).build();
		SQSConnectionFactory connectionFactory = new SQSConnectionFactory(
		        new ProviderConfiguration(),
		        sqs
		        );
		return connectionFactory;
	}

        @Bean
        public DefaultJmsListenerContainerFactory jmsListenerContainerFactory() {
             DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
             factory.setConnectionFactory(sqsConnectionFactory());
             factory.setDestinationResolver(new DynamicDestinationResolver());
             factory.setConcurrency("3-10");
             factory.setSessionAcknowledgeMode(Session.CLIENT_ACKNOWLEDGE);
             factory.setErrorHandler(errorHandler());
             return factory;
         }
    


		@Bean
         public JmsTemplate defaultJmsTemplate() {
    	     return new JmsTemplate(sqsConnectionFactory());
         }
}
