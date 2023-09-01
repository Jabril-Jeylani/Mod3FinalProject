import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/products')
            setProducts(result.data)
        }
        fetchData()
    })


	return (
		<div>
			<h1>Featured Animals</h1>
			<div className="products">
				{products.map((product) => (
					<Item key={product.slug} product={product} />
				))}
			</div>
		</div>
	);
}
export default Home;
