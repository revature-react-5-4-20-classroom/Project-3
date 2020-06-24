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

  // myRef: React.RefObject<HTMLElement> = React.createRef();

  componentDidMount() {
    // const script = document.createElement('script');
    // script.src = 'https://www.gstatic.com/charts/loader.js';
    // script.type = 'text/javascript';
    // script.async = true;
    // document.body.prepend(script);
    this.loadGoogle();
    // this.addToDiv();
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

  // addToDiv = () => {
  //   this.myRef.current.inner= 'Hello';
  // };

  render() {
    // google.charts --- SCRIPT not NPM
    return (
      <>
        <h1>Hi</h1>
        <div ref={this.myRef} />
      </>
    );
  }
}

// loadUp = () => {

//   let test: google.visualization.ChartBase;
//   google.charts.load;
// }

// drawChart = () => {
//   // Standard google charts functionality is available as GoogleCharts.api after load
//   const data: any = google.visualization.arrayToDataTable([
//     ['Chart thing', 'Chart amount'],
//     ['Lorem ipsum', 60],
//     ['Dolor sit', 22],
//     ['Sit amet', 18],
//   ]);
//   const pie_1_chart = new google.visualization.PieChart(
//     this.state.myRef.current.focus()
//   );
//   const pie_1_options: any = {
//     pieHole: 0.8,
//     pieSliceTextStyle: {
//       color: 'black',
//     },
//     slices: {
//       0: { color: '#7ec252' },
//       1: { color: '#a4ce57' },
//       2: { color: '#cfe4ad' },
//     },
//     legend: {
//       position: 'bottom',
//       textStyle: {
//         color: 'black',
//         fontSize: 13,
//         fontName: 'EncodeSans',
//       },
//     },
//     title: 'Chart 1',
//     titleTextStyle: {
//       color: 'black',
//       fontSize: 13,
//       fontName: 'EncodeSans',
//     },
//     chartArea: { left: 0, top: 0, width: '100%', height: '80%' },
//     pieSliceText: 'none',
//   };
//   pie_1_chart.draw(data, pie_1_options);
// };
