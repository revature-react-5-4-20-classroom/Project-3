import { Trainer } from "../models/Trainer";
import { Curriculum } from "../models/Curriculum";
import {
  Associate,
  associatesGetActiveTotal,
  associatesGetActive,
} from "../models/Associate";
import { Consent } from "../models/Consent";
import { Location, locationGetName } from "../models/Location";
import { convertDateToUTC } from "../GeneralPurposeHelpers/convertDateToUTC";
import { dateDifferenceWeeks } from "../GeneralPurposeHelpers/dateDifferenceWeeks";
import React from "react";
import { Batch } from "../models/Batch";
import { Col, Container, Row, Table } from "reactstrap";
import { BatchViewModal, BatchViewModalRedux } from "./BatchViewModal";

/*
  This batch has additional information for display on the front end.
  For example, it does calculations on dates using a start and end date.
  It is a batch with additional stuff.
  this can display a batch as a row in a table.
*/
interface IPBatchForDisplay {
  parentTop: any;
  batch: Batch;
}

export class BatchForDisplay extends React.Component<IPBatchForDisplay, any> {
  /*
    Returns a BatchForDisplay which is derived from a server side batch
  */
  constructor(props: any) {
    super(props);

    let dateStart = convertDateToUTC(props.batch.startDate); //convert strings to Date objects
    let dateEnd = convertDateToUTC(props.batch.endDate);

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
    this.state = {
      batch: props.batch,

      dateStartText: dateStart.toDateString(), //used to display the date
      dateEndText: dateEnd.toDateString(),

      dateSortStart: dateStart.getTime(), //used to sort the dates
      dateSortEnd: dateEnd.getTime(),

      weekSortCurrent: weekC, //the weeks as a number so they can be sorted
      weekSortRemaining: weekR,

      jsxWeekCurrent: jsxWeekC, //the weeks as jsx for display
      jsxWeekRemaining: jsxWeekR,
    };
  }

  render() {
    return this.displayAsTableRow();
  }

  /*
    Displays the batchForDisplay as something presentable for a row in a table.
    Maybe there will be other kinds of displays for a batch.
  */
  displayAsTableRow = () => {
    return (
      <>
        <td>
          <BatchViewModal
            currentBatch={this.state.batch}
            parentTop={this.props.parentTop}
          />
          <br />
          ID {this.state.batch.batchId}
          {/* <br />
          C {this.state.batch.isConfirmed ? "Y" : "N"}
          <br />
          AT {this.state.batch.associates.length} */}
        </td>

        <td>
          <i>Confirmed</i>
          <br />
          <i>ProgramType</i>
          <br />
          <i>Curriculum</i>
          <br />
          <i>AssociatesActive</i>
          <br />
          <i>AssociatesInactive</i>
          <br />
        </td>
        <td>
          {this.state.batch.isConfirmed ? "Yes" : "No"}
          <br />
          {this.state.batch.programType}
          <br />
          {this.state.batch.curriculum?this.state.batch.curriculum.name:"no-curriculum"}
          <br />
          {associatesGetActiveTotal(this.state.batch.associates, true)}
          <br />
          {associatesGetActiveTotal(this.state.batch.associates, false)}
          <br />
        </td>
        <td>
          <Container>
            <Row>
              <Col>
                <i>Started</i>
              </Col>
              <Col>{this.state.dateStartText}</Col>
            </Row>
            <Row>
              <Col>
                <i>Ends </i>
              </Col>
              <Col>{this.state.dateEndText}</Col>
            </Row>
            <Row>
              <Col>
                <i>Week current</i>
              </Col>
              <Col>{this.state.jsxWeekCurrent}</Col>
            </Row>
            <Row>
              <Col>
                <i>Weeks left</i>
              </Col>
              <Col>{this.state.jsxWeekRemaining}</Col>
            </Row>
          </Container>
        </td>

        <td>
          <i>Location</i> {locationGetName(this.state.batch.location)}
          <br />
          <i>Skillset</i>{" "}
          {this.state.batch.curriculum.curriculumSkillset.skillSetName}
          <br />
          <i>Teachers</i>
          {this.state.batch.trainers.length == 0 ? (
            <> nobody</>
          ) : (
            this.state.batch.trainers.map((trainer: any) => {
              return <>, {trainer.firstName}</>;
            })
          )}
        </td>
      </>
    );
  };
}
