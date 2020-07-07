export class ClientDemands {
  clientDemandId: number;
  quantity: number;
  deadline: string;
  clientId: number;
  skillsetName: string;

  constructor(
    clientDemandId: number,
    quantity: number,
    deadline: string,
    clientId: number,
    skillsetName: string
  ) {
    this.clientDemandId = clientDemandId;
    this.quantity = quantity;
    this.deadline = deadline;
    this.clientId = clientId;
    this.skillsetName = skillsetName;
  }
}
