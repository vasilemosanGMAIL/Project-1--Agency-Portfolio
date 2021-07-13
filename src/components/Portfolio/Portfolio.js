import { useState } from "react";
import PortfolioItem from "./PorfolioItem";

const Portfolio = () => {
  const [items] = useState([
    {
      key: "1",
      href: "#portfolioModal1",
      imgSrc: "assets/img/portfolio/1.jpg",
      title: "Threads",
      subtitle: "Illustration",
    },
    {
      key: "2",
      href: "#portfolioModal2",
      imgSrc: "assets/img/portfolio/2.jpg",
      title: "Explore",
      subtitle: "Graphic Design",
    },
    {
      key: "3",
      href: "#portfolioModal3",
      imgSrc: "assets/img/portfolio/3.jpg",
      title: "Finish",
      subtitle: "Identity",
    },
    {
      key: "4",
      href: "#portfolioModal4",
      imgSrc: "assets/img/portfolio/4.jpg",
      title: "Lines",
      subtitle: "Branding",
    },
    {
      key: "5",
      href: "#portfolioModal5",
      imgSrc: "assets/img/portfolio/5.jpg",
      title: "Southwest",
      subtitle: "Website Design",
    },
    {
      key: "6",
      href: "#portfolioModal6",
      imgSrc: "assets/img/portfolio/6.jpg",
      title: "Window",
      subtitle: "Photography",
    },
  ]);
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          {items.map((item) => (
            <PortfolioItem key={item.key} item={item} />
          ))}
          {/* {items.map((item) => (
            <div className="col-lg-4 col-sm-6 mb-4">
              <PortfolioItem key={item.key} item={item} />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
