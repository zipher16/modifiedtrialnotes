import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CreateArea from "./CreateArea";
import { Link } from "react-router-dom";

const Loginpage = () => {
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [authenticated, setAuthenticated] = useState(
		localStorage.getItem("authenticated") === "true"
	);
	// const [authenticated, setAuthenticated] = useState(
	// 	localStorage.getItem(localStorage.getItem("authenticated") || false)
	// );
	const users = [{ emailAddress: "test@email.com", password: "password" }];
	const handleSubmit = (e) => {
		e.preventDefault();
		const account = users.find((user) => user.emailAddress === emailAddress);
		if (account && account.password === password) {
			setAuthenticated(true);
			localStorage.setItem("authenticated", true);
		}
	};
	if (authenticated) {
		return <CreateArea />;
	}
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
					<h2>Login</h2>
				</Card.Header>
				<Card.Body>
					<Form className="form" onSubmit={handleSubmit}>
						<FloatingLabel
							controlId="floatingInput"
							label="Email Address"
							className="mb-3"
						>
							<Form.Control
								type="email"
								name="emailAddress"
								value={emailAddress}
								onChange={(e) => setEmailAddress(e.target.value)}
								placeholder="Email Address"
							/>
						</FloatingLabel>
						<FloatingLabel controlId="floatingPassword" label="Password">
							<Form.Control
								type="password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
							/>
						</FloatingLabel>
					</Form>
				</Card.Body>
				<Card.Footer>
					<Link to="/createarea">
						<Button type="submit" variant="outline-dark" onClick={handleSubmit}>
							Submit
						</Button>
					</Link>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default Loginpage;
