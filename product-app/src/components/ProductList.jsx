import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProduct } from '../store/productsSlice';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = (product) => {
    dispatch(selectProduct(product));
    navigate(`/products/${product.id}`);
  };

  if (loading) return <div className="text-center"><p>Loading...</p></div>;
  if (error) return <div className="text-center"><p>Error: {error}</p></div>;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row g-4">
        {items.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
              {/* Card Image */}
              <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top img-fluid"
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>

              {/* Card Body */}
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center">{product.title}</h5>
                <div className="mt-auto">
                  <p className="card-text text-center fw-bold">Price: ${product.price}</p>
                  <button
                    className="btn btn-primary w-100 mt-2"
                    onClick={() => handleProductClick(product)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;