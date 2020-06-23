import React from "react";
import { Row, Col, Table, Container } from "reactstrap";
import { EasyDropdown } from "../GeneralPurposeHelpers/EasyDropdown";

export class ViewAtAGlance extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={
		programType:'',
		workType:   '',
		viewType:   '',
		}
	}

	/*
		GET
		requestBody
		{
			programType:  'ROCP'
			workType:     'Curricula'
		}

		responseBody
		[
			{
				currentWeek:		0,
				weeksRemaining:		10,
				activeAssociates:	16,
				inactiveAssociates:	4,
				trainer:			'Adam',
				location:			'Reston'
			}
		]
	*/
	differentName=()=>
	{
		return 0
	}

	setProgramType=(pt:string)=>
	{
		this.differentName()
		this.setState({programType:pt})
	}

	setWorkType=(wt:string)=>
	{
		this.differentName()
		this.setState({workType:wt})
	}

	setViewType=(vt:string)=>
	{
		this.setState({viewType:vt})
	}

	render()
	{
		return(<Container>
				<h6>Story 1. "In Progress view" Batches at a glance</h6><br/>
				<Row>
					<Col>
						<b>program type</b>
						<EasyDropdown onSelected={this.setProgramType}  items={['CF','ROCP',  'Standard', 'Spark']}/>
					</Col>

					<Col>
						<b>work type</b>
						<EasyDropdown onSelected={this.setWorkType}     items={['Curricula', 'Client']} />
					</Col>

					<Col>
						<b>view type:</b>
						<EasyDropdown onSelected={this.setViewType}     items={['Table','Calendar']} />
					</Col>
				</Row>
				<br/>
				{/* <b>programType:</b>
				<EasyDropdown onSelected={this.setProgramType}  items={['CF','ROCP',  'Standard', 'Spark']}/>

				<b>workType:</b>
				<EasyDropdown onSelected={this.setWorkType}     items={['Curricula', 'Client']}/>

				<b>viewType:</b>  
				<EasyDropdown onSelected={this.setViewType}     items={['Table','Calendar']}/> */}

				<Table bordered>
				<thead>
					<tr>
						<th>Current Week</th>
						<th>Remaining Weeks</th>
						<th>Active Associates</th>
						<th>Inactive Associates</th>
						<th>Trainer</th>
						<th>Location</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>10</td>
						<td>16</td>
						<td>4</td>
						<td>Adam</td>
						<td>Reston VA</td>
					</tr>
					<tr>
						<td>1</td>
						<td>10</td>
						<td>16</td>
						<td>4</td>
						<td>Andrew</td>
						<td>Reston VA</td>
					</tr>
					<tr>
						<td>8</td>
						<td>2</td>
						<td>10</td>
						<td>8</td>
						<td>Alex</td>
						<td>Reston VA</td>
					</tr>
				</tbody>
				</Table>
		</Container>)
	}
}