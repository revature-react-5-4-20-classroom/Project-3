/*
	don't ask me why I have to convert this to json and then back to an object again.
	I do not know why.
*/

import jsonWithQuotes from "./DataBatches.json";

let jsonAsAString = JSON.stringify(jsonWithQuotes);

export const pseudoDataResponse = JSON.parse(jsonAsAString);
