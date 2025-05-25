import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import 'aos/dist/aos.css';

function Hero() {
  return (
    <>
      <section className="bg-light py-5 mt-5 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center gy-4">
            {/* Background image */}
            <Col md={12} className="position-absolute d-flex justify-content-center align-items-center">
              {/* <div className="position-absolute rounded-circle bg-secondary bottom-0 mt-5 mx-auto overflow-hidden hero_background_image" ></div>
              <div className='position-absolute hero_background_image' >
                <img src="src/assets/Image 2.png" alt="Photographer" className="object-fit-cover" />
              </div> */}
              {/* <div className='position-absolute hero_background_image' >
                <img src="src/assets/Image 2.png" alt="Photographer" className="object-fit-cover overflow-hidden" />
              </div> */}
            </Col>

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
              <h1 className="position-absolute top-50 end-0 translate-middle fw-bold ms-5 hero-title"  data-aos="fade-up" data-aos-delay="200">
                Sanjula<br />Ilankoon<br />Photography
              </h1>

              {/* <hr className="position-absolute bottom-0 start-0 translate-middle-x w-25 border-1 border-dark fade-in-load delay-1 botom_line" /> */}

              <div className="d-md-flex position-absolute bottom-0 end-0 me-4 fs-5 fade-in-load delay-1 hero_subtitle-2">
                <p className="text-muted mb-0">Elegant memories for life</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Hero;
