import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Thank you! Your booking request has been sent.');
    // You can integrate Formspree, EmailJS or backend API here
  };

  return (
    <>
      <Navbar />
      <section className="booking-section bg-light py-5 mt-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Book a Session</h2>
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Time</label>
              <input
                type="time"
                className="form-control"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message (optional)</label>
              <textarea
                className="form-control"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Submit Booking
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Booking;
