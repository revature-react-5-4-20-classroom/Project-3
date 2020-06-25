
import React from "react";
import Associate from '../models/Associate';
import AssociateDropDown from './AssociateDropDown'
import AssociateBatchTable from './AssociateBatchTable'
import {ButtonToggle, Input, Label} from 'reactstrap';
import {getAllAssociates} from '../api/Associate'



export default class App extends React.Component<any, any> {

  constructor(props: any) {

    super(props);

    this.state = {

      currentBatchNumber: Number,
      currentConfirmState: Boolean,
      
    };

  }



  setBatchNumber = (changeEvent: any) => {



    this.setState({



      currentBatchNumber: parseInt(changeEvent.currentTarget.value, 10),



    });



  };

  setConfirm = (changeEvent: any) => {



    this.setState({



      currentConfirmState: parseInt(changeEvent.currentTarget.value, 10),



    });



  };

  updateAssignedBatchNumber = (a: Associate) => {
    a.assignedBatchId = this.state.currentBatchNumber;
  }

 
  removeAssociateFromBatch = ( a: Associate) => {
    a.assignedBatchId = 0; 
  }
  

  render() {
 
    return (

      <div>
              <Label for="batchNumber">Batch Number</Label>

              <Input

                onchange={() => void this.setBatchNumber}

                value={this.state.currentBatchNumber}

                type="text"

                name="batchNumber"

                id="batchNumber"
               

              />       

              <Label for="trainer">Trainer</Label>

              <Input

                type="text"

                name="trainer"

                id="trainer"
                required

              />       

              <ButtonToggle color="success" onclick ={this.setConfirm}>confirm</ButtonToggle>{' '}

            <AssociateDropDown  associates={getAllAssociates}>Available Associates</AssociateDropDown>

            <AssociateBatchTable>Associates in this batch so far</AssociateBatchTable>

            
      </div>

  );

}

}