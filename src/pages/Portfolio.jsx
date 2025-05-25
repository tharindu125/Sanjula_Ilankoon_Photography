import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Navbar from '../components/Navbar';

const categories = ['All', 'Wedding', 'Portraits', 'Frames', 'Function'];

const images = [
  { id: 1, url: '/gallery/wedding1.jpg', category: 'Wedding' },
  { id: 2, url: '/gallery/portrait1.jpg', category: 'Portraits' },
  { id: 3, url: '/gallery/wedding2.jpg', category: 'Wedding' },
  { id: 4, url: '/gallery/frames1.jpg', category: 'Frames' },
  { id: 5, url: '/gallery/function1.jpg', category: 'Function' },
  { id: 6, url: '/gallery/portrait2.jpg', category: 'Portraits' },
  // Add more images as needed
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Wedding');

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Navbar />
      <section className="gallery-section bg-white">
        <div className="container">
          {/* Hero Section */}
          {/* <div className="text-center my-5">
            <h1 className="fw-bold display-4 fs-3">Photo Gallery</h1>
            <p className="lead text-muted">
              Explore our stunning collection of photography that captures the essence of every moment.
            </p>
          </div> */}
          {/* Filter Menu */}
          <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Heading */}
          <h3 className="text-left fw-bold">{selectedCategory}</h3>
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
                  src={img.url}
                  alt={img.category}
                  className="img-fluid rounded shadow-sm"
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
