package com.revature.DataService.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceUtil;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.revature.DataService.models.Batch;
import com.revature.DataService.models.Consent;
import com.revature.DataService.models.Trainer;
import com.revature.DataService.repositories.ConsentRepository;



@Service
@Transactional
public class ConsentService {


  @Autowired
  ConsentRepository consentRepository;
  @Autowired
  TrainerService trainerService;
  @Autowired
  BatchService batchService;

  public List<Consent> getAll() {
    return consentRepository.findAll();
  }



  public List<Consent> getConsentByTrainerId(Integer trainerId) throws Exception {
    List<Consent> consents = new ArrayList<Consent>();
    consents = consentRepository.getConsentsByTrainerId(trainerId);
    return consents;
    
//    EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
// 
//    
//    EntityManager entitymanager = emfactory.createEntityManager( );
//    entitymanager.getTransaction( ).begin( );
//    
//    
//    Query queryResult = entitymanager.createNativeQuery("SELECT * FROM  project3.consent WHERE (consent_approved is null and trainer_id = ?)").setParameter(1, trainerId);
//   
//    List<Object[]> qr =  queryResult.getResultList();
//    
//    for(Object[] row : qr) {
//      Consent newConsent = new Consent();
//      
//      int consentId = Integer.parseInt(row[0].toString());
//      int trainerId2 = Integer.parseInt(row[1].toString());
//      int batchId = Integer.parseInt(row[2].toString());
//      Boolean isApproved = null;
//      if(row[3] == null) {
//        isApproved = null;
//      }else {
//        isApproved = Boolean.parseBoolean(row[3].toString());
//      }
//      
//      
//      Trainer trainer = trainerService.getById(trainerId2);
//      Batch batch = batchService.getById(batchId);
//      
//      newConsent.setBatch(batch);
//      newConsent.setConsentId(consentId);
//      newConsent.setIsApprovedColumn(isApproved);
//      newConsent.setTrainer(trainer);
//      
//      consents.add(newConsent);
    }
//    entitymanager.getTransaction( ).commit( );
//
//    entitymanager.close();
//    emfactory.close( );
////    consent.setConsentId(0);
////    return consentRepository.save(consent);
//    
//    return consents;
    
    //return consentRepository.getConsentByTrainerId(trainerId);
  


  
  public void create(Consent consent) {

    
    consentRepository.createConsent(consent.getTrainer().getTrainerId(), consent.getBatch().getBatchId());
    
//    EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
// 
//    
//    EntityManager entitymanager = emfactory.createEntityManager( );
//    entitymanager.getTransaction( ).begin( );
//    System.out.println(consent.getIsApprovedColumn());
//    
//    entitymanager.createNativeQuery("INSERT INTO project3.consent(consent_id, trainer_id, batch_id, consent_approved) VALUES (default, ?, ?, null)").setParameter(1, consent.getTrainer().getTrainerId()).setParameter(2, consent.getBatch().getBatchId()).executeUpdate();
//    
//    entitymanager.getTransaction( ).commit( );
//
//    entitymanager.close( );
//    emfactory.close( );
//    consent.setConsentId(0);
//    return consentRepository.save(consent);

  }


  public void update(Consent consent) {


    // We want to make sure the cat we're given exists before we save it to the DB
    Optional<Consent> existingConsents = consentRepository.findById(consent.getConsentId());
    System.out.println(existingConsents);
    System.out.println(consent.getConsentId());
    // if (existingConsents.isPresent()) {

    EntityManagerFactory emfactory = Persistence.createEntityManagerFactory("Eclipselink_JPA");


    EntityManager entitymanager = emfactory.createEntityManager();
    entitymanager.getTransaction().begin();

    entitymanager
        .createNativeQuery("UPDATE project3.consent SET consent_approved=? WHERE consent_id=?")
        .setParameter(1, consent.getIsApprovedColumn()).setParameter(2, consent.getConsentId())
        .executeUpdate();

    entitymanager.getTransaction().commit();

    entitymanager.close();
    emfactory.close();
    // return consentRepository.save(consent);
    // } else {
    // throw new RuntimeException();
    // }

  }
}
