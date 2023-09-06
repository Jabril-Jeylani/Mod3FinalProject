import { useEffect, useState } from "react";
import data from "./data";
import "./App.css";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function App() {
	return (
		<div className="d-flex flex-column site-container">
			<header>
				<Navbar
					bg="dark"
					variant="dark"
				>
					<Container>
						<LinkContainer to="/">
							<Navbar.Brand>Pet Shop</Navbar.Brand>
						</LinkContainer>
					</Container>
				</Navbar>
			</header>
			<main>
				<Container>
					<Routes>
						<Route
							path="product/:slug"
							element={<Product />}
						/>
						<Route
							path="/"
							element={<Home />}
						/>
					</Routes>
				</Container>
			</main>
			<footer>
				<div className='tex-center'>All rights reserved</div>
			</footer>
		</div>
	);
}

export default App;
