package com.project3.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "project3", name = "batch")
public class Batch {

	public Batch() {
		super();
		
	}
	
	@Id
	@Column(name="batch_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer batchId;
	
	
	@Column(name="curriculum")
	private String curriculum;
	
	@Column(name="start_date")
	private Date startDate;
	
	@Column(name="end_date")
	private Date endDate;

	public Integer getBatchId() {
		return batchId;
	}

	public void setBatchId(Integer batchId) {
		this.batchId = batchId;
	}

	public String getCurriculum() {
		return curriculum;
	}

	public void setCurriculum(String curriculum) {
		this.curriculum = curriculum;
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

	@Override
	public String toString() {
		return "Batch [batchId=" + batchId + ", curriculum=" + curriculum + ", startDate=" + startDate + ", endDate="
				+ endDate + "]";
	}

	public Batch(Integer batchId, String curriculum, Date startDate, Date endDate) {
		super();
		this.batchId = batchId;
		this.curriculum = curriculum;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	
	
}
