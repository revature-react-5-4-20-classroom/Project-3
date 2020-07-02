import moment from 'moment'

export function convertDateToUTC(date?:string) {
    if (date) {
        return moment(date).utc().toDate();
    }else{
        return moment().utc().toDate();
    }
}