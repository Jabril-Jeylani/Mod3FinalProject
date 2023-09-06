import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Item from "../components/Item";
import logger from "use-reducer-logger";

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_REQUEST":
			return { ...state, loading: true };
		case "FETCH_SUCCESS":
			return { ...state, products: action.payload, loading: false };
		case "FETCH_FAIL":
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

function Home() {
	const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
		products: [],
		loading: true,
		error: "",
	});
	// const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FETCH_REQUEST" });
			try {
				const result = await axios.get("/api/products");
				dispatch({ type: "FETCH_SUCCESS", payload: result.data });
			} catch (err) {
				dispatch({ type: "FETCH_FAIL", payload: err.message });
			}
			// setProducts(result.data)
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>Featured Animals</h1>
			<div className="products">
				{loading ? (
					<div>Loading</div>
				) : error ? (
					<div>{error}</div>
				) : (
					products.map((product) => (
						<Item
							key={product.slug}
							product={product}
						/>
					))
				)}
			</div>
		</div>
	);
}
export default Home;
