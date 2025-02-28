import React from 'react';
import data from '../Data';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
    const { id } = useParams();
    const product = data.products.find((x) => x._id === id);
    return (
        <div className="card">
            <div className="card-body">
                <img className="medium" src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <div className="price">${product.price}</div>
                <p>
                    <strong>Brand:</strong> {product.brand}
                </p>
                <p>
                    <strong>Category:</strong> {product.category}
                </p>
            </div>
        </div>
    );
}