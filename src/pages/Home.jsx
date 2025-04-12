import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="home">
      <div className="spline-viewer">
        <Spline scene="https://prod.spline.design/Y5znLEJANlmpiDIw/scene.splinecode" />
      </div>
      <div className="hero">
        <h2>Revolutionizing Milk Packaging</h2>
        <p>
          Eco-friendly, durable, and recyclable milk pouches for a greener
          future.
        </p>
        <a href="/product" className="btn">
          Explore Our Product
        </a>
      </div>

      <div className="product-features">
        <h3>Why Choose Pure Seal?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">♻️</span>
            <h4>Eco-Friendly Material</h4>
            <p>
              Made from sustainable materials that reduce environmental impact
              while maintaining durability.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌡️</span>
            <h4>Superior Preservation</h4>
            <p>
              Advanced sealing technology keeps milk fresh longer while
              preventing leaks and contamination.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">♻️</span>
            <h4>100% Recyclable</h4>
            <p>
              Fully recyclable packaging that contributes to a circular economy
              and reduces waste.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h4>Cost-Effective</h4>
            <p>
              Efficient design reduces packaging costs while maintaining premium
              quality.
            </p>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h3>Key Benefits</h3>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">📊</span>
            <p>
              Reduces plastic waste by up to 40% compared to traditional
              packaging
            </p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🕒</span>
            <p>Maintains milk freshness for longer periods</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🚛</span>
            <p>Lightweight design reduces transportation emissions</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💧</span>
            <p>Easy-to-use spout prevents spills and waste</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📏</span>
            <p>Available in multiple sizes (500ml, 1L, 2L)</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔄</span>
            <p>Compatible with standard milk dispensing equipment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
