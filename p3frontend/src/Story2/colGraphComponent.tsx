<<<<<<< HEAD
import React from 'react';
import moment from 'moment';
import { Button } from 'reactstrap';
import { getAllClientDemands } from '../api/clientDemand';
import { ClientDemands } from '../models/ClientDemands';
import { getActiveAssociates } from '../api/Associate';
import { batch } from 'react-redux';
=======
import React from "react";
import { getAllClientDemands } from "../api/clientDemand";
import { getActiveAssociates } from "../models/Associate";
>>>>>>> 3f21c518a7aa8b7890d2e6007245d988af818e56

export class ColumnChartTest extends React.Component<any, any> {
  private myRef: any;
  private myButton: any;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.myButton = React.createRef();
    this.state = {
      shouldUpdate: false,
      current: 0,
      shouldRunInit: false,
      clientDemand: new Map(),
    };
  }

  componentDidMount() {
    this.loadGoogle();
    this.setState({
      clientDemand: this.getDemand(),
    });
    this.getSupply();
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (this.state.shouldUpdate) {
      this.setState({
        shouldUpdate: false,
      });
      return true;
    } else {
      return nextProps != this.props || this.state != nextProps.state;
    }
  }

  componentDidUpdate() {
    if (this.state.shouldRunInit) {
      this.init();
      this.setState({
        shouldRunInit: false,
      });
    }
  }

  getDemand = async () => {
    let demandArr = await getAllClientDemands();
    console.log(`DEMAND = `, demandArr);
    // Create client demand data that has skillsetname : #
    let clientDemandData = new Map();
    // map through array of demands to add skillset & quantity to obj
    demandArr.map((cl: any) => {
      let skillset = cl.skillsetName;
      let quantity = cl.quantity;
      // Check to see if skillset is already in object, and if so
      // add the quantity to the existing quantity
      if (!clientDemandData.has(skillset)) {
        clientDemandData.set(skillset, quantity);
      } else {
        clientDemandData.set(
          skillset,
          clientDemandData.get(skillset) + quantity
        );
      }
    });
    console.log(clientDemandData);
    return clientDemandData;
  };

  // supplyData = [{java/react: 2020-08-01}, {java/react: 2020-10-01}]

  // groupData =
  // [
  // {Java/react: {current: 1, omon: 2, tmon: 5}},
  // {saleseforce: {current: 3, omon: 2, tmon: 6}}
  // ]

  //      if Date(gd} <= date.now() -> object created with {skillset: 'current'}
  // //    else if gd > date.now() && gd <= {onemonthfromnow} -> obj created with {skillset:'oneMonth'}
  // //    else if gd > {onemonthfromnow} && gd <= {threemonthsfromnow} -> obj created with {skillset: 'threeMonth}

  // // 3) map through array to create an array that graphs can work with [{java/react: {current: 3, onemonth: 6, threemonth: 23}}, {salesforce...}]

  // // 5?) Data is now a array/map of objects with key of Skillsetname and value that is an object
  // //     that has current/onemonth/threemonth with a # as a value that reps # of associates

  // // Getting back api response and creating array of objects that
  // // each contain an associates skillset and their graduation date
  // // aka batch end date
  getSupply = async () => {
    // 1) get data from api associate (skillset and batch graduation date) {associateId: 2, associateName: 'Tom', Skillset: {skillsetId: 1, name: 'Java/react'}}
    let supplyArr = await getActiveAssociates();
    console.log(supplyArr);
    // 2) pass each associate through loop that says:   gd=graduation date [{java/react: current}, {java/react: onemonth}, {salesforce: current}]
    let supplyData = new Map();
    let today = moment().format('YYYY-MM-DD');
    let oneMonthFromToday = moment()
      .month(moment().month() + 1)
      .format('YYYY-MM-DD');
    let threeMonthsFromToday = moment()
      .month(moment().month() + 3)
      .format('YYYY-MM-DD');
    supplyArr.map((a: any) => {
      let skillset = a.batch.curriculum.curriculumSkillset.skillSetName;
      let batchDate = moment(a.batch.endDate).format('YYYY-MM-DD');
      if (batchDate <= today) {
        if (!supplyData.has(skillset)) {
          supplyData.set(skillset, {
            current: 1,
          });
        } else {
          let timeObj = supplyData.get(skillset);
          supplyData.set(skillset, {
            ...timeObj,
            current: timeObj.current ? timeObj.current + 1 : 1,
          });
        }
      }
      if (batchDate > today && batchDate <= oneMonthFromToday) {
        if (!supplyData.has(skillset)) {
          supplyData.set(skillset, {
            oneMonth: 1,
          });
        } else {
          let timeObj = supplyData.get(skillset);
          supplyData.set(skillset, {
            ...timeObj,
            oneMonth: timeObj.oneMonth ? timeObj.oneMonth + 1 : 1,
          });
        }
      }
      if (batchDate > oneMonthFromToday && batchDate <= threeMonthsFromToday) {
        if (!supplyData.has(skillset)) {
          supplyData.set(skillset, {
            threeMonths: 1,
          });
        } else {
          let timeObj = supplyData.get(skillset);
          supplyData.set(skillset, {
            ...timeObj,
            threeMonths: timeObj.threeMonths ? timeObj.threeMonths + 1 : 1,
          });
        }
      }
    });
    console.log('SUPPLY DATA MAP: ', supplyData);
    return supplyArr;
  };
  // //   groupData = [
  // //      {Java/react: {current: 1, omon: 2, tmon: 5}},
  // //      {saleseforce: {current: 3, omon: 2, tmon: 6}}
  // //   ]
  // // supplyData = [{java/react: 2020-08-01}, {java/react: 2020-10-01}]
  // // getting grouping of associate skillsets, & batchend date
  // // and turning into Array of nested objects of skillsets and // quantities sorted by date
  // groupByDate = async (arr: any[]) => {
  //   let groupedSupply = new Map();
  //   arr.map((a: any) => {
  //     let key = Object.keys(a)[0]; // should be 'java/react'
  //     let current = a.key.current; // should be a number for current
  //     let oneMonth = a.key.oneMonth;
  //     let threeMonth = a.key.threeMonth;
  //     // // loop through groupedSupply to see if the key for a given
  //     // // element of the supply data array already exists
  //     for (let i = 0; i< Object.keys(groupedSupply).length; i++) {
  //       if (key === Object.keys(groupedSupply)[i])	{
  //         let skillObj = groupedSupply.get(key);
  //         groupedSupply.set(key,
  //           {
  //           current: skillObj.current
  //           }
  //         )
  //       }
  //     }
  //     //  if (a.batchEnddate <= date.now()) {
  //   });
  //   return groupedSupply;
  // };

  // This initializes google charts
  loadGoogle = () => {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(this.init);
  };

  // // Method to create a chart/table
  init = () => {
    let stateCurrent = this.state.current;
    // Creating a data obj for our table
    // // Number Columns represent each type of data - 5 total
    // // String column represent a title
    // Each array is a grouping of the above columns
    var data: any = [];
    data[0] = new google.visualization.DataTable();
    data[0].addColumn('string', 'Demand and Supply');
    data[0].addColumn('number', 'Total');
    data[0].addColumn('number', 'Java/React');
    data[0].addColumn('number', 'Salesforce');
    data[0].addColumn('number', 'Data');
    data[0].addColumn('number', 'Ai');
    data[0].addRows([
      ['Client Demand', 64, 23, 21, 16, 4],
      ['Current', 19, 4, 6, 8, 1],
      ['1 Month', 31, 10, 12, 6, 3],
      ['3 Months', 50, 20, 15, 10, 5],
    ]);
    data[1] = new google.visualization.DataTable();
    data[1].addColumn('string', 'Demand and Supply');
    data[1].addColumn('number', 'Java/React');
    data[1].addRows([
      ['Client Demand', 23],
      ['Current', 4],
      ['1 Month', 10],
      ['3 Months', 20],
    ]);
    data[2] = new google.visualization.DataTable();
    data[2].addColumn('string', 'Demand and Supply');
    data[2].addColumn('number', 'Salesforce');
    data[2].addRows([
      ['Client Demand', 21],
      ['Current', 6],
      ['1 Month', 12],
      ['3 Months', 15],
    ]);
    data[3] = new google.visualization.DataTable();
    data[3].addColumn('string', 'Demand and Supply');
    data[3].addColumn('number', 'Data');
    data[3].addRows([
      ['Client Demand', 16],
      ['Current', 8],
      ['1 Month', 6],
      ['3 Months', 10],
    ]);
    data[4] = new google.visualization.DataTable();
    data[4].addColumn('string', 'Demand and Supply');
    data[4].addColumn('number', 'Ai');
    data[4].addRows([
      ['Client Demand', 4],
      ['Current', 1],
      ['1 Month', 3],
      ['3 Months', 5],
    ]);

    // Creates view with data?????????
    var view = [];
    view[0] = new google.visualization.DataView(data[0]);
    view[0].setRows([0, 1, 2, 3]);
    view[1] = new google.visualization.DataView(data[1]);
    view[1].setRows([0, 1, 2, 3]);
    view[2] = new google.visualization.DataView(data[2]);
    view[2].setRows([0, 1, 2, 3]);
    view[3] = new google.visualization.DataView(data[3]);
    view[3].setRows([0, 1, 2, 3]);
    view[4] = new google.visualization.DataView(data[4]);
    view[4].setRows([0, 1, 2, 3]);

    // Labeling and styling
    var options: any = {
      orientation: 'horizontal',
      width: 900,
      column: 0,
      height: 500,
      hAxis: {
        direction: 1,
      },
      vAxes: {
        0: { title: 'Amount of Associates' },
      },
      hAxes: {
        0: { title: 'Demand and Supply' },
      },
    };
    // myRef acts like .getElementById but for React
    var chart = new google.visualization.BarChart(this.myRef.current);
    function drawChart() {
      chart.draw(data[stateCurrent], options);
    }
    drawChart();

    // This is what actually creates the tables
    // })
    // Updates componment once chart is drawn
    this.setState({
      shouldUpdate: true,
    });
  };

  doSomething = (n: number) => {
    this.setState({
      current: n,
      shouldRunInit: true,
      shouldUpdate: true,
    });
  };

  // This can be used to loop through data to create all tables necessary
  // createTableData = (dataArray: any, viewArray: any, index: number, dataObj: any) => {
  //   let data = dataArray;
  //   data[index] = new google.visualization.DataTable();
  //   data[index].addColumn('string', 'Demand and Supply');
  //   data[index].addColumn('number', 'Java/React'); // Data.curriculumName
  //   data[index].addRows([
  //     ['Client Demand', 23], // data.total
  //     ['Current', 4], // data.current
  //     ['1 Month', 10], // data.oneMonth
  //     ['3 Months', 20], // data.threeMonth
  //   ]);
  //   let view = viewArray;
  //   view[index] = new google.visualization.DataView(data[index]);
  //   view[index].setRows([0, 1, 2, 3]);
  //   let results = {data, view};
  //   return results;
  // }

  render() {
    return (
      <>
        <h6>Please enjoy the following data</h6>
        <div ref={this.myRef} />
        {/* <Button onClick={() => this.doSomething(0)} ref={this.myButton}>
          All
        </Button>

        <Button onClick={() => this.doSomething(1)} ref={this.myButton}>
          Java/React
        </Button>

        <Button onClick={() => this.doSomething(2)} ref={this.myButton}>
          Salesforce
        </Button>

        <Button onClick={() => this.doSomething(3)} ref={this.myButton}>
          Data
        </Button>

        <Button onClick={() => this.doSomething(4)} ref={this.myButton}>
          AI
        </Button> */}
      </>
    );
  }
}

