import React from 'react'

export default function Contact() {
  return (
    <section id="contact" class="contact-section">
      <div class="contact-header">  
      <h1  className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Let's Work Together</h1>
       <p className="col-lg-10 fs-4">If you have a project in mind or would like to collaborate, feel free to reach out!</p>
       </div>

      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Connect With Me:</h1>
        <h5>Email: coach.flownetic@gmail.com</h5>
        <a href="https://www.linkedin.com/in/lesley-eric-m-408319372/" class="btn btn-primary"> LinkedIn </a>
            <a href="https://github.com/LesMrCode" class="btn btn-primary"> GitHub </a>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingMessage" placeholder="Message" />
                <label htmlFor="floatingMessage">Message</label>
              </div>

              <div className="checkbox mb-3"></div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
