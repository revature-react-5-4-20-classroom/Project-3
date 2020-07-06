import React from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import "./Table.css";
import { Row, Col, Table, Container, Button } from "reactstrap";
import { EasyDropdown } from "../GeneralPurposeHelpers/EasyDropdown";
import { prnt } from "../GeneralPurposeHelpers/Prnt";
import { dateDifferenceWeeks } from "../GeneralPurposeHelpers/dateDifferenceWeeks";
import { TimelineComponent, TimelineRedux } from "./Timeline";
import { axiosClient } from "../api/axios";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";
import { Batch } from "../models/Batch";
import { trainerGetName } from "../models/Trainer";
import { associatesGetActiveTotal } from "../models/Associate";
import { locationGetName } from "../models/Location";
import { seeIt } from "../GeneralPurposeHelpers/seeIt";
import { connect, batch } from "react-redux";
import {
  allTheActionMappers,
  batchClickActionMapper,
} from "../redux/action-mapper";
import { IState, allTheMapStateToProps } from "../redux/reducers";
import { pseudoDataResponse } from "../PseudoData/convertJsonToObjects";
import { getAllBatches } from "../api/batch";
import { EasyTooltip } from "../GeneralPurposeHelpers/EasyTooltip";
import { timeStamp } from "console";
import { FilterForm } from "./FilterForm";
import moment from "moment";
import { convertDateToUTC } from "../GeneralPurposeHelpers/convertDateToUTC";
import { BatchForDisplay } from "./BatchForDisplay";

const doPrnt = true; //prnt will work

