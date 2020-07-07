import { Alert } from "reactstrap";
import React from "react";

/*
	<ErrorAlert error={errorObject} message="We have an issue"/>

	Displays interesting data that may be present in the errorObject

	error (optional): must be an error object, like when an exception is caught
	message (optional): can be displayed if you do not have an errorObject
*/

interface IPErrorAlert{
  error:any,
  message:String
}

export function ErrorAlert(props: IPErrorAlert) {
  let jsxAlerts = <></>;

  if (props.error) {
    jsxAlerts = (
      <Alert color="danger">
        {/* {JSON.stringify(props.error)} */}
        {props.error.name}&nbsp;
        {props.error.message}&nbsp;
        {props.error.config ? (
          <>
            {props.error.config.method}&nbsp;
            {props.error.config.baseURL}
            {props.error.config.url}
          </>
        ) : (
          <></>
        )}
      </Alert>
    );
  }

  if (props.message) {
    jsxAlerts = (
      <>
        {jsxAlerts}
        <Alert color="danger">{props.message}</Alert>
      </>
    );
  }

  return jsxAlerts;
}
