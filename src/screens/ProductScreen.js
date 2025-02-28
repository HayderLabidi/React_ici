import React from 'react';
import data from '../Data';
import { useParams , Link} from 'react-router-dom';
import Rating from '../components/Rating';

export default function ProductScreen() {
    const { id } = useParams();
    const product = data.products.find((x) => x._id = Number(id) );
    return (
      <div>
        <Link to='/'>Back to result</Link>
        <div className="row top">
            <div className="col1">
                <img className="large" src={product.image} alt={product.name} />
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
        </div>
    );
}