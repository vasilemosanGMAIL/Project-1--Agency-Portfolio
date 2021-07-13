const ClientItem = ({ client }) => {
  return (
    <div className="col-md-3 col-sm-6 my-3">
      <a href={client.href}>
        <img
          className="img-fluid img-brand d-block mx-auto"
          src={client.imgSrc}
          alt="..."
        />
      </a>
    </div>
  );
};
export default ClientItem;
