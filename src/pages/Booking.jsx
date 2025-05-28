import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Row, Col } from 'react-bootstrap';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    eventType: '',
    eventDate: '',
    note: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.toLowerCase() !== 'test only') {
      alert('Name must be "Test only" for demo purposes.');
      return false;
    }

    if (!mobileRegex.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!formData.eventDate) {
      alert('Please select an event date.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Booking submitted:', formData);
    alert('Thank you! Your booking request has been sent.');
  };

  return (
    <>
      <Navbar />
      <section className="booking-section bg-light py-5 mt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" data-aos="zoom-out" data-aos-delay="1000">Reserve Your Special Day</h2>
            <p className="text-muted" data-aos="zoom-out" data-aos-delay="800">
              Book a personalized photography session for your big moments – weddings, birthdays, anniversaries & more.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto bg-white p-4 shadow rounded" style={{ maxWidth: '1000px' }}>
            <Row className="g-3">
              {/* Left Column */}
              <Col md={6}>
                <div data-aos="fade-down" data-aos-delay="700">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder='Enter "Test only"'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mt-3" data-aos="fade-down" data-aos-delay="600">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobile"
                    placeholder="0712345678"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mt-3" data-aos="fade-down" data-aos-delay="500">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mt-3" data-aos="fade-down" data-aos-delay="400">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Your address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </Col>

              {/* Right Column */}
              <Col md={6}>
                <div data-aos="fade-down" data-aos-delay="300">
                  <label className="form-label">Event Type</label>
                  <select
                    className="form-select"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Event --</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                  </select>
                </div>

                <div className="mt-3" data-aos="fade-down" data-aos-delay="200">
                  <label className="form-label">Event Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mt-3" data-aos="fade-down" data-aos-delay="100">
                  <label className="form-label">Note (Optional)</label>
                  <textarea
                    className="form-control"
                    name="note"
                    rows="5"
                    placeholder="Any special requests?"
                    value={formData.note}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </Col>
            </Row>

            <button type="submit" className="btn btn-primary mt-4 py-2 px-3 fw-semibold fade-in-load delay-2">
              Submit Booking
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Booking;
