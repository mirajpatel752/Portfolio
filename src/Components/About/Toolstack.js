import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillSkype, AiFillSlackSquare } from "react-icons/ai";
import { FaBitbucket } from "react-icons/fa";
import {
	SiCodesandbox,
	SiVisualstudiocode,
	SiCodepen,
	SiPostman,
	SiHeroku,
	SiGithub,
	SiVercel,
	SiMicrosoftteams
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p>VS Code</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
				<p>Github</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<AiFillSlackSquare />
				<p>Slack</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
				<p>Postman</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftteams />
				<p>Teams</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaBitbucket />
				<p>Bitbucket</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<AiFillSkype />
				<p>Skype</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
