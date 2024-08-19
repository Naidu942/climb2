import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>CLIMB</h1>
          <h2 className="tagline">Empowering Future Entrepreneurs</h2>
          <a href="#programs" className="cta-button">Explore Programs</a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>
          CLIMB (Collaborative Learning and Innovation hub for Modern Businesses)
          is dedicated to fostering entrepreneurship through workshops, mentoring, and
          networking opportunities.
        </p>
      </section>


      {/* Features Section */}
      <section className="features-section">
        <div className="feature">
          <i className="fas fa-chalkboard-teacher feature-icon"></i>
          <h3>Workshops</h3>
          <p>Hands-on workshops to enhance your entrepreneurial skills.</p>
        </div>
        <div className="feature">
          <i className="fas fa-user-tie feature-icon"></i>
          <h3>Mentorship</h3>
          <p>Get guidance from experienced entrepreneurs and industry experts.</p>
        </div>
        <div className="feature">
          <i className="fas fa-network-wired feature-icon"></i>
          <h3>Networking</h3>
          <p>Connect with like-minded individuals and expand your network.</p>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <h2>What People Are Saying</h2>
        <div className="testimonial">
          CLIMB has been a game-changer for my startup. The mentorship I received was invaluable.
          <br />
          <strong>- Jithandra</strong>
        </div>
        <div className="testimonial">
          The workshops helped me refine my business idea and take it to the next level.
          <br />
          <strong>-Sravani </strong>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join CLIMB Today!</h2>
        <p>Ready to take your entrepreneurial journey to the next level? Join us now!</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </section>
    </div>
  );
};

export default Home;
