import React from 'react';
import { Button } from 'reactstrap';

export class ColumnButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      viewIndex: this.props.index,
    };
  }

  // changeChart = () => {};

  // THIS NEEDS TO BE A BUTTON THAT CAN BE RENDERED WITH EACH 'TAB' OR
  // DIFFERENT 'PAGE' OF THE CHARTS THAT WILL CHANGE THE CHART TO THE
  // INDEX IT IS ASSOCIATED WITH IN THE 'VIEW' ARRAY IN THE GRAPH COMP

  render() {
    return (
      <Button onClick={this.props.changeChart}>
        {this.props.curriculaName}
      </Button>
    );
  }
}
