import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
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

// The FilterForm is a component which renders as a button. When clicked, a form will pop up, which will allow the user to select filters for the InProgress component
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

  // Setting values to filter for on programType, client, and curriculum
  setProgramType = (e: any) => {
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

  // toggles the modal on or off
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  // applies the filters using passed in functions. For the page to render appropriately, setCurriculum should also have a callback function in this.setState
  applyAllFilters = (e: any) => {
    e.preventDefault();
    console.log("In applyAllFilters");
    this.props.setProgramType(this.state.programType);
    this.props.setClient(this.state.client);
    this.props.setCurriculum(this.state.curriculum);
    this.toggle();
  };

  // sets all filters to "(none)"
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
        <Button onClick={this.toggle}>Set Filters &nbsp;<FontAwesomeIcon icon={faBars}/></Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} style={{backgroundColor:"#474c55", color:"#ffffff"}}>Set Batch Filters</ModalHeader>
          <Jumbotron style={{backgroundColor:"#ffffff"}}>
            <Button onClick={this.reset}><FontAwesomeIcon icon={faRedoAlt}/>&nbsp;Reset Selection</Button>
            <br/><br/>
            <Form onSubmit={this.applyAllFilters}>
              <Row form>
                <Col lg={'auto'}>
                  <FormGroup>
                    <Label for="selectProgramType"><b>Program Type</b></Label>
                    <UncontrolledDropdown id="selectProgramType">
                      <DropdownToggle caret>
                        {this.state.programType}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          value="(none)"
                          onClick={this.setProgramType}
                        >
                          (none)
                        </DropdownItem>
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
                <Col lg={'auto'}>
                  <FormGroup>
                    <Label for="selectClient"><b>Client</b></Label>
                    <UncontrolledDropdown id="selectClient">
                      <DropdownToggle caret>{this.state.client}</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem value="(none)" onClick={this.setClient}>
                          (none)
                        </DropdownItem>
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
                <Col lg={'auto'}>
                  <FormGroup>
                    <Label for="selectCurriculum"><b>Curriculum</b></Label>
                    <UncontrolledDropdown id="selectCurriculum">
                      <DropdownToggle caret>
                        {this.state.curriculum}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          value="(none)"
                          onClick={this.setCurriculum}
                        >
                          (none)
                        </DropdownItem>
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
              <br/>
              {/* Clicking this button submits the form, calls the applyAllFilters function */}
              <Button style={{backgroundColor:"#f26925"}}>Apply Filters</Button>
            </Form>
          </Jumbotron>
        </Modal>
      </>
    );
  }
}
