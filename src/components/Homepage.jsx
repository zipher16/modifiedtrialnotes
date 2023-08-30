import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Homepage = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ margin: "75px" }}
		>
			<Card
				border="dark"
				style={{ width: "32rem" }}
				className="text-center mb-2"
			>
				<Card.Header>
					<h1>Welcome to your Notes!</h1>
				</Card.Header>
				<Card.Body>
					<div className="d-grid gap-2">
						<Link to="/login">
							<Button type="submit" variant="secondary" size="lg">
								Login
							</Button>
						</Link>

						<Link to="/register">
							<Button type="submit" variant="secondary" size="lg">
								Register
							</Button>
						</Link>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Homepage;
