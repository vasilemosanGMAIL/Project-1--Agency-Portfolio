import { useState } from "react";
const ServicesPost = ({ service }) => {
  return (
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fas fa-circle fa-stack-2x text-primary"></i>
        <i className={service.icon}></i>
      </span>
      <h4 className="my-3">{service.title}</h4>
      <p className="text-muted">{service.text}</p>
    </div>
  );
};

const Services = () => {
  const [services] = useState([
    {
      key: "1",
      icon: "fas fa-shopping-cart fa-stack-1x fa-inverse",
      title: "E-Commerce",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
      key: "2",
      icon: "fas fa-laptop fa-stack-1x fa-inverse",
      title: "Responsive Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
    {
      key: "3",
      icon: "fas fa-lock fa-stack-1x fa-inverse",
      title: "Web Security",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    },
  ]);
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row text-center">
          {services.map((service) => (
            <ServicesPost key={service.key} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
