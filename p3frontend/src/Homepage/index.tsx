import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";

export class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={8} className='offset-2'>
            <Jumbotron className='homepage-jumbo'>
              <h1 className='display-3'>
                Welcome to <strong>Reservoir</strong>
              </h1>
              <p className='lead'>
                Managing Revature's client demands since 2020
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
