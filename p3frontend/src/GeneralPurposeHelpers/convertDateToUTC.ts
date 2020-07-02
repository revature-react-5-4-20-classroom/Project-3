import moment from "moment"


/**
 * This takes an optional parameter and will return a Date object 
 * in UTC. If not given a parameter, it will return the current time 
 * as a Date object
 */
export function convertDateToUTC(date? : string) {
    if (date) {
        return moment(date).utc().toDate();
    }else{
        return moment().utc().toDate();
    }
}


console.log(convertDateToUTC())
