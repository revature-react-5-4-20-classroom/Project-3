import React from 'react';

export class Test extends React.Component<any, any> {
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
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(this.drawChart);
  };

  drawChart = () => {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2],
    ]);
    // Set chart options
    var options = {
      title: 'How Much Pizza I Ate Last Night',
      width: 400,
      height: 300,
    };
    // Instantiate and draw our chart, passing in some options.

    var chart = new google.visualization.PieChart(this.myRef.current);

    chart.draw(data, options);
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
