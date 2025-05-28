import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5 position-relative overflow-hidden" id='contact'>
      <Container>
        <Row className="text-center text-md-start">

          {/* About section */}
          <Col md={3} className="mb-4" data-aos="fade-left" data-aos-delay="400">
            <h5 className="fw-bold text-gradient"><span className="fs-3">∞</span> Sanjula Ilankoon</h5>
            <p className="small">
              Capturing life's best moments with passion and precision. Timeless portraits, stunning events, and magical memories.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-4" data-aos="zoom-in" data-aos-delay="200">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/portfolio" className="text-white text-decoration-none">Gallery</Link></li>
              <li><Link to="/bookings" className="text-white text-decoration-none">Bookings</Link></li>
              <li><Link to="/#about" className="text-white text-decoration-none">About</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3} className="mb-4 footer-contact_info" data-aos="zoom-in" data-aos-delay="200">
            <h5 className="fw-bold">Contact</h5>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-center mb-2">
                <FaPhoneAlt className="me-2 text-info" />
                <span>+94 76 909 8080</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-2 text-info" />
                <span>sanjulailankoon@gmail.com</span>
              </li>
              <li className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 text-info" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={3} className="mb-4" data-aos="fade-right" data-aos-delay="400">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start fs-5">
              <a href="#" className="text-white facebook"><FaFacebookF /></a>
              <a href="#" className="text-white instagram"><FaInstagram /></a>
              <a href="#" className="text-white twitter"><FaTwitter /></a>
              <a href="#" className="text-white whatsapp"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} Sanjula Ilankoon Photography. All Rights Reserved. <br />
          Developed by <a href="https://webmindinnovations.com" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none">WebMind Innovations</a>
        </p>
      </Container>

      {/* Optional design blur background element */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, #0dcaf0 0%, transparent 70%)',
        zIndex: 0,
        opacity: 0.1,
        pointerEvents: 'none'
      }} />
    </footer>
  );
}

export default Footer;
