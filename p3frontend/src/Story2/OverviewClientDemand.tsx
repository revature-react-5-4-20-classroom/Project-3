import React from "react";
import { Container } from "reactstrap";
import { EasyDropdown } from "../GeneralPurposeHelpers/EasyDropdown";


export class OverviewClientDemand extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={
			curriculaTrack:''	//EasyDropdown will set this to the first item on component mount
		}
	}

	render()
	{
		return(<Container>
				<h6>Story 2. "Overview"</h6><br/>
				<p>Given that there is a Client Demand for engineers with a given Curricula Track
When I navigate to the `Overview` view
Then I see graphics depicting the Quantity Demanded vs Quantity Supplied by Curricula Track (Current, in 1 month, in 3 months)</p><br/>
				<b>Curricula Track</b>
			<EasyDropdown onSelected={this.setCurriculaTrack}  items={['CF','ROCP',  'Standard', 'Spark']}/>
		</Container>)
	}



	setCurriculaTrack=(ct:string)=>
	{
		this.setState({curriculaTrack:ct})
	}
}