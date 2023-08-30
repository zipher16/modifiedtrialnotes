import React from "react";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Registerpage = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ margin: "75px" }}
		>
			<Card
				border="dark"
				style={{ width: "36rem" }}
				className="text-center mb-2"
			>
				<Card.Header>
					<h2>Please Register Below</h2>
				</Card.Header>
				<Card.Body>
					<Form className="form">
						<FloatingLabel
							controlId="floatingInput"
							label="First Name"
							className="mb-3"
						>
							<Form.Control type="name" placeholder="First Name" />
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Last Name"
							className="mb-3"
						>
							<Form.Control type="name" placeholder="Last Name" />
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Email address"
							className="mb-3"
						>
							<Form.Control type="email" placeholder="E-Mail Address" />
						</FloatingLabel>
						<FloatingLabel controlId="floatingPassword" label="Password">
							<Form.Control type="password" placeholder="Password" />
						</FloatingLabel>
					</Form>
				</Card.Body>
				<Card.Footer>
					<Button type="submit" variant="outline-dark">
						Register
					</Button>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default Registerpage;
