import React from "react";
import { Table, Button } from "reactstrap";
import Associate from "../models/Associate";
import { getAllAssociates } from "../api/Associate";
import { toast } from "react-toastify";

interface IABTableModelProps {

    currentBatchId: number;

}


interface IABTableModelState {

    associates: Associate[];
    eligibleAssociates: Associate[];
    associatesLoaded: boolean;
    
  
  }
  
  /** Quick reactstrap table that builds a table out of props.objects.  All objects should have the same fields in order.*/
  
  export default class ABTableModel extends React.Component< IABTableModelProps,  IABTableModelState> {
  
    constructor (props: IABTableModelProps ) {
  
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
    
            eligibleAssociates : (this.state.associates).filter(function(a) {return a.assignedBatchId === 64; }),
    
          });
    
          } catch (e) {
               toast(e.message, {type:"error"});
    
          }
    
      }

      
      
    
       componentDidMount = async () => {
    
         await this.fetchAssociates();
        
      };

     removeAssociateFromBatch = (obj : Associate) => {

          obj.assignedBatchId = 0;

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
            <th>Remove?</th>
  
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
                     <td><Button onclick={this.removeAssociateFromBatch(obj)}>Remove</Button></td>;
                  </tr>
  
              );
  
            })}
  
          </tbody>
  
        </Table>
  
      );
  
    }
  
  }