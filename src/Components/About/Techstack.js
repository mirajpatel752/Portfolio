import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiJsBadge, DiReact,  DiCss3, DiHtml5, DiSass } from "react-icons/di";
import { FaBootstrap, FaShopify } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
				<p>HTML</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
				<p>CSS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiSass />
				<p>SCSS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJsBadge />
				<p>JavaScript</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
				<p>React</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNextdotjs />
				<p>Next</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaShopify />
				<p>Shopify Hydrogen</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaBootstrap />
				<p>Bootstrap</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<AiOutlineAntDesign />
				<p>Antd Design</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTailwindcss />
				<p>Tailwindcss</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedux />
				<p>Redux</p>
			</Col>
		</Row>
	);
}

export default Techstack;
