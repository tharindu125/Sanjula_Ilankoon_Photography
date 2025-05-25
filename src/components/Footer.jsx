import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          {/* About section */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold"><span className="fs-3">∞</span> Sanjula Ilankoon Photography</h5>
            <p className="small">
              Capturing life's best moments with passion and precision. Timeless portraits, stunning events, and magical memories.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/gallery" className="text-white text-decoration-none">Gallery</Link></li>
              <li><Link to="/bookings" className="text-white text-decoration-none">Bookings</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start fs-5">
              <a href="#" className="text-white"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
              <a href="#" className="text-white"><FaTwitter /></a>
              <a href="#" className="text-white"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-3" />

        <p className="text-center small mb-0">
            &copy; {new Date().getFullYear()} Sanjula Ilankoon Photography. All Rights Reserved. <br />
            Developed by <a href="https://webmindinnovations.com" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none">WebMind Innovations</a>
        </p>

      </Container>
    </footer>
  );
}

export default Footer;

