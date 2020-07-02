import React, { ComponentElement } from "react";
import { Trainer } from "../models/Trainer";

import {
  getAllTrainers,
  createConsentRequest,

  getAllEligibleTrainers
} from '../api/consent';

import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  Toast,
  ToastHeader,
  ToastBody,
  ListGroupItem,
  ListGroup,
  Row,
} from "reactstrap";
import { Consent } from "../models/Consent";
import { assignTrainer } from "../api/batch";

interface IAssignmentComponentState {
  trainers: Trainer[];
  eligibleTrainers: Trainer[];
  updateArray: Trainer[];
  buttonArray: any[];
}

export class TrainerAssignmentComponent extends React.Component<
  any,
  IAssignmentComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      trainers: [],
      eligibleTrainers: [],
      updateArray: [],
      buttonArray: [],
    };
  }


  // componentDidMount() {
  //   this.getAllTrainers();
  // }
  async componentDidMount(){
     
    //this.getAllTrainers();
    

    let allTrainers : Trainer[] = await getAllTrainers();
    
    // this.setState({
    //   trainers:allTrainers
    // })
    // this.sleep(50).then(()=>{
    //   this.getAllEligibleTrainers(2);
    //  });

    let eligibleTrainers : Trainer[] = await getAllEligibleTrainers(2);
    // this.setState({
    //   trainers:allTrainers,
    //   eligibleTrainers:trainers
    // })
    // this.sleep(50).then(()=>{
    //   this.assignEligibility();
    //  });
    
  
    let tempButtonArray:any[] = [];
    let eligibleTrainerIds = eligibleTrainers.map((trainer) =>{
      return trainer.trainerId;
    })
    // console.log("debugging");
    // console.log(allTrainers);
    // console.log(allEligible);
    
    let i = 0;
    
    allTrainers.forEach(trainer =>{
      console.log(eligibleTrainerIds.includes(trainer.trainerId));
      console.log(eligibleTrainerIds);
      if(eligibleTrainerIds.includes(trainer.trainerId)){
        trainer.isEligible = true;
      } else{
        trainer.isEligible = false;
      }
      // this.sleep(50).then(()=>{
      //   let newButton = this.getButton(trainer, i , trainer.trainerId);
      //   tempButtonArray.push(newButton);
        
      // });
       i = i + 1;
    })
    this.setState({
      trainers:allTrainers,
      eligibleTrainers:eligibleTrainers
    })
   

    
  }


sleep = (milliseconds : any) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
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
      await assignTrainer(trainerId, 8);
  }
  // request = async (trainer: Trainer, batchId: number) => {
  //   await createConsentRequest(trainer.trainerId, null, batchId);
  // };
  request = async(trainerId:number, batchId:number)=>{
      
      await createConsentRequest(trainerId, null, 8);
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
      return <Button color="primary" id={i.toString()} onClick={()=>this.assign(trainerId, 8) }>Assign</Button>
    }else{
      return <Button color="primary" id={i.toString()} onClick={()=>this.request(trainerId, 8)}>Request Consent</Button>
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
  

  render() {
    console.log(this.state.trainers)
    let buttonArray:any[] = []
    let trainers = this.state.trainers;
    let i =0;
    trainers.forEach(trainer=>{
        let button = this.getButton(trainer, i, trainer.trainerId);
        buttonArray.push(button);
    })
    return (
      <>
        <h6>Trainer assignment component</h6>
        <ListGroup>
          {this.state.trainers.map((trainer: Trainer, i) => {
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
            );
          })}
        </ListGroup>
      </>
    );
  }
}
