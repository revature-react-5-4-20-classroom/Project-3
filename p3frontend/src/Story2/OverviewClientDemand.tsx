import React from "react";
import { Container, Row, Col } from "reactstrap";
import { EasyDropdown } from "../GeneralPurposeHelpers/EasyDropdown";
import { ColumnChartTest } from "./colGraphComponent";


export class OverviewClientDemand extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={
			curriculaTrack:'',	//EasyDropdown will set this to the first item on component mount
			when:'',
		}
	}

	render()
	{
		return(<Container>
				<h6>Story 2. "Overview"</h6><br/>
				<p>Given that there is a Client Demand for engineers with a given Curricula Track
When I navigate to the `Overview` view
Then I see graphics depicting the Quantity Demanded vs Quantity Supplied by Curricula Track (Current, in 1 month, in 3 months)</p><br/>
				
			<Row>
				<Col>
					<b>Curricula Track</b>
					<EasyDropdown onSelected={this.setCurriculaTrack}  items={['CF','ROCP',  'Standard', 'Spark']}/>
				</Col>
				<Col>
					<b>When</b>
					<EasyDropdown onSelected={this.setWhen}  items={['Current','1 Month','3 Months']}/>
				</Col>
			</Row>
			<Row>
				<Col>
					<ColumnChartTest/>
				</Col>
			</Row>
		</Container>)
	}

	setWhen=(w:string)=>
	{
		this.setState({when:w})
	}

	setCurriculaTrack=(ct:string)=>
	{
		this.setState({curriculaTrack:ct})
	}
}