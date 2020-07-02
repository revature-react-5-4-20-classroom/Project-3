import React from "react";
import { Table, Button, Row, Col } from "reactstrap";

/*
	<DualTables 
		arrayLeft=		{anArray} 	
		headerLeft=		"Displayed above the left table"	
		messageLeft=	"displayed on left when array is empty"

		arrayRight=		{anotherArray}
		headerRight=	"Displayed above the right table"	
		messageRight=	"displayed on right when array is empty"
    
    onMoveFunc={aFunction}/>

	Displays two tables next to each other. 
	Items may be added to the right table.
	Items may be removed and placed back in the left table.
  When an item is moved, onMoveFunc is called on the item.
  onMoveFunc(item)

	headerLeft			|		headerRight
	___________________________________
	messageLeft			|		messageRight
						|
	arrayLeft[0](ADD)	|		arrayRight[0](REMOVE)
	arrayLeft[1](ADD)	|		arrayRight[1](REMOVE)
*/
export class DualTables extends React.Component<any, any> {
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
    this.props.arrayRight.push(item);
    this.props.arrayLeft.splice(i, 1);
    this.props.onMoveFunc(item)
    this.setState({});
  };

  moveToLeftTable = (item: any, i: number) => {
    this.props.arrayRight.splice(i, 1);
    this.props.arrayLeft.push(item);
    this.props.onMoveFunc(item)
    this.setState({});
  };

  displayTable = (
    array: any[],
    message: String,
    displayText: String,
    itemClick: any
  ) => {
    if(array==null) return(<></>)
    if (array.length === 0) return(<>{message}</>)

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
