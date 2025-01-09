import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);

  if (!product || product.id !== parseInt(id)) {
    return (
      <div className="container my-5 text-center">
        <p className="alert alert-danger">Product not found!</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px' }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{product.title}</h1>
          <p className="lead">{product.description}</p>
          <p className="fs-4 fw-bold text-primary">Price: ${product.price}</p>
          <button className="btn btn-success btn-lg mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
