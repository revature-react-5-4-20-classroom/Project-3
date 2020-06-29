import React, { Component } from "react"
import { prnt } from "./Prnt"
import { Table } from "reactstrap"
import Calendar from 'react-calendar';

const doPrnt=true

export class TestdateDifferenceWeeks extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={
			dates:[
				{start:new Date(2020,0,1),end:new Date(2020,0,4)},	//display dates. see the week difference.
				{start:new Date(2020,0,1),end:new Date(2020,0,8)},
				{start:new Date(2020,5,19),end:new Date(Date.now())},
			]
		}
	}

	render()
	{
		return(<Table>
			{
				this.state.dates.map((twoDates:any)=>
				{
					return(<><tr>
						{/* <td>{twoDates.start.toDateString()} Day {twoDates.start.getDay()}</td> 
						<td>{twoDates.end.toDateString()} Day {twoDates.end.getDay()}</td>  */}
						<Calendar value={[twoDates.start,twoDates.end]}/>
						<td>Week diff {dateDifferenceWeeks(twoDates.start,twoDates.end)}</td> 
						</tr>
					</>)
				})
			}
		</Table>)
	}
}



/*
	dateDifferenceWeeks(dateObjectSooner,dateObjectLater)

	returns the differentce in dates in weeks. this uses some rounding.
*/
export function dateDifferenceWeeks(dateSooner:Date,dateLater:Date):number
{
	prnt(doPrnt,`dateDifferenceWeeks() has been reached`)
	const msInADay=8.64e+7

	let dayStart=	Math.floor(dateSooner.getTime()/msInADay)
	let dayEnd=		Math.ceil(dateLater.getTime()/msInADay)
	prnt(doPrnt,`dayEnd-dayStart=${dayEnd-dayStart}`)

	// let dayDiff=dayStart-dayEnd
	// let a=Math.round(dateSooner.getDay()/7)
	// let b=Math.round(dateLater.getDay()/7)

	let weekStart=	Math.round(dayStart/7)
	let weekEnd=	Math.round(dayEnd/7)
	//prnt(doPrnt,`weekEnd-weekStart=${weekEnd-weekStart}`)
	//let dayDifference=(dateLater.getTime()-dateSooner.getTime())/
	//let weekRoundDown=Math.floor(dayDifference/7)

	return weekEnd-weekStart
	//return dayDiff
}