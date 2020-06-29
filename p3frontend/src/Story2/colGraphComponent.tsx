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
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  };

  drawChart = () => {
    var data = google.visualization.arrayToDataTable([
      ['Element', 'Density', { role: 'style' }],
      ['Copper', 8.94, '#b87333'],
      ['Silver', 10.49, 'silver'],
      ['Gold', 19.3, 'gold'],
      ['Platinum', 21.45, 'color: #e5e4e2'],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation',
      },
      2,
    ]);

    var options: any = {
      title: 'Density of Precious Metals, in g/cm^3',
      width: 600,
      height: 400,
      bar: { groupWidth: '95%' },
      legend: { position: 'none' },
    };
    var chart = new google.visualization.ColumnChart(this.myRef.current);
    chart.draw(view, options);
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
