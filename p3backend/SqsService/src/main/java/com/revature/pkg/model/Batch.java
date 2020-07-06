package com.revature.pkg.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table(schema="proj3", name = "batch")
public class Batch {

	
	@Id
	  @Column(name = "batch_id")
	private Integer batchId;
	  @Column(name = "start_date")
	private Date startDate;
	  @Column(name = "end_date")
	private Date endDate;
	  @Column(name = "isconfirmed")
	private boolean isConfirmed;
	@Column(name = "interview_score_lower")
	private Integer interviewScoreLower;
	
	@Column(name = "program_type")
	private String programType;
	@Column(name = "location_id")
	private Integer locationId;
	@Column(name = "curriculum_id")
	private Integer curriculumId;
	
	public Batch() {
		super();
	}
	
	public Batch(Integer batchId, Date startDate, Date endDate, Boolean isConfirmed,
		      Integer interviewScoreLower, String programType, Integer locationId, Integer curriculumId) {
		    super();
		    this.batchId = batchId;
		    this.startDate = startDate;
		    this.endDate = endDate;
		    this.isConfirmed = isConfirmed;
		    this.interviewScoreLower = interviewScoreLower;
		    this.programType = programType;
		    this.locationId = locationId;
		    this.curriculumId = curriculumId;
		    this.programType = programType;
		  }
	
	
	public Integer getBatchId() {
		return batchId;
	}
	public void setBatchId(Integer batchId) {
		this.batchId = batchId;
	}
	public Date getStartdate() {
		return startDate;
	}
	public void setStartdate(Date startdate) {
		this.startDate = startdate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public boolean isConfirmed() {
		return isConfirmed;
	}
	public void setConfirmed(boolean isConfirmed) {
		this.isConfirmed = isConfirmed;
	}
	public Integer getInterviewScoreLower() {
		return interviewScoreLower;
	}
	public void setInterviewScoreLower(Integer interviewScoreLower) {
		this.interviewScoreLower = interviewScoreLower;
	}
	public String getProgramType() {
		return programType;
	}
	public void setProgramType(String programType) {
		this.programType = programType;
	}
	public Integer getLocationId() {
		return locationId;
	}
	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}
	public Integer getCurriculumId() {
		return curriculumId;
	}
	public void setCurriculumId(Integer curriculumId) {
		this.curriculumId = curriculumId;
	}
	
	
	
	@Override
	public String toString() {
		return "Batch [batchId=" + batchId + ", startdate=" + startDate + ", endDate=" + endDate + ", isConfirmed="
				+ isConfirmed + ", interviewScoreLower=" + interviewScoreLower + ", programType=" + programType
				+ ", locationId=" + locationId + ", curriculumId=" + curriculumId + "]";
	}
	
	
	
}
