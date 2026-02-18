import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${error && !email ? "is-invalid" : ""}`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!email && error && (
            <div className="invalid-feedback">Email is required</div>
          )}
        </div>

        <div className="mb-3 position-relative">
          <label className="form-label">Password</label>
          <input
            id="password"
            type="password"
            className={`form-control ${error && !password ? "is-invalid" : ""}`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!password && error && (
            <div className="invalid-feedback">Password is required</div>
          )}
          <button
            type="button"
            onClick={() => {
              const input = document.getElementById("password");
              input.type = input.type === "password" ? "text" : "password";
            }}
            className="btn btn-sm btn-outline-secondary position-absolute"
            style={{ top: "0", right: "0", height: "100%" }}
          >
            Show
          </button>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>

        {error && email && password && (
          <div className="text-danger mb-3">{error}</div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            "Login"
          )}
        </button>

        <div className="text-center mt-3">
          <a href="#!" className="text-decoration-none">
            Forgot password?
          </a>
        </div>

        <hr className="my-4" />

        <div className="d-grid gap-2">
          <button className="btn btn-outline-danger">Login with Google</button>
          <button className="btn btn-outline-primary">Login with Facebook</button>
        </div>
        
      </form>
      
    </div>
    
  );
}

export default Login;
