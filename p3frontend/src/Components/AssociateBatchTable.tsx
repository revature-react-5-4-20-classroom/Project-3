import React from 'react';
import { Table } from 'reactstrap';





interface IAssociateBatchTableState {

  defaultObjects: any[];

}





/** Quick reactstrap table that builds a table out of props.objects.  All objects should have the same fields in order.*/



export default class AssociateBatchTable extends React.Component<any, IAssociateBatchTableState> {



  constructor (props: any) {

    super(props);

    this.state = {

      defaultObjects: [{"empty1" : "", "empty2" : "", "empty3" : ""}]

    }

  }

render () {
  return (
    <Table>
      <thead>
        <tr>
             <th>Associate ID</th>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Email</th>
             <th>Active?</th>
             <th>Interview Score</th>
             <th>Assigned Batch ID</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </Table>
  );
}
}
