import { axiosClient } from './axios';
import { ClientDemands } from '../models/ClientDemands';
import moment from 'moment';

const buildCliDem = (res: any): ClientDemands => {
  const {
    clientDemandId,
    quantity,
    deadline,
    client,
    clientDemandSkillset,
  } = res;
  return new ClientDemands(
    clientDemandId,
    quantity,
    deadline,
    client.clientId,
    clientDemandSkillset.skillSetName
  );
};

export async function getAllClientDemands(): Promise<ClientDemands[]> {
  try {
    const response = await axiosClient.get('/client-demand');
    const demandArr: ClientDemands[] = response.data.map(
      (cl: ClientDemands) => {
        return buildCliDem(cl);
      }
    );
    return demandArr;
  } catch (error) {
    console.log(`Failed to get all client demands: `, error);
    throw error;
  }
}

export async function getAllCurrentClientDemands(): Promise<ClientDemands[]> {
  let today = moment().format('YYYY-MM-DD');
  try {
    const response = await axiosClient.get(`/client-demand/${today}`);
    const demandArr: ClientDemands[] = response.data.map(
      (cl: ClientDemands) => {
        return buildCliDem(cl);
      }
    );
    return demandArr;
  } catch (error) {
    console.log(`Failed to get all current client demands: `, error);
    throw error;
  }
}
