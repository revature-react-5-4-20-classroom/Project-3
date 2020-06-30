import React from 'react';
import { Button } from 'reactstrap';

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
    };
  }

  componentDidMount() {
    this.loadGoogle();
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

    // Creates view with data?????????
    var view = [];
    view[0] = new google.visualization.DataView(data[0]);
    view[0].setRows([0, 1, 2, 3]);
    view[1] = new google.visualization.DataView(data[1]);
    view[1].setRows([0, 1, 2, 3]);

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

  doSomething = () => {
    this.setState({
      current: 1 - this.state.current,
      shouldRunInit: true,
      shouldUpdate: true,
    });
  };

  render() {
    return (
      <>
        <h1>Hi</h1>
        <div ref={this.myRef} />
        <Button onClick={this.doSomething} ref={this.myButton}>
          Change
        </Button>
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
