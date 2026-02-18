import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
    <Link className="navbar-brand fw-bold" to="/">E-Shop</Link>
    <div className="d-flex align-items-center">
      <input 
        type="text" 
        placeholder="Search products..." 
        className="form-control me-2 d-none d-md-block"
      />
      <Link className="btn btn-outline-light me-2" to="/products">Products</Link>
      <Link className="btn btn-outline-light me-2" to="/cart">
        Cart <span className="badge bg-danger">{cartCount}</span>
      </Link>
      <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
      <Link className="btn btn-outline-light" to="/signup">Signup</Link>
          <Link className="btn btn-outline-light ms-2" to="/admin">Admin</Link>
       
    </div>
  </div>
</nav>

  );
}

export default Navbar;
