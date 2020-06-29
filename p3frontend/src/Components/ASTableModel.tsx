import React from "react";
import { Table, Button } from "reactstrap";
import Associate from "../models/Associate";
import { getAllAssociates } from "../api/Associate";
import { toast } from "react-toastify";

interface IASTableModelProps {

  currentBatchId: number;

}

interface IASTableModelState {

  
  associates: Associate[];
  eligibleAssociates: Associate[];
  associatesLoaded: boolean;

}

/** Quick reactstrap table that builds a table out of props.objects.  All objects should have the same fields in order.*/

export default class ASTableModel extends React.Component<IASTableModelProps, IASTableModelState> {

  constructor (props: IASTableModelProps) {

    super(props);

    this.state = {

     associates: [],
     eligibleAssociates: [],
     associatesLoaded: false,
     
    }

  }

  fetchAssociates = async () => {



    try {



      this.setState({



        associates: await getAllAssociates(),



        associatesLoaded: true,

        
        eligibleAssociates: (this.state.associates).filter(function(a) {return a.interviewScore >= 70 && a.assignedBatchId === null; }),
   

      });



      } catch (e) {



          toast(e.message, {type:"error"});



      }



  };

  componentDidMount = async () => {
    
    await this.fetchAssociates();
   
 };
  

   updateAssignedBatchId = (obj : any, currentBatchId : number) => {
        obj.assignedBatchId = currentBatchId;
   }

  render() {

    return (

      <Table striped className="associate-table">

        <thead>

          <tr>

            <th>Associate ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Active?</th>
            <th>Technical Score</th>
            <th>Assigned Batch ID</th>
            <th>Add?</th>
          </tr>

        </thead>

        <tbody>

          {/* Generate one row per object with a cell for each value on the object */}

          {this.state.eligibleAssociates.map((obj: any, index: number) => {

              return (

                <tr key={index}>

                    {Object.values(obj).map((value: any, index: number) => {

                        return  <td key={index}>{value}</td> 
                    })}
                    <td><Button onclick={this.updateAssignedBatchId(obj, this.props.currentBatchId)}>Add</Button></td>;
              </tr>

            );

          })}

        </tbody>

      </Table>

    );

  }

}