export class ClientDemands {
  clientDemandId: number;
  quantity: number;
  deadline: string;
  clientId: number;

  constructor(
    clientDemandId: number,
    quantity: number,
    deadline: string,
    clientId: number
  ) {
    this.clientDemandId = clientDemandId;
    this.quantity = quantity;
    this.deadline = deadline;
    this.clientId = clientId;
  }
}
