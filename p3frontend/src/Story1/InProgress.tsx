import React from "react";
//npm install react-calendar
//npm i @types/react-calendar
import Calendar from 'react-calendar';
import './Calendar.css';
import './Table.css';
import { Row, Col, Table, Container } from "reactstrap";
import { EasyDropdown } from "../GeneralPurposeHelpers/EasyDropdown";
import { prnt } from "../GeneralPurposeHelpers/Prnt";
import { dateDifferenceWeeks } from "../GeneralPurposeHelpers/dateDifferenceWeeks";
import { TimelineComponent } from "./Timeline";

const doPrnt=true//prnt will work

export class InProgress extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={
		programType:'',//EasyDropdown will set this to its first item during component mount
		workType:   '',
		viewType:   '',
		batchServerData:[	//holds the data fetched from the server. psudo data right now
			{
				id:0,
				dateStart:	new Date(2020,1,0),
				dateEnd:	new Date(2020,1,0+7*2),
				weekCurrent:0,
				weekRemaining:0,
				skillset:'Java',
				associatesActive:5,
				associatesInactive:6,
				trainer:'Adam',
				location:'Reston VA',
			},
			{
				id:1,
				dateStart:	new Date(2020,4,19),
				dateEnd:	new Date(2020,5,19+7*3),
				weekCurrent:1,
				weekRemaining:9,
				skillset:'JS/React',
				associatesActive:13,
				associatesInactive:2,
				trainer:'Andrew',
				location:'Reston VA',
			},
			{
				id:2,
				dateStart:	new Date(2020,10,24),
				dateEnd:	new Date(2020,10,25+7*4),
				weekCurrent:1,
				weekRemaining:9,
				skillset:'C#',
				associatesActive:6,
				associatesInactive:12,
				trainer:'Martin',
				location:'Washington DC',
			},
		],

		batchDisplayData:[]	//holds the batch data formatted for display
		}
	}

	render()
	{
		return(<Container>
				<h6>Story 1. "In Progress"</h6><br/>
				<p>Given that batches are currently in operation
When I navigate to the 'In Progress' view
And I optionally select Program Type (ROCP, CF, Standard, Spark) or Curricula or client
Then I see current week, weeks remaining, number of active/inactive associates, trainer, location filtered by criteria
And this data is shown as a table and a Calendar view</p><br/>
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
				<br/>
				{	this.state.viewType==='Table'?this.displayTheDataAsATable():<TimelineComponent batches={this.state.batchDisplayData}/>	}
				
		</Container>)
	}

	displayTheDataAsATable=()=>
	{
		return(
			<Table bordered>
				<thead>
					<tr>
						<th onClick={()=>this.sortBatches('id')}>id</th>
						<th onClick={()=>this.sortBatches('dateSortStart')}>Start Date</th>
						<th onClick={()=>this.sortBatches('dateSortEnd')}>End Date</th>
						<th onClick={()=>this.sortBatches('weekCurrent')}>Current Week</th>
						<th onClick={()=>this.sortBatches('weekRemaining')}>Remaining Weeks</th>
						<th onClick={()=>this.sortBatches('skillset')}>Skillset</th>
						<th onClick={()=>this.sortBatches('associatesActive')}>Active Associates</th>
						<th onClick={()=>this.sortBatches('associatesInactive')}>Inactive Associates</th>
						<th onClick={()=>this.sortBatches('trainer')}>Trainer</th>
						<th onClick={()=>this.sortBatches('location')}>Location</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.batchDisplayData.map((batch:any)=>
						{
							return(
							<tr>
								<td>{batch.id}</td>
								<td>{batch.dateStart}</td>
								<td>{batch.dateEnd}</td>
								<td>{batch.weekCurrent}</td>
								<td>{batch.weekRemaining}</td>
								<td>{batch.skillset}</td>
								<td>{batch.associatesActive}</td>
								<td>{batch.associatesInactive}</td>
								<td>{batch.trainer}</td>
								<td>{batch.location}</td>
							</tr>)
						})
					}
				</tbody>
			</Table>
		)
	}

	//sorts batchDisplayData using the given object property. batch['id']
	//order is ascending
	sortBatches=(propertyAsKey:any)=>
	{
		prnt(doPrnt,`ViewAtAGlance sortBatches() has been reached`)

		this.state.batchDisplayData.sort((a:any,b:any)=>
		{
			//return Math.sign(a[propertyAsKey]-b[propertyAsKey])

			//compares numbers and strings. does not do date objects
			if(a[propertyAsKey]<b[propertyAsKey]){return -1}
			return 1
		})

		prnt(doPrnt,`this.state.batchDisplayData=`,this.state.batchDisplayData)

		this.setState({})//cause re-render
	}

	//returns an array of batches that are made pretty for displaying
	convertToDisplayData=(arrayOfBatches:[])=>
	{
		return arrayOfBatches.map((batch:any)=>
		{
			return{
				id:					batch.id,
				dateStart:			batch.dateStart.toDateString(),
				dateEnd:			batch.dateEnd.toDateString(),
				dateSortStart:		batch.dateStart.getTime(),//used to sort the dates
				dateSortEnd:		batch.dateEnd.getTime(),
				weekCurrent:		dateDifferenceWeeks(batch.dateStart,new Date(Date.now())),
				weekRemaining:		dateDifferenceWeeks(batch.dateStart,batch.dateEnd),
				skillset:			batch.skillset,
				associatesActive:	batch.associatesActive,
				associatesInactive:	batch.associatesInactive,
				trainer:			batch.trainer,
				location:			batch.location,
			}
		})
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
	fetchTheBatchData=()=>
	{
		//fetch the batch data

		//then convert it to look pretty
		this.setState({
			batchDisplayData:this.convertToDisplayData(this.state.batchServerData)
		})
	}

	setProgramType=(pt:string)=>
	{
		this.fetchTheBatchData()
		this.setState({programType:pt})
	}

	setWorkType=(wt:string)=>
	{
		this.fetchTheBatchData()
		this.setState({workType:wt})
	}

	setViewType=(vt:string)=>
	{
		this.setState({viewType:vt})
	}

	componentDidMount()
	{
		this.fetchTheBatchData()
	}
}