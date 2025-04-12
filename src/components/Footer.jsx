import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./custom.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container fluid>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <img
              src="/src/assets/ChatGPT Image Apr 12, 2025, 01_28_47 PM.png"
              alt="PureSeal Logo"
              style={{ height: "40px", marginBottom: "1rem" }}
            />
            <p className="footer-text">
              Providing high-quality sealing solutions for your business needs
              since 2005. We are committed to excellence and innovation in all
              our products.
            </p>
            <div className="social-icons">
              <Link to="#" className="social-icon">
                <FaFacebook />
              </Link>
              <Link to="#" className="social-icon">
                <FaTwitter />
              </Link>
              <Link to="#" className="social-icon">
                <FaInstagram />
              </Link>
              <Link to="#" className="social-icon">
                <FaLinkedin />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/product">Our Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-heading">Contact Us</h5>
            <address className="footer-contact">
              <div>Phone: (+91) 9640179624</div>
              <div>Email: ambatijayacharan18@gmail.com</div>
            </address>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            &copy; {new Date().getFullYear()} Pure Seal. All rights reserved. |
            Privacy Policy | Terms of Service
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
