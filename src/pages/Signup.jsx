import { useState } from "react";
import Footer from "../components/Footer";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    alert(`Account created for ${name} (${email})`);

    // Clear form
    setName("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Signup</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${error && !name ? "is-invalid" : ""}`}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!name && error && (
            <div className="invalid-feedback">Name is required</div>
          )}
        </div>

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
            type={showPassword ? "text" : "password"}
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
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-sm btn-outline-secondary position-absolute"
            style={{ top: "0", right: "0", height: "100%" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {error && name && email && password && (
          <div className="text-danger mb-3">{error}</div>
        )}

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? <span className="spinner-border spinner-border-sm"></span> : "Signup"}
        </button>
      </form>
        
    </div>
   
  );
}

export default Signup;