// Method to create a SINGLE chart/table
// drawChart = () => {
//   // Creating a data obj for our table
//   var data = new google.visualization.DataTable();
//   // Number Columns represent each type of data - 5 total
//   // String column represent a title
//   data.addColumn('string', 'Demand and Supply');
//   data.addColumn('number', 'Total');
//   data.addColumn('number', 'Java/React');
//   data.addColumn('number', 'Salesforce');
//   data.addColumn('number', 'Data');
//   data.addColumn('number', 'Ai');
//   // Each array is a grouping of the above columns
//   data.addRows([
//     ['Client Demand', 64, 23, 21, 16, 4],
//     ['Current', 19, 4, 6, 8, 1],
//     ['1 Month', 31, 10, 12, 6, 3],
//     ['3 Months', 50, 20, 15, 10, 5],
//   ]);

//   // Creates view with data?????????
//   var view = new google.visualization.DataView(data);
//   view.setRows([0, 1, 2, 3]);

//   // Labeling and styling
//   var options: any = {
//     orientation: 'horizontal',
//     width: 900,
//     column: 0,
//     height: 500,
//     hAxis: {
//       direction: 1,
//     },
//     vAxes: {
//       0: { title: 'Amount of Associates' },
//     },
//     hAxes: {
//       0: { title: 'Demand and Supply' },
//     },
//   };

//   // myRef acts like .getElementById but for React
//   var chart = new google.visualization.BarChart(this.myRef.current);
//   // This is what actually creates the tables
//   // })
//   chart.draw(view, options);
//   // Updates componment once chart is drawn
//   this.setState({
//     shouldUpdate: true,
//   });
// };
