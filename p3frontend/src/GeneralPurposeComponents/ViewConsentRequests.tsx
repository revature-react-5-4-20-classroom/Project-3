import React from "react";
import {
  approveConsentRequest,
  denyConsentRequest,
  getConsentByTrainerId,
  createTrainerBatch,
} from "../api/consent";
import { Consent } from "../models/Consent";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

interface IViewConsentRequestsState {
  consentRequests: Consent[];
}
export class ViewConsentRequests extends React.Component<
  any,
  IViewConsentRequestsState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      consentRequests: [],
    };
  }

  componentDidMount() {
    this.getConsentRequests();
  }

  accept = async (id: number) => {
    let consentRequest: Consent = this.state.consentRequests[id];
    consentRequest.isApproved = true;
    await approveConsentRequest(consentRequest);
    await createTrainerBatch(consentRequest.trainer.trainerId, consentRequest.batch.batchId)
    this.getConsentRequests();
  };

  decline = async (id: number) => {
    let consentRequest: Consent = this.state.consentRequests[id];
    consentRequest.isApproved = false;
    await denyConsentRequest(consentRequest);
   
    this.getConsentRequests();
  };

  


  getConsentRequests = async () =>{
    let consentRequests : Consent[] = await getConsentByTrainerId(4);
    console.log(consentRequests);
    this.setState({
      consentRequests: consentRequests,
    });

  }




    
  render() {
    if(this.state.consentRequests.length==0)
    {
      return (
      <h6>There are 0 consent requests to view</h6>)
    }

    return (<>
      <h6>View Consent Requests</h6>

        <ListGroup>
          {this.state.consentRequests.map((consent: Consent, i) => {
            //trying to use the same item display everywhere
            return (
              <ListGroupItem key={i}>
                {consent.batch.batchId}
                <Button
                  color="primary"
                  id={i.toString()}
                  onClick={() => this.accept(i)}
                >
                  Accept
                </Button>
                <Button
                  color="primary"
                  id={i.toString()}
                  onClick={() => this.decline(i)}
                >
                  Decline
                </Button>
              </ListGroupItem>
              )})}
          
          
         </ListGroup>
    </>)
    
}

}
