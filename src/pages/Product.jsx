const Product = () => {
  return (
    <div className="product">
      <h2>Our Premium Milk Pouches</h2>
      <div className="product-hero">
        <div className="product-image">
          <img
            src="/src/assets/Screenshot 2025-04-12 140606.png"
            alt="PureSeal Milk Pouch"
            className="product-image"
          />
        </div>
        <div className="product-details">
          <h3>Pure Seal Eco-Friendly Milk Pouches</h3>
          <p className="product-description">
            Our innovative milk pouches are crafted from 100% recyclable plastic
            with a biodegradable coating, combining sustainability with
            practicality. Designed for both urban and rural communities, these
            pouches offer superior freshness protection while minimizing
            environmental impact.
          </p>
          <div className="product-specs">
            <div className="spec-item">
              <span className="spec-icon">♻️</span>
              <span>100% Recyclable Material</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">🌱</span>
              <span>Biodegradable Coating</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">💧</span>
              <span>Leak-Proof Design</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">🔄</span>
              <span>Resealable Cap</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-features">
        <h3>Key Benefits</h3>
        <ul>
          <li>
            Reduces plastic waste by up to 40% compared to traditional packaging
          </li>
          <li>Maintains milk freshness for longer periods</li>
          <li>Lightweight design reduces transportation emissions</li>
          <li>Easy-to-use spout prevents spills and waste</li>
          <li>Available in multiple sizes (500ml, 1L, 2L)</li>
          <li>Compatible with standard milk dispensing equipment</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
