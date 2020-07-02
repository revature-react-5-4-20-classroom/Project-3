package com.revature.DataService.aop;


import java.util.Arrays;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;



@Aspect
@Component
public class AopControllers {

	Logger logger=LoggerFactory.getLogger(AopControllers.class);
	

@Before(value="within(com.revature.DataService..*)")
public void logBefore(JoinPoint jp) {

//	logger.info(" Method "+jp.toShortString()+" called on "+jp.getTarget()+" args: "+Arrays.toString(jp.getArgs()));
	
	
	
}

@AfterReturning(value="within(com.revature.DataService..*)", returning="result")
public void after(JoinPoint jp, Object result) {
	
	
	logger.info(" method "+jp.toShortString());
//	if(result!=null) {
//		logger.info(" method "+jp.toShortString()+"returned "+result.toString());
//	}else {
//		logger.info(" method "+jp.toShortString()+" returned "+" it returns null");
//	}
	
}

@AfterThrowing(value="within(com.revature.DataService..*)", throwing="error")
public void afterThrow(JoinPoint jp,Throwable error) {
	
	logger.error(" method "+jp.toShortString()+" error "+error.getMessage());

	
	
}

@Before(value="within(com.revature.DataService..*)")
public void logBefore(JoinPoint jp) {
// Commented out because it was interfering with the Batch controller, if I don't remember to add back let me know --> John A.
//	logger.info(" Method "+jp.toShortString()+" called on "+jp.getTarget()+" args: "+Arrays.toString(jp.getArgs()));
	
	
	
}

@AfterReturning(value="within(com.revature.DataService..*)", returning="result")
public void after(JoinPoint jp, Object result) {
	
	
	logger.info(" method "+jp.toShortString());
//	if(result!=null) {
//		logger.info(" method "+jp.toShortString()+"returned "+result.toString());
//	}else {
//		logger.info(" method "+jp.toShortString()+" returned "+" it returns null");
//	}
	
}

@AfterThrowing(value="within(com.revature.DataService..*)", throwing="error")
public void afterThrow(JoinPoint jp,Throwable error) {
	
	logger.error(" method "+jp.toShortString()+" error "+error.getMessage());

	
	
}







	
	

}
