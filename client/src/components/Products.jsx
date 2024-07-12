import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';

function Products() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        maxPrice: '999999',
        minPrice: '0',
        numProducts: '10',
        company: 'AMZ',
        category: 'Phone',
        sortBy: 'price',
    });

    const getProducts = async () => {
        try {
            // http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?top=10&minPrice=1&maxPrice=10000
            const res = await axios.get(`http://localhost:3000/companies/${filters.company || "AMZ" }/categories/${filters.category || "Laptop"}/products?top=${filters.numProducts || "10" }&minPrice=${filters.minPrice || "0" }&maxPrice=${filters.maxPrice || "999999" }&sortBy=${filters.sortBy || "price"}`);
            console.log(res);
            if (res.data) {
                setProducts(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getProducts();
    };

    return (
        <div className="products-container">
            <form className="filters-form" onSubmit={handleSubmit}>
                <label>
                    Max Price:
                    <input
                        type="number"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Min Price:
                    <input
                        type="number"
                        name="minPrice"
                        value={filters.minPrice}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Number of Products:
                    <input
                        type="number"
                        name="numProducts"
                        value={filters.numProducts}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Company:
                    <select
                        name="company"
                        value={filters.company}
                        onChange={handleChange}
                    >
                        {/* const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
                        const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad",
                         "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"]; */}
                        <option value="">Select Company</option>
                        <option value="AMZ">AMZ</option>
                        <option value="FLP">FLP</option>
                        <option value="SNP">SNP</option>
                        <option value="MYN">MYN</option>
                        <option value="AZO">AZO</option>
                    </select>
                </label>
                <label>
                    Category:
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>
                        <option value="Speaker">Speaker</option>
                        <option value="Headset">Headset</option>
                        <option value="PC">PC</option>
                        <option value="Phone">Phone</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Computer">Computer</option>
                        <option value="TV">TV</option>
                        <option value="Earphone">Earphone</option>
                        <option value="Charger">Charger</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Keypad">Keypad</option>
                        <option value="Bluetooth">Bluetooth</option>
                        <option value="Pendrive">Pendrive</option>
                        <option value="Remote">Remote</option>
                    </select>
                </label>
                <label>
                    Sort By:
                    <select
                        name="sortBy"
                        value={filters.sortBy}
                        onChange={handleChange}
                    >
                        <option value="">Select Sort Option</option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                        <option value="discount">Discount</option>
                    </select>
                </label>
                <button type="submit">Apply Filters</button>
            </form>
            <div className="smoothie-main">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Products;
