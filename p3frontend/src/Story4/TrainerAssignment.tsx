import React from "react";
import { Trainer } from "../models/Trainer";
import { Batch } from "../models/Batch";
import { getBatchById } from "../api/batch";

import { allTheMapStateToProps } from "../redux/reducers";
import { allTheActionMappers } from "../redux/action-mapper";
import { batch, connect } from "react-redux";
import {Alert} from "reactstrap"
import { trackPromise } from 'react-promise-tracker';
import {Spinner} from "../GeneralPurposeComponents/spinner/spinner"


import {
  getAllTrainers,
  createConsentRequest,

  getAllEligibleTrainers,
  createTrainerBatch
} from '../api/consent';

import {
  Col,
  Button,
  ListGroupItem,
  ListGroup,
  Row,
  Container,
} from "reactstrap";
import { assignTrainer } from "../api/batch";
import { PageTitleBar } from "../Components/GenerateBatch/PageTitleBar";
import { smallBtnStyles } from "../Styles/generateBatchStlyes";

interface ITrainerProps {
  currentBatch: Batch; //we must give this component a batch for it to work
  parentTop: any;
}


interface IAssignmentComponentState {
  trainers: Trainer[];
  eligibleTrainers: Trainer[];
  updateArray: Trainer[];
  buttonArray: any[];
  batch: Batch | null;
  assignIsOpen: boolean;
  requestIsOpen: boolean;
}

