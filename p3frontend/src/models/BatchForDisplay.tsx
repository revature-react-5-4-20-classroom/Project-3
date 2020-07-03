import { Trainer } from "./Trainer";
import { Curriculum } from "./Curriculum";
import { Associate, associatesGetActiveTotal } from "./Associate";
import { Consent } from "./Consent";
import { Location, locationGetName } from "./Location";
import { convertDateToUTC } from "../GeneralPurposeHelpers/convertDateToUTC";
import { dateDifferenceWeeks } from "../GeneralPurposeHelpers/dateDifferenceWeeks";
import React from "react";
import { Batch } from "./Batch";
import ViewBatchModal from "../Story1/ViewBatchModal";
import { Col, Container, Row, Table } from "reactstrap";

/*
  This batch has additional information for display on the front end
*/
export class BatchForDisplay {
  batch: Batch;
  dateStartText: string;
  dateEndText: string;
  dateSortStart: number;
  dateSortEnd: number;
  weekSortCurrent: number;
  weekSortRemaining: number;
  jsxWeekCurrent: JSX.Element;
  jsxWeekRemaining: JSX.Element;
  skillset: any;
  associatesActive: number;
  associatesInactive: number;
  trainers: Trainer[];
  location: any;

  /*
    returns a BatchForDisplay which is derived from a server side batch
  */
  constructor(batch: Batch) {
    let dateStart = convertDateToUTC(batch.startDate); //convert strings to Date objects
    let dateEnd = convertDateToUTC(batch.endDate);

    let weekC = dateDifferenceWeeks(dateStart, convertDateToUTC()); //calc current week we are on
    let weekR = dateDifferenceWeeks(convertDateToUTC(), dateEnd); //calc weeks remaining

    let jsxWeekC = <>{weekC}</>; //we want to know how to display the weeks
    let jsxWeekR = <>{weekR}</>; //when now() is outside the week range, we want some nice display text

    if (Date.now() < dateStart.getTime()) {
      //if the batch hasn't started yet
      jsxWeekC = <>Happening soon</>;
    }

    if (Date.now() > dateEnd.getTime()) {
      //if the batch is overwith
      jsxWeekR = <>Already happened</>;
    }

    //transform and copy the server batch object to display batch format
    this.batch = batch;

    this.dateStartText = dateStart.toDateString(); //used to display the date
    this.dateEndText = dateEnd.toDateString();

    this.dateSortStart = dateStart.getTime(); //used to sort the dates
    this.dateSortEnd = dateEnd.getTime();

    this.weekSortCurrent = weekC; //the weeks as a number so they can be sorted
    this.weekSortRemaining = weekR;

    this.jsxWeekCurrent = jsxWeekC; //the weeks as jsx for display
    this.jsxWeekRemaining = jsxWeekR;

    this.skillset = batch.curriculum.curriculumSkillset.skillSetName;
    this.associatesActive = associatesGetActiveTotal(batch.associates, true);
    this.associatesInactive = associatesGetActiveTotal(batch.associates, false);
    this.trainers = batch.trainers;
    this.location = locationGetName(batch.location);
  }

  /*
    displays the batchForDisplay as something presentable for a row in a table
  */
  displayAsTableRow = () => {
    return (
      <>
        <td>
          <ViewBatchModal batchDisplayObj={this.batch} />
          <br />
          ID {this.batch.batchId}
        </td>

        <td>
          <i>Confirmed</i>
          <br />
          <i>ProgramType</i>
          <br />
          <i>AssociatesActive</i>
          <br />
          <i>AssociatesInactive</i>
          <br />
        </td>
        <td>
          {this.batch.isConfirmed ? "Yes" : "No"}
          <br />
          {this.batch.programType}
          <br />
          {this.associatesActive}
          <br />
          {this.associatesInactive}
          <br />

          {/* <Row> 
              <Col>
                <i>Confirmed</i>
              </Col>
              <Col>{this.batch.isConfirmed ? "Yes" : "No"}</Col>
            </Row>
            <Row>
              <Col>
                <i>ProgramType</i>
              </Col>
              <Col>{this.batch.programType}</Col>
            </Row>
            <Row>
              <Col>
                <i>AssociatesActive</i>
              </Col>
              <Col>{this.associatesActive}</Col>
            </Row>
            <Row>
              <Col>
                <i>AssociatesInactive</i>
              </Col>
              <Col>{this.associatesInactive}</Col>
            </Row> */}

          {/* Cannot make 2 columns */}
          {/* <Col>
                <Row><i>Confirmed</i></Row>
                <Row><i>ProgramType</i></Row>
                <Row><i>AssociatesActive</i></Row>
                <Row><i>AssociatesInactive</i></Row>
              </Col>

              <Col>
                <Row>{this.batch.isConfirmed ? "Yes" : "No"}</Row>
                <Row>{this.batch.programType}</Row>
                <Row>{this.associatesActive}</Row>
                <Row>{this.associatesInactive}</Row>
              </Col> */}
          {/* Confirmed {this.batch.isConfirmed ? "Yes" : "No"}
          <br />
          Program Type {this.batch.programType}
          <br />
          Associates active {this.associatesActive}
          <br />
          Associates Inactive {this.associatesInactive} */}
        </td>

        {/* <td>{this.batch.curriculum}</td> */}

        <td>
          <Container>
            <Row>
              <Col>
                <i>Started</i>
              </Col>
              <Col>{this.dateStartText}</Col>
            </Row>
            <Row>
              <Col>
                <i>Ends </i>
              </Col>
              <Col>{this.dateEndText}</Col>
            </Row>
            <Row>
              <Col>
                <i>Week current</i>
              </Col>
              <Col>{this.jsxWeekCurrent}</Col>
            </Row>
            <Row>
              <Col>
                <i>Weeks left</i>
              </Col>
              <Col>{this.jsxWeekRemaining}</Col>
            </Row>
          </Container>
        </td>

        <td>
          <i>Location</i> {this.location}
          <br />
          <i>Skillset</i> {this.skillset}
          <br />
          <i>Teachers</i>
          {this.trainers.length == 0 ? (
            <> nobody</>
          ) : (
            this.batch.trainers.map((trainer: any) => {
              return <>, {trainer.firstName}</>;
            })
          )}
        </td>
      </>
    );
  };
}
