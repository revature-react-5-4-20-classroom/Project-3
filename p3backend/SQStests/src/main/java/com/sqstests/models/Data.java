package com.sqstests.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "sqs", name = "dataa")
public class Data {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer Id;
  
  @Column(name="value")
  private String value;

  public Data(Integer id, String value) {
    super();
    Id = id;
    this.value = value;
  }

  public Data() {
    super();
    // TODO Auto-generated constructor stub
  }

  public Integer getId() {
    return Id;
  }

  public void setId(Integer id) {
    Id = id;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  @Override
  public String toString() {
    return "Data [Id=" + Id + ", value=" + value + "]";
  }
  
  
}
