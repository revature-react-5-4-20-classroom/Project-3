package com.revature.DataService.models;

import java.sql.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.revature.DataService.models.Trainer;

@Entity
@Table(schema = "project3", name = "batch")
public class Batch {

  public Batch() {
    super();

  }

  public Batch(Integer batchId, Date startDate, Date endDate, Boolean isConfirmed,
      Integer interviewScoreLower, List<Trainer> trainers, Location location, Curriculum curriculum,
      List<Associate> associates, String programType) {
    super();
    this.batchId = batchId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isConfirmed = isConfirmed;
    this.interviewScoreLower = interviewScoreLower;
    this.trainers = trainers;
    this.location = location;
    this.curriculum = curriculum;
    this.associates = associates;
    this.programType = programType;
  }



  @Id
  @Column(name = "batch_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer batchId;

  @Column(name = "start_date")
  private Date startDate;

  @Column(name = "end_date")
  private Date endDate;

  @Column(name = "isconfirmed")
  private Boolean isConfirmed;

  @Column(name = "interview_score_lower")
  private Integer interviewScoreLower;

  @JsonIgnoreProperties({"batches", "consent", "trainerSkills"})
  @ManyToMany(cascade=CascadeType.MERGE)
  @JoinTable(name="trainerbatch", schema="project3",joinColumns=@JoinColumn(name="trainer_id"),inverseJoinColumns=@JoinColumn(name="batch_id"))
  private List<Trainer> trainers;


  // Batch to location
  @JsonIgnoreProperties({"batches"})
  @ManyToOne
  @JoinColumn(name = "location_id")
  private Location location;


  // Batch to curriculum
  @JsonIgnoreProperties({"batch", "curriculum", "trainers"})
  @ManyToOne
  @JoinColumn(name = "curriculum_id")
  private Curriculum curriculum;

  // Batch to associates
  @JsonIgnoreProperties({"batch"})
  @OneToMany(mappedBy = "batch", cascade = CascadeType.MERGE)
  private List<Associate> associates;
  
  @Column(name="program_type")
  private String programType;

  // WORKING
  // Batch to consent
  // Getting rid of this at Nick's request

//  @JsonIgnoreProperties({"batch", "trainerSkills"})
//  @OneToMany(mappedBy = "batch")
//  private List<Consent> consent;



  public Integer getBatchId() {
    return batchId;
  }


  public void setBatchId(Integer batchId) {
    this.batchId = batchId;
  }


  public Date getStartDate() {
    return startDate;
  }


  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }


  public Date getEndDate() {
    return endDate;
  }


  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }


  public Boolean getIsConfirmed() {
    return isConfirmed;
  }


  public void setIsConfirmed(Boolean isConfirmed) {
    this.isConfirmed = isConfirmed;
  }


  public Integer getInterviewScoreLower() {
    return interviewScoreLower;
  }


  public void setInterviewScoreLower(Integer interviewScoreLower) {
    this.interviewScoreLower = interviewScoreLower;
  }

  public List<Trainer> getTrainers() {
	return trainers;
}




public void setTrainers(List<Trainer> trainers) {
	this.trainers = trainers;
}




public Location getLocation() {
    return location;
  }


  public void setLocation(Location location) {
    this.location = location;
  }



  public Curriculum getCurriculum() {
    return curriculum;
  }


  public void setCurriculum(Curriculum curriculum) {
    this.curriculum = curriculum;
  }



  public List<Associate> getAssociates() {
    return associates;
  }


  public void setAssociates(List<Associate> associates) {
    this.associates = associates;
  }

  public String getProgramType() {
    return programType;
  }

  public void setProgramType(String programType) {
    this.programType = programType;
  }

  @Override
  public String toString() {
    return "Batch [batchId=" + batchId + ", startDate=" + startDate + ", endDate=" + endDate
        + ", isConfirmed=" + isConfirmed + ", interviewScoreLower=" + interviewScoreLower
        + ", trainers=" + trainers + ", location=" + location + ", curriculum=" + curriculum
        + ", associates=" + associates + ", programType=" + programType + "]";
  }




  

//public List<Consent> getConsent() {
//	return consent;
//}
//
//
//
//
//public void setConsent(List<Consent> consent) {
//	this.consent = consent;
//}


  


}
