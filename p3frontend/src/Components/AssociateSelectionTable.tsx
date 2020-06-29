import React from "react";
import { Container, Row, Col} from "reactstrap";
import { getAllAssociates } from "../api/Associate";
import { toast } from "react-toastify";
import ASTableModel from "./ASTableModel";
import Associate from "../models/Associate";



interface IAssociateSelectionTableState {

  associates: Associate[];

  associatesLoaded: boolean;
  currentBatchId: number;

}

export default class AssociateSelectionTable extends React.Component<any, IAssociateSelectionTableState> {

  constructor(props: any) {

    super(props);

    this.state = {

      associates: [],

      associatesLoaded: false,
      currentBatchId: 64,

    };

  }

  fetchAssociates = async () => {

    try {

      this.setState({

        associates: await getAllAssociates(),

        associatesLoaded: true,
      });

      } catch (e) {

          toast(e.message, {type:"error"});

      }

  };

  componentDidMount = async () =>{

    await this.fetchAssociates();

  };

 

  render() {

    return (



      <Container>

        <Row>

          <Col md={{ size: 8 }} width='50%'>

            <h4>All Available Associates</h4>

            <ASTableModel currentBatchId={this.state.currentBatchId} />
            
          </Col>

        </Row>

      </Container>

    );

  }

}