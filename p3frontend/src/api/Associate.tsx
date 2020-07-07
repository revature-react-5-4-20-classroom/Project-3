import { Associate } from '../models/Associate';
import { FailedRequestException } from '../exceptions/FailedRequestException';
import { FailedUpdateException } from '../exceptions/FailedUpdateException';
import { axiosClient } from './axios';
// import FailedUpdate from '../exceptions/FailedUpdateException';

export async function getAllAssociates(): Promise<Associate[]> {
  try {
    let response = await axiosClient.get('/associates');

    return response.data.map((a: Associate) => {
      let {
        associateId,
        firstName,
        lastName,
        email,
        active,
        interviewScore,
        batchId
      } = a;

      return new Associate(
        associateId,
        firstName,
        lastName,
        email,
        active,
        interviewScore,
        batchId
      );
    });
  } catch (e) {
    throw new FailedRequestException(`The request has failed.`);
  }
}

// export async function getActiveAssociates(): Promise<Associate[]> {
//   try {
//     let response = await axiosClient.get('/associates/get-active');
//     return response.data.map((a: Associate) => {
//       let {
//         associateId,
//         firstName,
//         lastName,
//         email,
//         active,
//         interviewScore,
//         batchId,
//       } = a;

//       return new Associate(
//         associateId,
//         firstName,
//         lastName,
//         email,
//         active,
//         interviewScore,
//         batchId
//       );
//     });
//   } catch (error) {
//     throw new FailedRequestException('Failed to fetch active associates');
//   }
// }

export async function updateAssociate(obj: Associate) {
  try {
    const response = await axiosClient.patch('/associates', obj);
  } catch (e) {
    console.log('failed to assign associate to new batch', e.message);
    //throw e;//we do not throw. we put the error into a nice alert component
  }
}

/*
    associatesGetActive(arrayOfAssociates,boolFindActive)

    returns an array of associates that match boolFindActive.
    when boolFindActive is true, active associates will be returned
    when boolFindActive is false, inactive associates will be returned
*/
export function associatesGetActive(
  associates: Associate[],
  boolFindActive: boolean
) {
  return associates.filter((associate: Associate) => {
    return associate.active === boolFindActive;
  });
}

/*
    associatesGetActiveTotal(arrayOfAssociates,boolFindActive)

    when boolFindActive is true;  returns the number of active associates
    when boolFindActive is false; returns the number of IN-active associates
*/
export function associatesGetActiveTotal(
  associates: Associate[],
  boolFindActive: boolean
) {
  return associatesGetActive(associates, boolFindActive).length;
}

/*
  returns the active associates from the backend
*/
export async function getActiveAssociates(): Promise<Associate[]> {
  try {
    let response = await axiosClient.get('/associates/get-active');
    return response.data;
  } catch (error) {
    throw new FailedRequestException('Failed to fetch active associates');
  }
}
