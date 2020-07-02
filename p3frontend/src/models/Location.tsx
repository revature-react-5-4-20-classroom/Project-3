export class Location {
  locationId: number;
  locationName: string; //<- server gives me this and not 'name'

  constructor(locationId: number, locationName: string) {
    this.locationId = locationId;
    this.locationName = locationName;
  }
}

/*
    locationGetName(location)

    returns the full name of the location.
    no-location when location is null
*/
export function locationGetName(loc: any) {
  //could not set to Location data type
  return loc ? loc.locationName : "no-location";
}
