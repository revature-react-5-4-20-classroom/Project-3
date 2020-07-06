import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { EasyDropdown } from '../GeneralPurposeHelpers/EasyDropdown';
import { ColumnChartTest } from './colGraphComponent';
import { PageTitleBar } from '../Components/GenerateBatch/PageTitleBar';

export class OverviewClientDemand extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      curriculaTrack: '', //EasyDropdown will set this to the first item on component mount
      when: '',
    };
  }

  render() {
    return (
      <Container>
      <PageTitleBar pageTitle={"Client Demand Overview"}/>
        <Row>
          <ColumnChartTest />
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
