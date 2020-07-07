import { associatesGetActiveTotal } from "../models/Associate";
import { locationGetName } from "../models/Location";
import { convertDateToUTC } from "../GeneralPurposeHelpers/convertDateToUTC";
import { dateDifferenceWeeks } from "../GeneralPurposeHelpers/dateDifferenceWeeks";
import React from "react";
import { Batch } from "../models/Batch";
import { Col, Container, Row } from "reactstrap";
import { BatchViewModalRedux } from "./BatchViewModal";

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
      //batch: props.batch,

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

  // This is to make sure the component will update its state properly whenever the props change
  componentWillReceiveProps(newProps: any) {
    let dateStart = convertDateToUTC(newProps.batch.startDate); //convert strings to Date objects
    let dateEnd = convertDateToUTC(newProps.batch.endDate);

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
      batch: newProps.batch,

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
          <BatchViewModalRedux
            currentBatch={this.props.batch}
            parentTop={this.props.parentTop}
          />
          <br />
          ID {this.props.batch.batchId}
          {/* <br />
          C {this.props.batch.isConfirmed ? "Y" : "N"}
          <br />
          AT {this.props.batch.associates.length} */}
        </td>

        <td>
          <i>Confirmed</i>
          <br />
          <i>ProgramType</i>
          <br />
          <i>Curriculum</i>
          <br />
          <i>Associates</i>
          <br />
        </td>
        <td>
          {this.props.batch.isConfirmed ? "Yes" : "No"}
          <br />
          {this.props.batch.programType}
          <br />
          {this.props.batch.curriculum?this.props.batch.curriculum.name:"no-curriculum"}
          <br />
          {this.props.batch.associates?this.props.batch.associates.length:"none"}
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
          <i>Location</i> {locationGetName(this.props.batch.location)}
          <br />
          <i>Skillset</i>{" "}
          {this.props.batch.curriculum.curriculumSkillset.skillSetName}
          <br />
          <i>Teachers</i>
          {this.props.batch.trainers.length == 0 ? (
            <> nobody</>
          ) : (
            this.props.batch.trainers.map((trainer: any) => {
              return <>, {trainer.firstName}</>;
            })
          )}
        </td>
      </>
    );
  };
}
