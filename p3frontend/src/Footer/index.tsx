import React from "react";
import { Row, Col } from "reactstrap";

export class PageFooter extends React.Component {
  render() {
    return (
      <div className='page-footer '>
        <Row className='footer-row'>
          <Col xs={4} className='offset-4'>
            <p className='center-footer-text'>&copy; 2020 Revature</p>
          </Col>
          <Col xs={4}>
            <a className='end-footer-text' href='' target='_blank'>
              Privacy Policy
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}
