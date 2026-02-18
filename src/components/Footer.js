// Footer.js
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-center text-light py-4 mt-5"
      style={{ backgroundColor: "#212529" }}
    >
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
