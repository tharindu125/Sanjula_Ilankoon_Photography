import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import 'aos/dist/aos.css';

function Hero() {
  const [showHero, setShowHero] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop === 0) {
      setShowHero(true); // only show at the top
    } else if (scrollTop > 0) {
      setShowHero(false); // hide on scroll down
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`hero-section bg-light py-0 min-vh-100 d-flex align-items-center transition-hero ${
        showHero ? 'slide-in-left' : 'slide-out-right'
      }`}
    >
      <Container>
          <Row className="align-items-center gy-4">
            {/* Left text content */}
            <Col md={6} className="text-center text-md-start">
              <p className="d-md-flex gap-3 position-absolute top-0 ms-4 hero_subtitle-1" data-aos="fade-right" data-aos-delay="200">
                We capture your feelings and<br />beautiful moments through<br />breathtaking frames
              </p>

              {/* Desktop social icons */}
              <div className="d-md-flex gap-3 position-absolute bottom-0 start-0 mb-4 ms-4 fs-5">
                {/* Social icons */}
                <div className="d-none d-md-flex gap-3 fade-in-load delay-1">
                  <a href="#" className="social-icon bg-facebook text-white"><FaFacebookF /></a>
                  <a href="#" className="social-icon bg-instagram text-white"><FaInstagram /></a>
                  <a href="#" className="social-icon bg-twitter text-white"><FaTwitter /></a>
                  <a href="#" className="social-icon bg-whatsapp text-white"><FaWhatsapp /></a>
                </div>

                {/* Photo Gallery Button */}
                <Button as={Link} to="/gallery" className="fw-bold text-dark hero-button fade-in-load delay-2">
                  Photo Gallery
                </Button>
              </div>
            </Col>

            <Col md={6} className="test-md-end" >
              <h1 className="top-50 end-0 fw-bold hero-title"  data-aos="zoom-out" data-aos-delay="200">
                Sanjula<br />Ilankoon<br />Photography
              </h1>

              {/* <hr className="position-absolute bottom-0 start-0 translate-middle-x w-25 border-1 border-dark fade-in-load delay-1 botom_line" /> */}

              <div className="d-md-flex bottom-0 end-0 me-4 fs-5 fade-in-load delay-1 hero_subtitle-2">
                <p className="text-muted mb-0">Elegant memories for life</p>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default Hero;
