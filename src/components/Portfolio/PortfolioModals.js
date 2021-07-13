import { useState } from "react";
import ModalItem from "./Project-details";

const PortfolioModals = () => {
  const [details] = useState([
    {
      key: "1",
      id: "portfolioModal1",
      name: "Project Name",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: "assets/img/portfolio/1.jpg",
      text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
      client: "Threads",
      category: "Illustration",
    },
    {
      key: "2",
      id: "portfolioModal2",
      name: "Project Name",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: "assets/img/portfolio/2.jpg",
      text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
      client: "Expore",
      category: "Graphic Design",
    },
    {
      key: "3",
      id: "portfolioModal3",
      name: "Project Name",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: "assets/img/portfolio/3.jpg",
      text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
      client: "Finish",
      category: "Identity",
    },
    {
      key: "4",
      id: "portfolioModal4",
      name: "Project Name",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: "assets/img/portfolio/4.jpg",
      text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
      client: "Lines",
      category: "Branding",
    },
    {
      key: "5",
      id: "portfolioModal5",
      name: "Project Name",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: "assets/img/portfolio/5.jpg",
      text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
      client: "Southwest",
      category: "Website design",
    },
    {
      key: "6",
      id: "portfolioModal6",
      name: "Project Name",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: "assets/img/portfolio/6.jpg",
      text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
      client: "Window",
      category: "Photography",
    },
  ]);
  return (
    <>
      {details.map((detail) => (
        <ModalItem key={detail.key} detail={detail} />
      ))}
    </>
  );
};

export default PortfolioModals;
