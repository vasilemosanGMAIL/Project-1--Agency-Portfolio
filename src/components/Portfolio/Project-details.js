const ModalItem = ({detail}) => {
    return (
      <div className="portfolio-modal modal fade" id={detail.id} tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                            {/*<!-- Project details-->*/}
                      <h2 className="text-uppercase">{detail.name}</h2>
                        <p className="item-intro text-muted">{detail.subtitle}</p>
                        <img className="img-fluid d-block mx-auto" src={detail.imgSrc} alt="..." />
                        <p>{detail.text}</p>
                        <ul className="list-inline">
                            <li>
                            <strong>Client:</strong>
                                {detail.client}
                            </li>
                            <li>
                            <strong>Category:</strong>
                            {detail.category}
                            </li>
                        </ul>
                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                        <i className="fas fa-times me-1"></i>
                            Close Project
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}
export default ModalItem