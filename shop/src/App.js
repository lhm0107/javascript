import { Navbar, Button, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import Data from "./data.js";
import Detail from "./Detail";

import { Link, Route, Routes } from "react-router-dom";

function App() {
	let [shoes, shoesChange] = useState(Data);

	return (
		<div className="App">
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home" to={"/"} as={Link}>
								Home
							</Nav.Link>
							<Nav.Link href="#link" to={"/Detail"} as={Link}>
								Detail
							</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Routes>
				<Route
					path="/"
					element={
						<div>
							<div className="background">
								<h1>20% season Off</h1>
								<p>vnodlalsfnlslmx,fk toerlksflsfjpelnsdkjflsdf lsjfosdjfsofjlkvcx.</p>
								<p>
									<Button variant="primary">Learn more</Button>
								</p>
							</div>

							<div className="container">
								<div className="row">
									{shoes.map(function (a, i) {
										return <Product shoes={a} i={i}></Product>;
									})}
								</div>
							</div>
						</div>
					}
				></Route>
				<Route path="Detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>
			</Routes>
		</div>
	);
}

function Product(props) {
	return (
		<div className="col-md-4">
			<Link to={`/Detail/${props.shoes.id}`}>
				<img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id + 1}.jpg`} alt="신발1" width={"100%"}></img>
				<h4>{props.shoes.title}</h4>
				<p>
					{props.shoes.content} & {props.shoes.price}
				</p>
			</Link>
		</div>
	);
}
export default App;
