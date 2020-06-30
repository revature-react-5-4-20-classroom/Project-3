import React from 'react';

export class ColumnChartTest extends React.Component<any, any> {
  private myRef: any;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      shouldUpdate: false,
    };
  }

  componentDidMount() {
    this.loadGoogle();
  }

  shouldComponentUpdate() {
    if (this.state.shouldUpdate) {
      this.setState({
        shouldUpdate: false,
      });
      return true;
    } else {
      return false;
    }
  }

  // This initializes google charts
  loadGoogle = () => {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(this.drawChart);
  };

  // Method to create a chart/table
  drawChart = () => {
    // Creating a data obj for our table
    var data = new google.visualization.DataTable();
    // Number Columns represent each type of data - 5 total
    // String column represent a title
    data.addColumn('string', 'Demand and Supply');
    data.addColumn('number', 'Total');
    data.addColumn('number', 'Java/React');
    data.addColumn('number', 'Salesforce');
    data.addColumn('number', 'Data');
    data.addColumn('number', 'Ai');
    // Each array is a grouping of the above columns
    data.addRows([
      ['Client Demand', 64, 23, 21, 16, 4],
      ['Current', 19, 4, 6, 8, 1],
      ['1 Month', 31, 10, 12, 6, 3],
      ['3 Months', 50, 20, 15, 10, 5],
    ]);

    // Creates view with data?????????
    var view = new google.visualization.DataView(data);
    view.setRows([0, 1, 2, 3]);

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
    // This is what actually creates the table
    chart.draw(view, options);
    // Updates componment once chart is drawn
    this.setState({
      shouldUpdate: true,
    });
  };

  render() {
    return (
      <>
        <h1>Hi</h1>
        <div ref={this.myRef} />
      </>
    );
  }
}
