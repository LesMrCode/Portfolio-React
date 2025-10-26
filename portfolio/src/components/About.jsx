import React from 'react'

export default function About() {
	return (
    <section id="about" class="about-section">
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="bootstrap-themes.png"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>

		<div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              About Me 
            </h1>
            <p class="lead">
              I’m a passionate software development student at who is a vibrant team player and enjoys problem solving. I’m also excited to apply what I’ve learned in my course to real-world projects and build impactful tech solutions
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Download CV
              </button>
            </div>
          </div>
        </div>
        </div> 
        </section>
	)
}
