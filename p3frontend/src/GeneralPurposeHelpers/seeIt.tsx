import React from "react";

/*
	seeIt(object)

	returns:
		a react component that is a json version of object
		a jsx null component
*/
export function seeIt(object:any)
{
	return(<>{JSON.stringify(object)}</>)
}