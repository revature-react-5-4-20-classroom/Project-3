import React from "react";
import { Container, Row, Col } from "reactstrap";
import { EasyDropdown } from "../GeneralPurposeHelpers/EasyDropdown";
import { PageTitleBar } from "../Components/GenerateBatch/PageTitleBar";

export class OverviewTraining extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      curriculaTrack: "", //EasyDropdown will set this to the first item on component mount
      when: "",
    };
  }

  render() {
    return (
      <Container>
        <PageTitleBar pageTitle={"Training Overview"} />
        <Row>
          <Col>
            <b>Curricula Track</b>
            <EasyDropdown
              onSelected={this.setCurriculaTrack}
              items={["CF", "ROCP", "Standard", "Spark"]}
            />
          </Col>
          <Col>
            <b>When</b>
            <EasyDropdown
              onSelected={this.setWhen}
              items={["Current", "1 Month", "3 Months"]}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <h1>Chart</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  setWhen = (w: string) => {
    this.setState({ when: w });
  };

  setCurriculaTrack = (ct: string) => {
    this.setState({ curriculaTrack: ct });
  };
}
