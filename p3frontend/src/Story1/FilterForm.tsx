import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  Jumbotron,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";

interface FilterFormProps {
  setProgramType: (value: string) => void;
  setClient: (value: string) => void;
  setCurriculum: (value: string) => void;
  //applyFilters: () => void;
  programTypeSelection: string[];
  clientSelection: string[];
  curriculumSelection: string[];
}

interface FilterFormState {
  programType: string;
  client: string;
  curriculum: string;
  isOpen: boolean;
}

export class FilterForm extends React.Component<
  FilterFormProps,
  FilterFormState
> {
  constructor(props: FilterFormProps) {
    super(props);
    this.state = {
      programType: "(none)",
      client: "(none)",
      curriculum: "(none)",
      isOpen: false,
    };
  }

  getSelections = () => {

  }

  setProgramType = (e: any) => {
    console.log(`Setting program type in FilterForm: ${e.value}`);
    console.log(e);
    this.setState({
      programType: e.target.value,
    });
  };

  setClient = (e: any) => {
    this.setState({
      client: e.target.value,
    });
  };

  setCurriculum = (e: any) => {
    this.setState({
      curriculum: e.target.value,
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  applyAllFilters = (e: any) => {
    e.preventDefault();
    console.log("In applyAllFilters");
    this.props.setProgramType(this.state.programType);
    this.props.setClient(this.state.client);
    this.props.setCurriculum(this.state.curriculum);
    this.toggle();
  };

  reset = () => {
    this.setState({
      programType: "(none)",
      client: "(none)",
      curriculum: "(none)",
    });
  };

  render() {
    return (
      <>
        <Button onClick={this.toggle}>Set Filters</Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Set Batch Filters</ModalHeader>
          <Jumbotron>
            <Button onClick={this.reset}>Reset Selection</Button>
            <Form onSubmit={this.applyAllFilters}>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="selectProgramType">Program Type</Label>
                    <UncontrolledDropdown id="selectProgramType">
                      <DropdownToggle caret>
                        {this.state.programType}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem value="(none)" onClick={this.setProgramType}>(none)</DropdownItem>
                        {this.props.programTypeSelection.map(
                          (selection: string, i: number) => {
                            return (
                              <DropdownItem
                                key={i}
                                value={selection}
                                onClick={this.setProgramType}
                              >
                                {selection}
                              </DropdownItem>
                            );
                          }
                        )}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="selectClient">Client</Label>
                    <UncontrolledDropdown id="selectClient">
                      <DropdownToggle caret>{this.state.client}</DropdownToggle>
                      <DropdownMenu>
                      <DropdownItem value="(none)" onClick={this.setClient}>(none)</DropdownItem>
                        {this.props.clientSelection.map(
                          (selection: string, i: number) => {
                            return (
                              <DropdownItem
                                key={i}
                                value={selection}
                                onClick={this.setClient}
                              >
                                {selection}
                              </DropdownItem>
                            );
                          }
                        )}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="selectCurriculum">Curriculum</Label>
                    <UncontrolledDropdown id="selectCurriculum">
                      <DropdownToggle caret>
                        {this.state.curriculum}
                      </DropdownToggle>
                      <DropdownMenu>
                      <DropdownItem value="(none)" onClick={this.setCurriculum}>(none)</DropdownItem>
                        {this.props.curriculumSelection.map(
                          (selection: string, i: number) => {
                            return (
                              <DropdownItem
                                key={i}
                                value={selection}
                                onClick={this.setCurriculum}
                              >
                                {selection}
                              </DropdownItem>
                            );
                          }
                        )}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary">Apply Filters</Button>
            </Form>
          </Jumbotron>
        </Modal>
      </>
    );
  }
}
