import  {Associate} from '../models/Associate'
import FailedRequestException from '../exceptions/FailedRequestException';
import FailedUpdateException from '../exceptions/FailedUpdateException';
import { axiosClient } from './axios';
import FailedUpdate from '../exceptions/FailedUpdateException';


export async function getAllAssociates() : Promise <Associate[]> {
try {
  
  let response = await axiosClient.get('/associates');


  return response.data.map((a : Associate) => {

    let {associateId, firstName, lastName, email, active, interviewScore, batch} = a;

    return new Associate (associateId, firstName, lastName, email, active, interviewScore, batch);
  
  });} catch (e)  {
    throw new FailedRequestException(`The request has failed.`)
  }
}

export async function updateAssociate(obj: Associate) : Promise <Associate> {
try  {

  let response = await axiosClient.patch ('/associates');

  return response.data.map((a: Associate) => {
    let {associateId, firstName, lastName, email, active, interviewScore, batch} = a;
  });} catch (e) {
    throw new FailedUpdateException (`The update has failed`);
}
}
