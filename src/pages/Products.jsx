import products from "../data/products";
import { Link } from "react-router-dom";

function Products({ addToCart }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top img-fluid" alt={product.name}/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <div className="mt-auto">
                  <Link to={`/product/${product.id}`} className="btn btn-primary me-2">View</Link>
                  <button className="btn btn-success" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
