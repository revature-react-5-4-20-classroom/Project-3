// This isn't really working right now --Liam
import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

interface FilterFormProps {
  setProgramType: (value: string) => void;
  setClient: (value: string) => void;
  setCurriculum: (value: string) => void;
  applyFilters: () => void;
}

interface FilterFormState {
  programType: string;
  client: string;
  curriculum: string;
  programTypeSelection: string[];
  clientSelection: string[];
  curriculumSelection: string[];
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
      programTypeSelection: ["(none)", "CF", "ROCP", "Standard", "Spark"],
      clientSelection: ["(none)", "Walmart", "Amazon"],
      curriculumSelection: ["(none)", "curriculum1", "curriculum2"],
    };
  }

  setProgramType = (e: any) => {
    console.log(`Setting program type in FilterForm: ${e.value}`);
    this.setState({
      programType: e.value,
    });
  };

  setClient = (e: any) => {
    this.setState({
      client: e.value,
    });
  };

  setCurriculum = (e: any) => {
    this.setState({
      curriculum: e.value,
    });
  };

  applyAllFilters = (e: any) => {
    e.preventDefault();
    console.log("In applyAllFilters");
    this.props.setProgramType(this.state.programType);
    this.props.setClient(this.state.client);
    this.props.setCurriculum(this.state.curriculum);
    this.props.applyFilters();
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="selectProgramType">Select Program Type</Label>
          <Input type="select">
            {this.state.programTypeSelection.map(
              (selection: string, i: number) => {
                return (
                  <option
                    value={selection}
                    key={i}
                    onChange={this.setProgramType}
                  >
                    {selection}
                  </option>
                );
              }
            )}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="selectClient">Select Client</Label>
          <Input type="select">
            {this.state.clientSelection.map((selection: string, i: number) => {
              return (
                <option value={selection} key={i} onClick={this.setClient}>
                  {selection}
                </option>
              );
            })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="selectCurriculum">Select Curriculum</Label>
          <Input type="select">
            {this.state.curriculumSelection.map(
              (selection: string, i: number) => {
                return (
                  <option
                    value={selection}
                    key={i}
                    onClick={this.setCurriculum}
                  >
                    {selection}
                  </option>
                );
              }
            )}
          </Input>
        </FormGroup>
        <Button onClick={this.applyAllFilters}>Apply Filters</Button>
      </Form>
    );
  }
}
