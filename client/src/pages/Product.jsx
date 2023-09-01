import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Product() {
	const params = useParams();
	const { slug } = params;

	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(`/api/products/slug/${slug}`);
				setLoading(false)
				setProduct(result.data)
				console.log(result.data)
			} catch (err) {
				console.log(err.message);
				setLoading(false)
				setError(err.message)
			}
		};
		fetchData();
	}, [slug]);
	return (
		<div>
			<h1>{product.name}</h1>
			<img
				className="img-large"
				src={product.image}
				alt={product.name}
			></img>
			<h2>${product.price}</h2>
			<button>Add to cart</button>

		</div>
	);
}

export default Product;
