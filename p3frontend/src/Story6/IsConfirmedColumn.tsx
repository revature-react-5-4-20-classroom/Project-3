import React from "react";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import { allTheMapStateToProps } from "../redux/reducers";

const IsConfirmedColumn = (props: any) => {
  return (
    <Col>{props.batch ? (props.batch.isConfirmed ? "Yes" : "No") : null}</Col>
  );
};

export default connect(allTheMapStateToProps, null)(IsConfirmedColumn);
