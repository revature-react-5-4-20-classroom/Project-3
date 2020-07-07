import { Alert } from "reactstrap";
import React from "react";

/*
	<ErrorAlert error={errorObject} message="We have an issue"/>

	Displays interesting data that may be present in the errorObject

	error (optional): must be an error object, like when an exception is caught
	message (optional): can be displayed if you do not have an errorObject
*/

interface IPErrorAlert {
  error: any;
  message: String;
}

export function ErrorAlert(props: IPErrorAlert) {
  if ((props.message==null || props.message=="") && (props.error==null || props.error=="")) {
    return <></>;
  }

  let jsxAlerts = <></>;

  if (props.message) {//checking for nulls, woo!
    jsxAlerts = (
      <>
        {jsxAlerts}
        {props.message}
      </>
    );
  }

  if (props.error) {
    jsxAlerts = (
      <>
        {/* {JSON.stringify(props.error)} */}
        {props.error.name}&nbsp;
        {props.error.message}&nbsp;
      </>
    );

    if (props.error.config) {
      jsxAlerts = (
        <>
          {jsxAlerts}
          {props.error.config.method}&nbsp;
          {props.error.config.baseURL}
          {props.error.config.url}
        </>
      );
    }
  }

  return <Alert color="danger">{jsxAlerts}</Alert>;
}
