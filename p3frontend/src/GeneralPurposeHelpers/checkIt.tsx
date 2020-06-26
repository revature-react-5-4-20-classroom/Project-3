import React from "react";

/*
	checkIt(jsxObject)

	returns:
		the jsxObject if it is not null.
		a jsx null component
*/
export function checkIt(object:any)
{
	return object?object:(<>null</>)
}