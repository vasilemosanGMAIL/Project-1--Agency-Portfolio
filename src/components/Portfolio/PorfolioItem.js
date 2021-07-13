const PortfolioItem = ({ item }) => {
  return (
    <div className="portfolio-item">
      <a className="portfolio-link" data-bs-toggle="modal" href={item.href}>
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={item.imgSrc} alt="..." />
      </a>
      <div className="portfolio-caption">
        <div className="portfolio-caption-heading">{item.title}</div>
        <div className="portfolio-caption-subheading text-muted">
          {item.subtitle}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
