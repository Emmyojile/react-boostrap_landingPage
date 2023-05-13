

function Service () {
    return (
        <>
         <section id="services" className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit.
                Quasi illum soluta fugit explicabo voluptatum doloribus.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <card className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-subtract"></i>
                <h3 className="card-title">Best Quality</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis maiores ad labore illo sed dolor, tempora, minima
                  reprehenderit placeat suscipit earum? Sunt quas excepturi a!
                </p>
                <button className="btn btn-warning text-dark">Read More</button>
              </div>
            </card>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <card className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-slack"></i>
                <h3 className="card-title">Sustainability</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis maiores ad labore illo sed dolor, tempora, minima
                  reprehenderit placeat suscipit earum? Sunt quas excepturi a!
                </p>
                <button className="btn btn-warning text-dark">Read More</button>
              </div>
            </card>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <card className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-playstation"></i>
                <h3 className="card-title">Integrity</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis maiores ad labore illo sed dolor, tempora, minima
                  reprehenderit placeat suscipit earum? Sunt quas excepturi a!
                </p>
                <button className="btn btn-warning text-dark">Read More</button>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Service