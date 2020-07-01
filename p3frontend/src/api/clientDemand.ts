import { axiosClient } from './axios';
import { ClientDemands } from '../models/ClientDemands';

const buildCliDem = (res: any): ClientDemands => {
  const { clientDemandId, quantity, deadline, clientId } = res;
  return new ClientDemands(clientDemandId, quantity, deadline, clientId);
};

export async function getAllClientDemands(): Promise<ClientDemands[]> {
  try {
    const response = await axiosClient.get('/clientDemand');
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
