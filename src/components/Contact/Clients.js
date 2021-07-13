import { useState } from "react";
import ClientItem from "./ClientItem";

const Clients = () => {
  const [clients] = useState([
    { key: "1", href: "#!", imgSrc: "assets/img/logos/microsoft.svg" },
    { key: "2", href: "#!", imgSrc: "assets/img/logos/google.svg" },
    { key: "3", href: "#!", imgSrc: "assets/img/logos/facebook.svg" },
    { key: "4", href: "#!", imgSrc: "assets/img/logos/ibm.svg" },
  ]);
  return (
    <div className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {clients.map((client) => (
            <ClientItem key={client.key} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Clients;
