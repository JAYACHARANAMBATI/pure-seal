const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h2>About Us</h2>
        <p className="about-description">
          We are a team of innovators from Kalasalingam University aiming to
          solve India's milk packaging problem through sustainable technology.
          Our mission is to reduce plastic waste and bring traceability to
          dairy.
        </p>
      </div>

      <div className="team-section">
        <h3>Our Leadership Team</h3>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-member-info">
              <h4>Ambati Jaya Charan</h4>
              <p className="role">CEO & Strategy Lead</p>
              <p className="description">
                Driving innovation and strategic growth initiatives
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-member-info">
              <h4>G. Geetha Vinay Krishna</h4>
              <p className="role">Overall Management Head</p>
              <p className="description">
                Leading our strategic vision and organizational excellence
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-member-info">
              <h4>Harshasri Karthikeya</h4>
              <p className="role">CTO & Product Lead</p>
              <p className="description">
                Spearheading technology and product development
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-member-info">
              <h4>SuryaNarayana Pratap</h4>
              <p className="role">COO & Marketing</p>
              <p className="description">
                Managing operations and market strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
