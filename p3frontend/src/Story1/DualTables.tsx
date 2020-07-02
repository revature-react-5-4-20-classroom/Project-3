import React from "react";
import { Table, Button, Row, Col } from "reactstrap";

/*
	<DualTables 
		arrayLeft=		{anArray} 	
    arrayRight=		{anotherArray}
    messageLeft=	"displayed on left when array is empty"
    messageRight=	"displayed on right when array is empty"
    onMoveToLeft={aFunction}
    onMoveToRight={aFunction}
		headerLeft=		"Displayed above the left table"	
		headerRight=	"Displayed above the right table"	
    />

	Displays two tables next to each other. 
	Items may be added to the right table.
	Items may be removed and placed back in the left table.
  When an item is moved, onMoveFunc is called on the item.
  onMoveFunc(item)

	headerLeft			  |		headerRight
	___________________________________
	messageLeft			  |		messageRight
						        |
	arrayLeft[0](ADD)	|		arrayRight[0](REMOVE)
	arrayLeft[1](ADD)	|		arrayRight[1](REMOVE)
*/

interface IPDualTables{
  arrayLeft:any[]
  arrayRight:any[]
  messageLeft:any //could be a string or jsx
  messageRight:any //could be a string or jsx
  headerLeft:any //could be a string or jsx
  headerRight:any //could be a string or jsx
  onMoveToLeft: (item: any) => void //called when an item is moved. onMoveToLeft(item)
  onMoveToRight: (item: any) => void
}

export class DualTables extends React.Component<IPDualTables, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col>
          <h6>{this.props.headerLeft}</h6>
          {this.displayTable(
            this.props.arrayLeft,
            this.props.messageLeft,
            "Add",
            this.moveToRightTable
          )}
        </Col>
        <Col>
          <h6>{this.props.headerRight}</h6>
          {this.displayTable(
            this.props.arrayRight,
            this.props.messageRight,
            "Remove",
            this.moveToLeftTable
          )}
        </Col>
      </Row>
    );
  }

  moveToRightTable = (item: any, i: number) => {
    this.props.arrayRight.push(item);//move the item within the arrays
    this.props.arrayLeft.splice(i, 1);
    this.props.onMoveToRight(item);//use a callback so things can be done outside this component
    this.setState({});
  };

  moveToLeftTable = (item: any, i: number) => {
    this.props.arrayRight.splice(i, 1);
    this.props.arrayLeft.push(item);
    this.props.onMoveToLeft(item);
    this.setState({});
  };

  displayTable = (
    array: any[],
    message: String,
    displayText: String,
    itemClick: any
  ) => {
    if (array == null) return <></>;
    if (array.length === 0) return <>{message}</>;

    return (
      <div className="associate-table">
        <Table striped>
          <tbody>
            {array.map((obj: any, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    {obj.firstName}, {obj.lastName}, {obj.interviewScore}
                  </td>
                  <td>
                    <Button onClick={() => itemClick(obj, index)}>
                      {displayText}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };
}
