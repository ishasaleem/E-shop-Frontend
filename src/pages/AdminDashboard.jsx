
function AdminDashboard() {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
        <h4>Admin Panel</h4>
        <ul className="list-unstyled mt-4">
          <li className="mb-2">Dashboard</li>
          <li className="mb-2">Products</li>
          <li className="mb-2">Orders</li>
          <li className="mb-2">Users</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container mt-4">
        <h2>Dashboard</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>Total Products</h5>
              <h3>3</h3>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>Total Users</h5>
              <h3>10</h3>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>Total Orders</h5>
              <h3>5</h3>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default AdminDashboard;
