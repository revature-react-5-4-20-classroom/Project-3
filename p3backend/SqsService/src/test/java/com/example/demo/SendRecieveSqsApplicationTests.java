package com.example.demo;


import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.aws.messaging.config.SimpleMessageListenerContainerFactory;
import org.springframework.cloud.aws.messaging.listener.QueueMessageHandler;
import org.springframework.cloud.aws.messaging.listener.SimpleMessageListenerContainer;
import org.springframework.context.annotation.Bean;

import com.amazonaws.services.sqs.AmazonSQSAsync;

@SpringBootTest
class SendRecieveSqsApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Bean
    public SimpleMessageListenerContainer simpleMessageListenerContainer(AmazonSQSAsync amazonSQSAsync) {
        SimpleMessageListenerContainerFactory factory = new SimpleMessageListenerContainerFactory();
        factory.setAutoStartup(false);
        factory.setAmazonSqs(amazonSQSAsync);
        SimpleMessageListenerContainer simpleMessageListenerContainer = factory.createSimpleMessageListenerContainer();
        simpleMessageListenerContainer.setMessageHandler(messageHandler());
        return simpleMessageListenerContainer;
    }

@Bean(name = "messageHandler")
    public QueueMessageHandler messageHandler() {
        return mock(QueueMessageHandler.class);
    }

}
