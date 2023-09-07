import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./pages/CartScreen";
import SignInScreen from "./pages/SignInScreen";
import CompleteScreen from "./pages/CompleteScreen";
import SignUpScreen from "./pages/SignUpScreen";

function App() {
	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { cart, userInfo } = state;

	const signoutHandler = () => {
		ctxDispatch({ type: "USER_SIGNOUT" });
		localStorage.removeItem("userInfo");
	};

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
						<Nav className="me-auto">
							<Link
								to="/cart"
								className="nav-link"
							>
								Cart
								{cart.cartItems.length > 0 && (
									<Badge
										pill
										bg="danger"
									>
										{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
									</Badge>
								)}
							</Link>
							{userInfo ? (
								<NavDropdown
									title={userInfo.name}
									id="basic-nav-dropdown"
								>
									<LinkContainer to="/profile">
										<NavDropdown.Item>User Profile</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/orderhistory">
										<NavDropdown.Item>Order History</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Divider />
									<Link
										className="dropdown-item"
										to="#signout"
										onClick={signoutHandler}
									>
										Sign Out
									</Link>
								</NavDropdown>
							) : (
								<Link
									className="nav-link"
									to="/signin"
								>
									Sign In
								</Link>
							)}
						</Nav>
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
							path="/cart"
							element={<CartScreen />}
						/>
						<Route
							path="/signin"
							element={<SignInScreen />}
						/>
						<Route
							path="/signup"
							element={<SignUpScreen />}
						/>
						<Route
							path="/complete"
							element={<CompleteScreen />}
						/>
						<Route
							path="/"
							element={<HomeScreen />}
						/>
					</Routes>
				</Container>
			</main>
			<footer>
				<div className="tex-center">All rights reserved</div>
			</footer>
		</div>
	);
}

export default App;
