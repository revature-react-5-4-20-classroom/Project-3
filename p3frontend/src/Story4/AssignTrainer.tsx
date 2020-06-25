import React from "react";
import { Container, Row, Col } from "reactstrap";
import { EasyDropdown } from "../GeneralPurposeHelpers/EasyDropdown";


export class AssignTrainer extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={

		}
	}

	render()
	{
		return(<Container>
				<h6>Story 4. Assign Trainer</h6><br/>
				<p>Given an upcoming batch without an assigned Lead Trainer
When a Trainer with corresponding skillsets to the Curricula required is available
Then I can assign the Trainer to the batch
But if no Trainers are available with the corresponding skillset
And I have consent from the Trainer
Then I can override the system</p><br/>
				
			<Row>
				<Col>
					<p>View trainers maybe. view batches maybe. This page might get deleted</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>Assign trainers</p>
				</Col>
			</Row>
		</Container>)
	}
}