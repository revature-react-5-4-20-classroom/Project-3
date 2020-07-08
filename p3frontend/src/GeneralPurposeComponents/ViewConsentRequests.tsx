import React from "react";
import {
  approveConsentRequest,
  denyConsentRequest,
  getConsentByTrainerId,
  createTrainerBatch,
} from "../api/consent";
import { Consent } from "../models/Consent";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import { PageTitleBar } from "../Components/GenerateBatch/PageTitleBar";
import { trainerGetName } from "../models/Trainer";
import { trackPromise } from 'react-promise-tracker';
import {Spinner} from "../GeneralPurposeComponents/spinner/spinner"

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

    trackPromise(
      approveConsentRequest(consentRequest)
        .then((consentRequests) => {
          this.setState({
          })
        }), "loading-area2"
        
    );
    trackPromise(
      createTrainerBatch(consentRequest.trainer.trainerId, consentRequest.batch.batchId)
        .then((consentRequests) =>{
          this.setState({

          })
        }), "loading-area2"
    );
    
    await approveConsentRequest(consentRequest);
    await createTrainerBatch(consentRequest.trainer.trainerId, consentRequest.batch.batchId)
    this.getConsentRequests();
  };

  decline = async (id: number) => {
    let consentRequest: Consent = this.state.consentRequests[id];
    consentRequest.isApproved = false;

    trackPromise(
      denyConsentRequest(consentRequest)
        .then((consentRequests) => {
          this.setState({
          })
        }), "loading-area2"
    );
    await denyConsentRequest(consentRequest);
   
    this.getConsentRequests();
  };

  


  getConsentRequests = async () =>{
    // trackPromise(
    //   getConsentByTrainerId(4)
    //     .then((consentRequests) => {
    //       this.setState({
    //         consentRequests:consentRequests
    //       })
    //     }), "loading-area2"
    // );
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
        <>
        <Container><PageTitleBar pageTitle={"Consent Requests"}/></Container>
      <h6>There are 0 consent requests to view</h6>
      <div>
        <Spinner area="loading-area2" />
        </div>
      </>
      )
    }

    return (<>
        <Container><PageTitleBar pageTitle={"Consent Requests"}/></Container>
        
        <ListGroup>
          {this.state.consentRequests.map((consent: Consent, i) => {
            //trying to use the same item display everywhere
            return (
              <ListGroupItem key={i}>
                {consent.batch.batchId + ' - ' + consent.batch.curriculum.name + ' - ' + consent.trainer.firstName + ' ' + consent.trainer.lastName + ' '}
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
         <div>
        <Spinner area="loading-area2" />
        </div>
    </>)
    
}

}
