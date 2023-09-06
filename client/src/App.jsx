import { useEffect, useState } from "react";
import data from "./data";
import "./App.css";
import Home from "./pages/HomeScreen";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";

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
				<Container className="mt-3">
					<Routes>
						<Route
							path="product/:slug"
							element={<ProductScreen />}
						/>
						<Route
							path="/"
							element={<HomeScreen />}
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
