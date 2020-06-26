
export class Location {
    locationId : number;
    name : string;

    constructor(locationId : number, name : string) {
        this.locationId = locationId;
        this.name = name;
    }
}

/*
    locationGetName(location)

    returns the full name of the location.
    no-location when location is null
*/
export function locationGetName(loc:Location)
{
    return loc?loc.name:'no-location'
}