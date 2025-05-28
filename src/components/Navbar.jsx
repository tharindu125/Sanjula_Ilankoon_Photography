import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function CustomNavbar() {
  const location = useLocation();

  const getNavLinkClass = (path) =>
    location.pathname === path ? 'fw-bold text-primary' : 'text-dark';

  return (
    <Navbar expand="lg" fixed="top" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 d-flex align-items-center gap-2">
          <span className="fs-3">∞</span> 
          SANJULA <span className="text-muted">ILANKOON</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/" className={getNavLinkClass('/')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className={getNavLinkClass('/portfolio')}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/#contact" className={getNavLinkClass('/bookings')}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/#about" className={getNavLinkClass('/about')}>About Us</Nav.Link>

            <Nav.Item className="ms-3">
              <Link to="/bookings" className="btn btn-outline-primary fw-semibold">
                Bookings
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
