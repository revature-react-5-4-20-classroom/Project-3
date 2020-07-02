import { Associate } from "../models/Associate"
import React from "react"


export class TestConvertToObject extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
	}

	render()
	{
		let assocAsJson=
			{
				"associateId": 7,
				"firstName": "Cherida",
				"lastName": "Thing",
				"email": "cthing0@jimdo.com",
				"active": true,
				"interviewScore": 73.25
			}

		let assocAsAssoc=convertToObject(assocAsJson,Associate)

		let typeOfJson=typeof(assocAsJson)
		let typeOfAssoc=typeof(assocAsAssoc)

		return (<>
			<h6>Trying to convert json to a valid typescript object</h6>
			typeOfJson={assocAsJson.toString()}<br/>
			{JSON.stringify(assocAsJson)}<br/>
			<br/>
			typeOfAssoc={assocAsAssoc.toString()}<br/>
			{JSON.stringify(assocAsAssoc)}<br/>

		</>)
	}
}

/*
	function(json,class)

	returns an object that is of type class.
*/
export function convertToObject(json:any,clas:any)
{
	const newObj=new clas()

	for(let key in newObj)
	{
		//if(json[key]

		newObj[key]=json[key]
	}

	return newObj
}