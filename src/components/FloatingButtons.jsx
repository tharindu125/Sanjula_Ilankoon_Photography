import { useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top */}
      <a
        href="#"
        onClick={scrollToTop}
        className={`scroll-top d-flex align-items-center justify-content-center ${showScroll ? 'show' : ''}`}
        style={{
          position: 'fixed',
          left: '20px',
          bottom: '20px',
          width: '40px',
          height: '40px',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '50%',
          fontSize: '24px',
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'opacity 0.3s ease',
          opacity: showScroll ? 1 : 0,
          pointerEvents: showScroll ? 'auto' : 'none',
        }}
      >
        <BsArrowUpShort />
      </a>

      {/* WhatsApp Button */}
      <div
        className="whatsapp-button"
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 1000,
        }}
      >
        <a
          href="https://wa.me/+94769098080?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width="50"
            height="50"
            loading="lazy"
            style={{ borderRadius: '50%', boxShadow: '0 0 10px rgba(0,0,0,0.3)' }}
          />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
