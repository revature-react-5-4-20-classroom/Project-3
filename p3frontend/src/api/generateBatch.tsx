import axios, { AxiosResponse } from "axios";
import { Associate } from "../models/Associate";
// import { AssociateList } from '../Components/GenerateBatch/associateList';
export const axiosClient = axios.create({
  baseURL: "http://localhost:1111",
  withCredentials: false, // we should probably change this later
});




export async function getgeneratedBatch(
  interviewScore: number,
  quantity: number
): Promise<Associate[]> {
  const response = await axiosClient.get(
    "/datagetter/" + interviewScore + "/" + quantity
  );
  return response.data.map((associatesObj: any) => {
    // const pId=commentObj.post.postId;
    // const uId= commentObj.author.userId;
    const {
      associateId,
      firstName,
      lastName,
      email,
      active,
      interviewScore,
      assignedBatchId,
    } = associatesObj;
    // console.log('COMMENTOBJ ', commentObj);
    // console.log("fjjftktt",response);
    
    return new Associate(
      associateId,
      firstName,
      lastName,
      email,
      active,
      interviewScore,
      assignedBatchId
    );
  });
}
