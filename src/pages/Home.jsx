// src/pages/Home.jsx
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import about_image from '../assets/Image 1.jpg';
import image01 from '../assets/Image_landsape.png';
import image02 from '../assets/Image_potrait.png';

const categories = ['All', 'Wedding', 'Portraits', 'Frames', 'Function'];

const images = [
  { id: 1, url: image01, category: 'Wedding' },
  { id: 2, url: image02, category: 'Portraits' },
  { id: 3, url: image01, category: 'Wedding' },
  { id: 4, url: image02, category: 'Frames' },
  { id: 5, url: image02, category: 'Function' },
  { id: 6, url: image01, category: 'Portraits' },
  { id: 7, url: image02, category: 'Portraits' },
  { id: 8, url: image01, category: 'Portraits' },
  { id: 9, url: image01, category: 'Portraits' },

  // Add more images as needed
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImage, setModalImage] = useState(null);
  
  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 3,
    500: 3,
    400: 2,
    300: 1,
  };

  return (
    <>
      <Navbar />
      <Hero />
      {/* About Section */}
      <section className="py-5" id="about" style={{ backgroundColor: '#e9ecef', marginTop: '10rem' }}>
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Text Content */}
            <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
              <h2 className="fw-bold display-6" style={{ fontFamily: 'Poppins, sans-serif', color: '#212529' }}>
                About <span className="text-primary">Sanjula Ilankoon</span>
              </h2>
              <p className="lead mt-3" style={{ fontFamily: 'Roboto, sans-serif', color: '#495057' }}>
                I am a passionate photographer who believes in storytelling through lenses.
                From timeless wedding moments to serene nature captures, my goal is to frame your emotions beautifully.
              </p>

              <div className="mt-4">
                <div className="d-flex justify-content-center justify-content-lg-start gap-4 flex-wrap">
                  <div
                    className="p-3 border rounded bg-white shadow-sm"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    style={{ minWidth: '130px' }}
                  >
                    <h5 className="mb-1 fw-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#212529' }}>10+ Years</h5>
                    <p className="mb-0 text-muted" style={{ fontFamily: 'Roboto, sans-serif' }}>Experience</p>
                  </div>
                  <div
                    className="p-3 border rounded bg-white shadow-sm"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    style={{ minWidth: '130px' }}
                  >
                    <h5 className="mb-1 fw-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#212529' }}>200+ Clients</h5>
                    <p className="mb-0 text-muted" style={{ fontFamily: 'Roboto, sans-serif' }}>Happy Memories</p>
                  </div>
                  {/* <div
                    className="p-3 border rounded bg-white shadow-sm"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    style={{ minWidth: '130px' }}
                  >
                    <h5 className="mb-1 fw-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#212529' }}>15 Awards</h5>
                    <p className="mb-0 text-muted" style={{ fontFamily: 'Roboto, sans-serif' }}>Recognitions</p>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 text-center" data-aos="zoom-in" data-aos-delay="200">
              <img
                src={about_image}
                alt="Sanjula Ilankoon"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  maxHeight: '450px',
                  objectFit: 'cover',
                  border: '6px solid #fff'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-5 bg-white" id="services">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="fw-bold display-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Event Photography Services
            </h2>
            <p className="text-muted lead" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Capturing emotions in every celebration.
            </p>
          </div>

          <div className="timeline d-flex flex-column flex-md-row justify-content-between align-items-center position-relative flex-wrap">
            {[
              { image: "/src/assets/Image 1.jpg", title: "Weddings", desc: "Cinematic coverage of your big day.", delay: 100 },
              { image: "/src/assets/Image 1.jpg", title: "Birthdays", desc: "Framing every joyful moment.", delay: 200 },
              { image: "/src/assets/Image 1.jpg", title: "Newborn", desc: "Capturing tiny, precious memories.", delay: 300 },
              { image: "/src/assets/Image 1.jpg", title: "Graduations", desc: "Milestones you'll never forget.", delay: 400 },
              { image: "/src/assets/Image 1.jpg", title: "Outdoor Shoots", desc: "Beautiful scenery, beautiful you.", delay: 500 },
            ].map((item, i) => (
              <div
                key={i}
                className="timeline-item text-center mb-5 mb-md-0 px-2"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div
                  className="timeline-img mb-3 mx-auto shadow"
                  style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small px-2 px-md-3" style={{ maxWidth: '200px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      <section className="gallery-section bg-white">
        <div className="container">

          {/* Filter Menu */}
          <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                data-aos="zoom-in" data-aos-delay="200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Heading */}
          <h3 className="text-left fw-bold" data-aos="zoom-out" data-aos-delay="200">{selectedCategory}</h3>
          <hr className='mb-4 mt-0 w-25 border-2 border-dark fade-in-load delay-1' />

          {/* Masonry Grid */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="gallery-img-wrapper"
                onClick={() => setModalImage(img.url)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={img.url}
                  alt={img.category}
                  className="img-fluid rounded shadow-lg"
                  data-aos="fade-up" data-aos-delay="200"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Full view" className="modal-img" />
            <button className="modal-close" onClick={() => setModalImage(null)}>X</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
