import React from 'react';
import { Button } from 'reactstrap';
import { getAllClientDemands } from '../api/clientDemand';
import { ClientDemands } from '../models/ClientDemands';

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
      clientDemand: [],
    };
  }

  componentDidMount() {
    this.loadGoogle();
    this.setState({
      clientDemand: this.getDemand(),
    });
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
    let clientDemandData = [{}];
    // map through array of demands to add skillset & quantity to obj
    let mappedData = demandArr.map((cl: any) => {
      let skillset = cl.skillsetName;
      let quantity = cl.quantity;
      // Check to see if skillset is already in object, and if so
      // add the quantity to the existing quantity
      if (!(skillset in clientDemandData)) {
        clientDemandData.push({ skillset: quantity });
      } else {
      }
    });
    return demandArr;
  };
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
        <h1>Hi</h1>
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
