import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaShippingFast, FaLock, FaHeadset, FaGem } from "react-icons/fa";

function Home() {
  
  const features = [
    { icon: <FaShippingFast size={30} />, title: "Fast Delivery", desc: "Get your products delivered in record time." },
    { icon: <FaLock size={30} />, title: "Secure Payments", desc: "Shop with confidence using secure payment methods." },
    { icon: <FaHeadset size={30} />, title: "24/7 Support", desc: "We’re here to help anytime, anywhere." },
    { icon: <FaGem size={30} />, title: "Premium Quality", desc: "Only the best products for our customers." },
  ];

  return (
    <div style={{ backgroundColor: "#111", color: "#f8f9fa", fontFamily: "Roboto, sans-serif" }}>
      {/* Hero Section */}
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          height: "100vh",
          background: "url('/images/hero-bg.jpg') center/cover no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "0 20px" }}>
          <h1 className="display-3 fw-bold mb-3" style={{ textShadow: "2px 2px 12px #000" }}>
            Welcome to E-Shop
          </h1>
          <p className="lead mb-4" style={{ maxWidth: "600px", fontSize: "1.25rem" }}>
            Fast, secure, and convenient online shopping. Explore our premium collection today!
          </p>
          <Link
            to="/products"
            className="btn btn-warning btn-lg shadow-lg"
            style={{ fontWeight: "600", padding: "0.75rem 2rem" }}
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container my-5 text-center">
        <h2 className="mb-5">Why Choose Us?</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-4 rounded shadow-lg bg-dark text-light text-center"
              style={{
                minWidth: "250px",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
              }}
            >
              <div className="mb-2">{f.icon}</div>
              <h5 className="fw-bold mb-2">{f.title}</h5>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

     

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
