import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Navbar from '../components/Navbar';
import image01 from '../assets/Image_landsape.png';
import image02 from '../assets/Image_potrait.png';

const categories = ['All', 'Wedding', 'Portraits', 'Frames', 'Function'];

const images = [
  { id: 1, url: 'image01', category: 'Wedding' },
  { id: 2, url: 'image02', category: 'Portraits' },
  { id: 3, url: 'image01', category: 'Wedding' },
  { id: 4, url: 'image02', category: 'Frames' },
  { id: 5, url: 'image02', category: 'Function' },
  { id: 6, url: 'image01', category: 'Portraits' },
  { id: 7, url: 'image02', category: 'Portraits' },
  { id: 8, url: 'image01', category: 'Portraits' },
  { id: 9, url: 'image01', category: 'Portraits' },

  // Add more images as needed
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
    300: 1 
  };

  return (
    <>
      <Navbar />
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
              <div key={img.id} className="gallery-img-wrapper">
                <img
                  src={img.url === 'image01' ? image01 : image02}
                  alt={img.category}
                  className="img-fluid rounded shadow-lg"
                  data-aos="fade-up" data-aos-delay="200"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </>
    
  );
};

export default Gallery;
