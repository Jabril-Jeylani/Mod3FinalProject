import { useEffect, useState } from "react";
import data from "./data";
import "./App.css";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";

function App() {

	return (
		<div>
			<header>
				<Link to="/">Pet Shop</Link>
			</header>
			<main>
        <Routes>
          <Route path="product/:slug" element={<Product />} />
          <Route path="/" element={<Home />} />
        </Routes>
				
			</main>
		</div>
	);
}

export default App;
