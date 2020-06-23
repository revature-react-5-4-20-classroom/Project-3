import React from "react";
//npm install react-calendar
//npm i @types/react-calendar
import Calendar from 'react-calendar';
import './Calendar.css';
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
		batchName:	'Virginia Titans', //might want a batch model which is a copy of the batch on the backend
		}
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
				<b>batchName</b> {this.state.batchName}
				<br/>
				<br/>
				{	this.state.viewType==='Table'?this.displayTheDataAsATable():<Calendar/>	}
				
		</Container>)
	}

	displayTheDataAsATable=()=>
	{
		return(
			<Table bordered>
				<thead>
					<tr>
						<th>Start Date</th>
						<th>Start End</th>
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
						<td>6-23-20</td>
						<td>7-23-20</td>
						<td>1</td>
						<td>10</td>
						<td>16</td>
						<td>4</td>
						<td>Adam</td>
						<td>Reston VA</td>
					</tr>
					<tr>
						<td>6-23-20</td>
						<td>8-23-20</td>
						<td>1</td>
						<td>10</td>
						<td>16</td>
						<td>4</td>
						<td>Andrew</td>
						<td>Reston VA</td>
					</tr>
					<tr>
						<td>6-23-20</td>
						<td>7-30-20</td>
						<td>8</td>
						<td>2</td>
						<td>10</td>
						<td>8</td>
						<td>Alex</td>
						<td>Reston VA</td>
					</tr>
				</tbody>
			</Table>
		)
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
				batchName:			'The Mavericks',
				currentWeek:		0,
				weeksRemaining:		10,
				activeAssociates:	16,
				inactiveAssociates:	4,
				trainer:			'Adam',
				location:			'Reston'
			}
		]
	*/
	fetchTheDatas=()=>
	{
		return 0
	}

	setProgramType=(pt:string)=>
	{
		this.fetchTheDatas()
		this.setState({programType:pt})
	}

	setWorkType=(wt:string)=>
	{
		this.fetchTheDatas()
		this.setState({workType:wt})
	}

	setViewType=(vt:string)=>
	{
		this.setState({viewType:vt})
	}
}