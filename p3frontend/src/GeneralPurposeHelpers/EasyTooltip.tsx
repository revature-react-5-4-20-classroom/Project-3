import React from "react";
import { UncontrolledTooltip } from "reactstrap";

/*
	<EasyTooltip target={'anotherComponentId'} displayText='The Text to display when anotherComponent is hovered over' />

	This tooltip may be easier because it checks for null.
	It may be helpful to wrap stuff so it can be upgraded/customized in the future.
*/

interface IPropsEasyTooltip {
  target: string;
  displayText: string;
}

export class EasyTooltip extends React.Component<IPropsEasyTooltip, any> {
  constructor(props: any) {
    super(props);
    //maybe this will need state in the future
  }

  render() {
    if (this.props.displayText) {
      return (
        <>
          <UncontrolledTooltip placement="right" target={this.props.target}>
            {this.props.displayText}
          </UncontrolledTooltip>
        </>
      );
    }
    return <></>;
  }
}
