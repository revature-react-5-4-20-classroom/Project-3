import React from "react";
import { Table, Button } from "reactstrap";
import {Associate} from "../models/Associate";
import { getAllAssociates } from "../api/Associate";
//import { toast } from "react-toastify";

interface IASTableModelProps {

  currentBatchId: number;

}

interface IASTableModelState {

  
  associates: Associate[];
  eligibleAssociates: Associate[];
  tableData: String[];
  associatesLoaded: boolean;

}

/** Quick reactstrap table that builds a table out of props.objects.  All objects should have the same fields in order.*/

export default class ASTableModel extends React.Component<IASTableModelProps, IASTableModelState> {

  constructor (props: IASTableModelProps) {

    super(props);

    this.state = {

     associates: [],
     eligibleAssociates: [],
     tableData: [],
     associatesLoaded: false
     
    }

  }

     async componentDidMount(){
    
    const associateArray: Associate[] = await getAllAssociates();
    const eligibleAssociateArray=associateArray.filter(function(a) {return a.interviewScore >= 70 && a.batch === null });

    const tableDataArray: string[]=  eligibleAssociateArray.map((a) => {
        return (` ${a.firstName},  ${a.lastName},   ${a.interviewScore} `);
    })
      this.setState({

      associates: associateArray,
      eligibleAssociates: eligibleAssociateArray,
      tableData: tableDataArray,
      associatesLoaded: true,
      })
    };
  

   updateAssignedBatchId = (obj : any, currentBatchId : number) => {
        obj.assignedBatchId = currentBatchId;
   }

  render() {

    return (

      <Table striped className="associate-table">

        <tbody>

          {/* Generate one row per object with a cell for each value on the object */}

          {this.state.tableData.map((obj: any, index: number) => {

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