export class TrainerAssignmentComponent extends React.Component<
  ITrainerProps,
  IAssignmentComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      trainers: [],
      eligibleTrainers: [],
      updateArray: [],
      buttonArray: [],
      batch: null,
      assignIsOpen: false,
      requestIsOpen: false
    };
  }



  // componentDidMount() {
  //   this.getAllTrainers();
  // }
  async componentDidMount() {
    //this.getAllTrainers();

    let allTrainers: Trainer[] = await getAllTrainers();

    

    let batch = await  getBatchById(this.props.currentBatch.batchId);
    
    // this.setState({
    //   trainers:allTrainers
    // })
    // this.sleep(50).then(()=>{
    //   this.getAllEligibleTrainers(2);
    //  });

    let eligibleTrainers : Trainer[] = await getAllEligibleTrainers(this.props.currentBatch.batchId);
    // this.setState({
    //   trainers:allTrainers,
    //   eligibleTrainers:trainers
    // })
    // this.sleep(50).then(()=>{
    //   this.assignEligibility();
    //  });

    let tempButtonArray: any[] = [];
    let eligibleTrainerIds = eligibleTrainers.map((trainer) => {
      return trainer.trainerId;
    });
    // console.log("debugging");
    // console.log(allTrainers);
    // console.log(allEligible);

    let i = 0;

    allTrainers.forEach((trainer) => {
      console.log(eligibleTrainerIds.includes(trainer.trainerId));
      console.log(eligibleTrainerIds);
      if (eligibleTrainerIds.includes(trainer.trainerId)) {
        trainer.isEligible = true;
      } else {
        trainer.isEligible = false;
      }
      // this.sleep(50).then(()=>{
      //   let newButton = this.getButton(trainer, i , trainer.trainerId);
      //   tempButtonArray.push(newButton);

      // });
      i = i + 1;
    });
    this.setState({
      trainers: allTrainers,
      eligibleTrainers: eligibleTrainers,
      batch: batch,
    });
  }

  sleep = (milliseconds: any) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  // setUserid =(id: any) => {
  //     this.setState({
  //         userid: id.currentTarget.value,
  //       })
  //     this.sleep(50).then(() => {
  //         this.updateReimbursements();
  //       })

  // }

  // assign = async (trainer: Trainer, batchId: number) => {
  //   await assignTrainer(trainer.trainerId, batchId);
  // };
  assign = async(trainerId:number, batchId:number) =>{

    trackPromise(
      createTrainerBatch(trainerId,batchId)
        .then((consentRequests) =>{
          this.setState({
              assignIsOpen:true
          })
        }), "loading-area"
    );
      //await assignTrainer(trainerId, batchId);
      //let success: boolean|undefined = await createTrainerBatch(trainerId, batchId);

      // if(success){
      //   this.setState({
      //     assignIsOpen:true
      //   })
      // }
      
      
  }
  // request = async (trainer: Trainer, batchId: number) => {
  //   await createConsentRequest(trainer.trainerId, null, batchId);
  // };
  request = async(trainer:Trainer, batchId:number)=>{

    trackPromise(
      createConsentRequest(trainer.trainerId, null, batchId)
        .then((consentRequests) =>{
          this.setState({
            requestIsOpen:true
          })
        }),"loading-area"
    );
      
      //let success:boolean|undefined = await createConsentRequest(trainer.trainerId, null, batchId);

      // if(success){
      //   this.setState({
      //     requestIsOpen:true
      //   })
      // }
      
  }


  // getButton = (trainer: Trainer, i: number) => {
  //   let jsxElement = (
  //     <>
  //       <h4>test</h4>
  //     </>
  //   );
  //   if (trainer.isEligible) {
  //     jsxElement = (
  //       <Button
  //         color='primary'
  //         id={i.toString()}
  //         onClick={() => this.assign(trainer.trainerId, 1)}
  //       >
  //         Assign
  //       </Button>
  //     );
  //   } else {
  //     jsxElement = (
  //       <Button
  //         color='primary'
  //         id={i.toString()}
  //         onClick={() => this.request(trainer.trainerId, 1)}
  //       >
  //         Request Consent
  //       </Button>
  //     );
  //   }
  //   console.log(jsxElement);

  //   return jsxElement;
  // };
  getButton = (trainer:Trainer, i:number, trainerId:number)  =>{
    
    let jsxElement =(<><h4>test</h4></>);
    if(trainer.isEligible){
      return <Button color="primary" style={smallBtnStyles} id={i.toString()} onClick={()=>this.assign(trainerId, this.props.currentBatch.batchId) }>Assign</Button>
    }else{
      return <Button color="primary" style={smallBtnStyles} id={i.toString()} onClick={()=>this.request(trainer, this.props.currentBatch.batchId)}>Request Consent</Button>
    }
  };

  // let get_All_Trainers = async () => {

  //   let allTrainers : Trainer[] = await getAllTrainers();
  //   console.log(allTrainers);
  //   this.setState({
  //     trainers:allTrainers
  //   })
  //   this.sleep(50).then(()=>{
  //     this.getAllEligibleTrainers(2);
  //    });
  // }

  // let getAllEligibleTrainers = async(batchId:number) => {
  //   let trainers : Trainer[] = await getAllEligibleTrainers(batchId);
  //   this.setState({
  //     eligibleTrainers:trainers
  //   })
  //   this.sleep(50).then(()=>{
  //     this.assignEligibility();
  //    });
  // }

  // let assignEligibility = () =>{
  //   let allTrainers : Trainer[] = this.state.trainers;
  //   let allEligible: Trainer[] = this.state.eligibleTrainers;
  //   let tempButtonArray:any[] = [];
  //   let eligibleTrainerIds = allEligible.map((trainer) =>{
  //     return trainer.trainerId;
  //   })
  //   let updateArray:Trainer[] = [];
  //   console.log("debugging");
  //   console.log(allTrainers);
  //   console.log(allEligible);

  //   let i = 0;

  //   allTrainers.forEach(trainer =>{
  //     console.log(eligibleTrainerIds.includes(trainer.trainerId));
  //     if(eligibleTrainerIds.includes(trainer.trainerId)){

  //       trainer.isEligible = true;
  //       updateArray.push(trainer);
  //     } else{
  //       trainer.isEligible = false;
  //     }
  //     this.sleep(50).then(()=>{
  //       let newButton = this.getButton(trainer, i , trainer.trainerId);
  //       tempButtonArray.push(newButton);
  //       console.log(tempButtonArray);
  //     });
  //      i = i + 1;
  //   })
  //   this.setState({
  //     trainers:allTrainers,
  //     buttonArray:tempButtonArray
  //   })
  //   console.log(this.state.buttonArray);

  // }

  //   let allTrainers: Trainer[] = await getAllTrainers();
  //   allTrainers.forEach(async (trainer) => {
  //     let trainerId = trainer.trainerId;
  //     let isEligible: boolean = await getEligibility(trainerId, 2);
  //     trainer.isEligible = isEligible;
  //   });

  //   console.log(allTrainers);
  //   this.setState({
  //     trainers: allTrainers,
  //   });
  // };
  toggleAssign(){
    this.setState({
      assignIsOpen: !this.state.assignIsOpen
    })
  }

  toggleRequest(){
    this.setState({
      requestIsOpen: !this.state.requestIsOpen
    })
  }

  render() {
    console.log(this.state.trainers);
    let buttonArray: any[] = [];
    let trainers = this.state.trainers;
    let i = 0;
    trainers.forEach((trainer) => {
      let button = this.getButton(trainer, i, trainer.trainerId);
      buttonArray.push(button);
    });
    return (
      <>
        <div>
        <Spinner area="loading-area" />
        </div>
        <Alert color="primary" isOpen={this.state.assignIsOpen} toggle={this.toggleAssign.bind(this)}>Trainer Assigned!</Alert>
        <Alert color="primary" isOpen={this.state.requestIsOpen} toggle={this.toggleRequest.bind(this)}>Trainer Requested!</Alert>
        <Container><PageTitleBar pageTitle={"Trainer Assignment"}/></Container>
        <ListGroup>
          {
              this.state.trainers.length==0?
                <>There are no trainers</>
              :
                this.state.trainers.map((trainer: Trainer, i) => 
                {
                    //trying to use the same item display everywhere
                    return (
                      <ListGroupItem key={i}>
                        <Row>
                          <Col>
                            <Row>
                              <Col>{trainer.firstName + ' ' + trainer.lastName}</Col>
                            </Row>
                            <Row>
                              <Col>{buttonArray[i]}</Col>
                            </Row>
                            <Row>{/* <Col>{this.getButton(trainer, i)}</Col> */}</Row>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    )
                  })
          }
        </ListGroup>
      </>
    );
  }
}

export const TrainerAssignmentRedux = connect(
  allTheMapStateToProps,
  allTheActionMappers
)(TrainerAssignmentComponent);
