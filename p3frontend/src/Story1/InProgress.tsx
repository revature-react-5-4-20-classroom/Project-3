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
import { axiosClient } from "../api/axios";
import { cachedDataVersionTag } from "v8";
import { ErrorAlert } from "../GeneralPurposeHelpers/ErrorAlert";

const doPrnt=true//prnt will work

export class InProgress extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={
		programType:'',		//EasyDropdown will set this to its first item during render
		workType:   '',
		viewType:   'Table',
		error:		null,
		batchDisplayData:[],	//holds the batch data formatted for display
		batchPsudoData:[		//psudo server data to look at right now
			{
				id:0,
				name:		'Project 3',
				dateStart:	new Date(2020,5,24),
				dateEnd:	new Date(2020,6,9),
				weekCurrent:0,
				weekRemaining:0,
				skillset:'Fullstack',
				associatesActive:5,
				associatesInactive:6,
				trainer:'N/A',
				location:'Living room',
			},
			{
				id:1,
				name:		'2005 May11 Salesforce',
				dateStart:	new Date(2020,5,1),
				dateEnd:	new Date(2020,5,19),
				weekCurrent:1,
				weekRemaining:9,
				skillset:'JS/React',
				associatesActive:13,
				associatesInactive:2,
				trainer:'Andrew',
				location:'UTA',
			},
			{
				id:2,
				name:		'2006 June29 CodeFirst',
				dateStart:	new Date(2020,10,24),
				dateEnd:	new Date(2020,10,25+7*4),
				weekCurrent:1,
				weekRemaining:9,
				skillset:'C#',
				associatesActive:6,
				associatesInactive:12,
				trainer:'Martin',
				location:'WVU',
			},
		]
		}
	}

	render()
	{
		return(<Container>
				<ErrorAlert error={this.state.error}/>
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
						<EasyDropdown onSelected={this.setViewType}     items={['Calendar','Table']} />
					</Col>
				</Row>
				<br/>
				<br/>
				{	this.state.viewType==='Table'?this.displayTheDataAsATable():this.displayDataAsCalendar()}
				
		</Container>)
	}

	displayTheDataAsATable=()=>
	{
		return(
			<Table bordered>
				<thead>
					<tr>
						<th onClick={()=>this.sortBatches('id')}>id</th>
						<th onClick={()=>this.sortBatches('name')}>name</th>
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
								<td>{batch.name}</td>
								<td>{batch.dateStartText}</td>
								<td>{batch.dateEndText}</td>
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

	displayDataAsCalendar=()=>
	{
		return(
			this.state.batchDisplayData.map((batch:any)=>
			{
				//return(<Row>{batch.dateStart} {batch.dateEnd}</Row>)
				return(<Row>
					<Col sm={4}>
						<Calendar value={[batch.dateStart,batch.dateEnd]}
							defaultActiveStartDate= {new Date(Date.now())}
							calendarType="US"
							/>
					
					</Col>
					<Col>
						<Row><Col sm={3}>id</Col><Col>{batch.id}</Col></Row>
						<Row><Col sm={3}>name</Col><Col>{batch.name}</Col></Row>
						<Row><Col sm={3}>Week current</Col><Col>{batch.weekCurrent}</Col></Row>
						<Row><Col sm={3}>Weeks remaining</Col><Col>{batch.weekRemaining}</Col></Row>
						<Row><Col sm={3}>Skillset</Col><Col>{batch.skillset}</Col></Row>
						<Row><Col sm={3}>Associates Active</Col><Col>{batch.associatesActive}</Col></Row>
						<Row><Col sm={3}>Associates Inactive</Col><Col>{batch.associatesInactive}</Col></Row>
						<Row><Col sm={3}>Trainer</Col><Col>{batch.trainer}</Col></Row>
						<Row><Col sm={3}>Location</Col><Col>{batch.location}</Col></Row>
					</Col>
				</Row>)
			})
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
	convertServerDataToDisplayData=(arrayOfBatches:[])=>
	{
		return arrayOfBatches.map((batch:any)=>
		{
			return{
				id:					batch.id,
				name:				batch.name,
				dateStart:			batch.dateStart,
				dateEnd:			batch.dateEnd,

				dateStartText:		batch.dateStart.toDateString(),//used to display the date
				dateEndText:		batch.dateEnd.toDateString(),

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

	fetchTheBatchData=async()=>
	{
		this.setState({
			batchDisplayData:this.convertServerDataToDisplayData(this.state.batchPsudoData)
		})

		// prnt(doPrnt,`fetchTheBatchData() has been reached`)

		// try
		// {
		// 	let response=await axiosClient.get('/batches')

		// 	prnt(doPrnt,`response=`,response)

		// 	if(response.status!==200)
		// 	{
		// 		this.setState({error:response})
		// 	}
		// 	else
		// 	{
		// 		this.setState({
		// 			batchDisplayData:this.convertServerDataToDisplayData(response.data)
		// 		})
		// 	}
		// }
		// catch(e)
		// {
		// 	this.setState({error:e})
		// }
	}

	setProgramType=(value:string)=>
	{
		//this.fetchTheBatchData()
		this.setState({programType:value})
	}

	setWorkType=(value:string)=>
	{
		//this.fetchTheBatchData()
		this.setState({workType:value})
	}

	setViewType=(value:string)=>
	{
		this.setState({viewType:value})
	}

	componentDidMount()
	{
		this.fetchTheBatchData()
	}
}