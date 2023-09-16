

function Contact(params) {
    return(
        <>
        <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit.
                Quasi illum soluta fugit explicabo voluptatum doloribus.
              </p>
            </div>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-md-12 p-0 pt-4 pb-4">
            <form action="#" className="bg-light p-4 m-auto">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email Here"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Your Query Here"
                    ></textarea>
                  </div>
                </div>

                <button className="btn btn-warning btn-lg btn-block mt-3">
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}

export default Contact