export class InProgress extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      viewType: "",
      batches: [], //the batches that were fetched from the server when In-progress mounted
      error: null, //holds an axios error object that will be displayed
      errorMessage: "", //holds an error message for other special cases
      //table data should be inside a table component
      sortAscend: true, //sorts by ascending or decending
      //filters state should be inside the filters modal
      filteredBatches: [],
      programTypesArray: [],
      clientsArray: [],
      curriculaArray: [],
      modalBatch: null, //what batch will be shown in the modal?
      modalShow: false, //do we show the modal?
      programType: "(none)",
      client: "(none)",
      curriculum: "(none)",
    };
  }

  //filters modal. this could be put inside the modal inself
  showModal = (index: number) => {
    let modalShow = !this.state.modalShow;
    let modalBatch = this.props.batchClickActionMapper(
      this.state.filteredBatches[index]
    );
    this.setState({
      modalShow: modalShow,
      modalBatch: modalBatch,
    });
  };

  render() {
    return (
      <Container>
        <ErrorAlert
          message={this.state.errorMessage}
          error={this.state.error}
        />
        <h6>Story 1. "In Progress"</h6>
        <br />
        <p>
          Given that batches are currently in operation When I navigate to the
          'In Progress' view And I optionally select Program Type (ROCP, CF,
          Standard, Spark) or Curricula or client Then I see current week, weeks
          remaining, number of active/inactive associates, trainer, location
          filtered by criteria And this data is shown as a table and a Calendar
          view
        </p>
        <br />
        <Row>
          <Col>
            <b>view type:</b>
            <EasyDropdown
              onSelected={(item: string) => {
                this.setState({ viewType: item });
              }}
              hoverText="Please enjoy viewing the batches in a table or calendar"
              items={["Table", "Calendar"]}
            />
          </Col>
          <Col>
            <b>Program Type Filter:</b>
            <p>{this.state.programType}</p>
          </Col>
          <Col>
            <b>Client Filter:</b>
            <p>{this.state.client}</p>
          </Col>
          <Col>
            <b>Curriculum Filter:</b>
            <p>{this.state.curriculum}</p>
          </Col>
          <Col>
            <FilterForm
              setProgramType={this.setProgramType}
              setClient={this.setClient}
              setCurriculum={this.setCurriculum}
              programTypeSelection={this.state.programTypesArray}
              clientSelection={this.state.clientsArray}
              curriculumSelection={this.state.curriculaArray}
            />
          </Col>
        </Row>
        <br />
        <br />
        <>
          Total batches that are in the system:{" "}
          <b>{this.state.filteredBatches.length}</b>
        </>
        <br />
        <br />
        {this.state.viewType === "Table" ? (
          <Table bordered>
            <tbody>
              {this.state.filteredBatches.map((batch: Batch, index: number) => {
                return (
                  <tr>
                    <BatchForDisplay batch={batch} parentTop={this} />
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <TimelineRedux
            batches={this.state.filteredBatches}
            parentTop={this}
          />
        )}
        {/* {this.state.viewType!=='Table'&&<TimelineComponent/>} */}
      </Container>
    );
  }

  reset = () => {
    console.log("helsf");
    let batch = this.state.batches;
    console.log(batch);
    this.setState({
      filteredBatches: batch,
    });
  };

  //sorts batchDisplayData using the given object property. batchForDisplay['id']
  //order is ascending
  // sortBatches = (propertyAsKey: any) => {
  //   prnt(doPrnt, `InProgress sortBatches() has been reached`);

  //   if (this.state.sortAscend) {
  //     this.state.batchDisplayData.sort((a: any, b: any) => {
  //       //compares numbers and strings. does not do date objects
  //       if (a[propertyAsKey] < b[propertyAsKey]) {
  //         return -1;
  //       }
  //       return 1;
  //     });
  //   } else {
  //     this.state.batchDisplayData.sort((a: any, b: any) => {
  //       if (a[propertyAsKey] < b[propertyAsKey]) {
  //         return 1;
  //       }
  //       return -1;
  //     });
  //   }

  //   this.setState({
  //     //cause re-render as well
  //     sortAscend: !this.state.sortAscend,
  //   });
  // };

  //fetches batches from the server, converts it to display data, and set it. checks for error edge cases.
  fetchTheBatchData = async () => {
    try {
      let batchData = await getAllBatches();

      let activebatches=batchData.filter((batch:Batch)=>{
     
        let dateEnd = convertDateToUTC(batch.endDate);
       

        return (Date.now() <= dateEnd.getTime());
      })
      batchData=activebatches;

      let sortedbatch=batchData.sort((batch:Batch, batch1:Batch)=>{
        let x=batch.location.locationName;
        let y=batch1.location.locationName;
        if(x<y){return -1};
        if(x>y){ return 1}
        return 0;
      
      });

      console.log(sortedbatch)
      batchData=sortedbatch;

      let programtype = batchData.map((batch: Batch) => {
        return batch.programType;
      });

      programtype = programtype.filter((value, index, self) => {
        // Use this to get only unique values
        return self.indexOf(value) === index;
      });

      let curricula = batchData.map((batch: Batch) => {
        return batch.curriculum.name;
      });

      curricula = curricula.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

      let clientDemandLists = batchData.map((batch: Batch) => {
        return batch.curriculum.curriculumSkillset.clientDemands;
      });

      let clients: any[] = [];
      for (let cdList of clientDemandLists) {
        console.log(cdList);
        for (let cd of cdList) {
          if (clients.indexOf(cd.client.name) === -1) {
            console.log(cd.client.name);
            clients.push(cd.client.name);
          }
        }
      }

      if (batchData == null) {
        this.setState({
          errorMessage:
            "ERROR. There wasn't a data property in the server response",
        });
      } else {
        prnt(
          doPrnt,
          `fetchTheBatchData() had a response. batchData=`,
          batchData
        );

        this.setState({
          batches: batchData,
          filteredBatches: batchData,
          programTypesArray: programtype,
          clientsArray: clients,
          curriculaArray: curricula,
        });
      }
    } catch (e) {
      this.setState({ error: e });
    }
  };

  //All of these filter functions should be inside the filters modal
  setProgramType = (
    value: string //filter
  ) => {
    console.log(`Setting program type: ${value}`);
    this.setState({ programType: value });
  };

  setClient = (value: string) => {
    this.setState({ client: value });
  };

  setCurriculum = (value: string) => {
    //filter
    this.setState({ curriculum: value }, this.applyFilters);
  };

  //Returns an array of batches that have been filtered based on batch client type
  filterBatchesByClient = (batchesToFilter: Batch[]) => {
    // finds clients in batches, based on client demands regarding curricula
    if (this.state.client !== "(none)") {
      let client = this.state.client;
      let filteredBatches = batchesToFilter.filter((b: Batch) => {
        let clientDemands = b.curriculum.curriculumSkillset.clientDemands;
        for (let cd of clientDemands) {
          if (cd.client.name === client) {
            return true;
          }
        }
        return false;
      });
      // this.setState({
      // 	filteredBatches: filteredBatches,
      // })
      return filteredBatches;
    } else {
      // let batches = this.state.batches;
      // this.setState({
      // 	filteredBatches: this.state.batches,
      // })
      return batchesToFilter;
    }
  };

  //Returns an array of batches that have been filtered based on batch curriculum
  filterBatchesByCurriculum = (batchesToFilter: Batch[]) => {
    if (this.state.curriculum !== "(none)") {
      let filtercurr = batchesToFilter;
      console.log(filtercurr);
      let filtered = filtercurr.filter((batch: Batch) => {
        return batch.curriculum.name == this.state.curriculum;
      });
      console.log(filtered);

      // this.setState({filteredBatches:filtered,
      return filtered;
    } else {
      return batchesToFilter;
    }
  };

  //Returns an array of batches that have been filtered based on batch program type
  filterBatchesByProgramType = (batchesToFilter: Batch[]) => {
    if (this.state.programType !== "(none)") {
      if (this.state.programTypesArray.indexOf(this.state.programType) > -1) {
        let filtercurr = batchesToFilter;
        let filtered = filtercurr.filter((batch: Batch) => {
          return batch.programType === this.state.programType;
        });
        console.log(filtered);

        // this.setState({filteredBatches:filtered,
        return filtered;
      } else {
        return batchesToFilter;
      }
    } else {
      return batchesToFilter;
    }
  };

  //Applies all the filters and sets state
  applyFilters = () => {
    let batches = this.state.batches;
    console.log(`Batches: ${batches}`);
    console.log(batches);
    let filteredBatches = this.filterBatchesByProgramType(batches);
    filteredBatches = this.filterBatchesByCurriculum(filteredBatches);
    filteredBatches = this.filterBatchesByClient(filteredBatches);
    this.setState({
      filteredBatches: filteredBatches,
    });
  };

  componentDidMount() {
    this.fetchTheBatchData();
  }
}

//Create a redux version of InProgress
export const ReduxInProgress = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(InProgress);
