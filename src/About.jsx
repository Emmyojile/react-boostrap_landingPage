

function About() {
    return (
        <>
        <section className="about-section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="about-img">
              <img src="images/about.jpg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2>
                We Provide Best Quality <br />
                Services Ever
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam soluta consequuntur sit harum quo, excepturi adipisci
                veritatis voluptates repudiandae eaque libero ipsa dignissimos
                beatae laborum qui nobis est magni eum dolorum? Repellat eius
                accusamus dicta in possimus provident? Incidunt, ut!
              </p>
              <a href="#" className="btn btn-warning">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default About