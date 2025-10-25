import React from 'react'


export default function Contact() {
	return ( 
       <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Let's Work Together 
            </h1>
            <p class="col-lg-10 fs-4">
              If you have a project in mind or would like to collaborate, feel free to reach out!
            </p>
           <h2>Connect with Me:</h2>
           <p> </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingMessage"
                  placeholder="Message"
                />
                <label for="floatingMessage">Message</label>
              </div>
              <div class="checkbox mb-3"> 
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Send Message
              </button>
              <hr class="my-4" />
              <small class="text-body-secondary"
                >By clicking Sign up, you agree to the terms of use.</small
              >
            </form>
          </div>
        </div>
      </div> 
	)
}
