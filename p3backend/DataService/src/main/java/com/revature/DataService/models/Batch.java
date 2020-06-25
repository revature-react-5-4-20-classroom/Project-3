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
      Integer interviewScoreLower, Trainer trainer, Location location, Curriculum curriculum,
      List<Associate> associates) {
    super();
    this.batchId = batchId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isConfirmed = isConfirmed;
    this.interviewScoreLower = interviewScoreLower;
    this.trainer = trainer;
    this.location = location;
    this.curriculum = curriculum;
    this.associates = associates;
  }



  @Id
	@Column(name="batch_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer batchId;
	
	@Column(name="start_date")
	private Date startDate;
	
	@Column(name="end_date")
	private Date endDate;
	
	@Column(name="isconfirmed")
	private Boolean isConfirmed;
	
	@Column(name="interview_score_lower")
	private Integer interviewScoreLower;
	
	@JoinColumn(name="trainer_id")
	@OneToOne(fetch = FetchType.EAGER)
	// May need a JsonIgnoreProperties later on
	private Trainer trainer;
	
	@JoinColumn(name="location_id")
	@ManyToOne(fetch = FetchType.EAGER)
	private Location location;
	
	@JoinColumn(name="curriculum_id")
	@OneToOne(fetch = FetchType.EAGER)
	private Curriculum curriculum;
	
	@OneToMany(mappedBy = "batch", cascade = CascadeType.MERGE)
	@JsonIgnoreProperties({"batch"})
	private List<Associate> associates;


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

  public Trainer getTrainer() {
    return trainer;
  }

  public void setTrainer(Trainer trainer) {
    this.trainer = trainer;
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



  @Override
  public String toString() {
    return "Batch [batchId=" + batchId + ", startDate=" + startDate + ", endDate=" + endDate
        + ", isConfirmed=" + isConfirmed + ", interviewScoreLower=" + interviewScoreLower
        + ", trainer=" + trainer + ", location=" + location + ", curriculum=" + curriculum
        + ", associates=" + associates + "]";
  }



	
	
}
