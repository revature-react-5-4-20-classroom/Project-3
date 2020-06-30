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

  loadGoogle = () => {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(this.drawChart);
  };

  drawChart = () => {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Demand and Supply');
    data.addColumn('number', 'Total');
    data.addColumn('number', 'Java/React');
    data.addColumn('number', 'Salesforce');
    data.addColumn('number', 'Data');
    data.addColumn('number', 'Ai');
    data.addRows([
      ['Client Demand', 64, 23, 21, 16, 4],
      ['Current', 19, 4, 6, 8, 1],
      ['1 Month', 31, 10, 12, 6, 3],
      ['3 Months', 50, 20, 15, 10, 5],
    ]);

    var view = new google.visualization.DataView(data);
    view.setRows([0, 1, 2, 3]);

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

    var chart = new google.visualization.BarChart(this.myRef.current);
    chart.draw(view, options);
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
