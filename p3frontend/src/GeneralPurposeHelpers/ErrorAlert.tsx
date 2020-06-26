import { Alert } from "reactstrap";
import React from "react";


/*
	<ErrorAlert error={errorObject}/>

	Displays interesting data that may be present in the errorObject
*/

export function ErrorAlert(props:any)
{
	if(props.error)
	{
		return(<Alert color="danger">
			{/* {JSON.stringify(props.error)} */}
			{props.error.name}&nbsp;
			{props.error.message}&nbsp;
			{
				props.error.config?
					(<>
						{props.error.config.method}&nbsp;
						{props.error.config.baseURL}{props.error.config.url}
					</>)
				:
					(<></>)
			
			}
		</Alert>)
	}

	return(<></>)
}