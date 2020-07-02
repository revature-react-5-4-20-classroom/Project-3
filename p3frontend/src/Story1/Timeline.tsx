import React from "react";
import Timeline from "react-calendar-timeline";
import moment from "moment";
import "./Timeline.css";
import { Batch } from "../models/Batch";
import { getAllBatches } from "../api/batch";
import { Trainer } from "../models/Trainer";
import { TrainerSkills } from "../models/TrainerSkills";
import { Skill } from "../models/Skill";
import { Location } from "../models/Location";
import { Curriculum } from "../models/Curriculum";
import { Associate } from "../models/Associate";
import { allTheMapStateToProps } from "../redux/reducers";
import { allTheActionMappers } from "../redux/action-mapper";
import { connect } from "react-redux";
import { Modal, Toast, Button } from "reactstrap";
import { TimelineModal } from "./TimelineModal";
import { store } from "../redux/store";

interface TimelineComponentProps {
  batches: Batch[];
}

interface TimelineComponentState {
  //batches:  any,
  groups: any;
  items: any;

  prevent: any;
  isOpen: boolean;
  toggle: any;
  batchIsOpen: boolean;
}

export class TimelineComponent extends React.Component<
  any,
  TimelineComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      //batches: null,
      groups: null,
      items: null,

      prevent: false,
      isOpen: false,
      toggle: false,
      batchIsOpen: false,
    };
  }

  componentDidUpdate = (prevProps: any) => {
    if (prevProps.batches !== this.props.batches) {
      this.changeState();
    }
  };

  changeState = () => {
    console.log("hello");
    let mappedGroups: any[] = [];
    let mappedItems: any[] = [];

    this.props.batches &&
      this.props.batches.map((batch: Batch, index: number) => {
        let group = {
          id: batch.batchId,
          title: ` ${batch.location.locationName}`,
        };
        let item = {
          id: batch.batchId,
          group: batch.batchId,
          title: `${batch.curriculum.name}`,
          start_time: moment(batch.startDate),
          end_time: moment(batch.endDate).add(1, "day"),
          canMove: false,
          canResize: false,
          canChangeGroup: false,
          color: "rgb(0, 14, 206)",

          itemProps: {
            onContextMenu: (event: any) => {
              this.displayBatchInfo(batch);
            },

            onDoubleClick: () => {
              alert("hello");
            },
          },
        };

        mappedGroups.push(group);
        mappedItems.push(item);
      });
    console.log(mappedItems);
    this.setGroupsAndItems(mappedGroups, mappedItems);
  };

  toggle = () => {
    let toggle = !this.state.toggle;
    this.setState({
      toggle: toggle,
    });
  };

  setGroupsAndItems = (groups: any[], items: any[]) => {
    this.setState({
      groups: groups,
      items: items,
    });
  };
  componentDidMount() {
    let timer: any;
    let alreadyClicked = false;
    //await this.setBatches();
    let mappedGroups: any[] = [];
    let mappedItems: any[] = [];

    this.props.batches &&
      this.props.batches.map((batch: Batch, index: number) => {
        let group = {
          id: batch.batchId,
          title: ` ${batch.location.locationName}`,
        };
        let item = {
          id: batch.batchId,
          group: batch.batchId,
          title: `${batch.curriculum.name}`,
          start_time: moment(batch.startDate),
          end_time: moment(batch.endDate).add(1, "day"),
          canMove: false,
          canResize: false,
          canChangeGroup: false,
          color: "rgb(0, 14, 206)",
          // onItemClick:()=>{alert("sdf")},
          //    onClick:()=>{alert("sfds")},
          // selectedBgColor: 'rgba(225, 166, 244, 1)',
          // bgColor : 'rgba(225, 166, 244, 0.6)',
          itemProps: {
            onContextMenu: (event: any) => {
              this.displayBatchInfo(batch);
            },

            onDoubleClick: (batch:any) => {
              alert("hello");
            },
          },
        };

        mappedGroups.push(group);
        mappedItems.push(item);
      });
    this.setGroupsAndItems(mappedGroups, mappedItems);
  }

  setIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  displayBatchInfo = (batch: Batch) => {
    this.props.batchClickActionMapper(batch);
    this.setIsOpen();
  };

  setBatchIsOpen = () => {
      let batchIsOpen
      this.setState({
          
      })
  }
  showBatchModal = (batch: Batch) => {
    this.props.batchClickActionMapper(batch);

  }

  render() {
    console.log(this.state.items);
    if (this.state.items) {
      return (
        <div>
          <Button color="primary" onClick={this.toggle}>
            Click me
          </Button>
          <br />
          <Toast isOpen={this.state.toggle}>
            Double click to edit or right click to view information
          </Toast>
          <br />

          <Timeline
            groups={this.state.groups}
            items={this.state.items}
            defaultTimeStart={moment().add(-1, "year")}
            defaultTimeEnd={moment().add(1, "year")}
          ></Timeline>
          {this.state.isOpen ? (
            <TimelineModal
              isOpen={this.state.isOpen}
              toggle={this.setIsOpen}
              batch={store.getState().batch.batch}
            />
          ) : (
            <></>
          )}
          {}
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export const TimelineRedux = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(TimelineComponent);
