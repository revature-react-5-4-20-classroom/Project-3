package com.project3.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
	

	
	
//	@JoinColumn(name="location_id")
//	@ManyToOne(fetch = FetchType.EAGER)
	
	
	
	
}
