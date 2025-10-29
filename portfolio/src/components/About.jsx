import React from 'react'
import LCV from "./LCV.docx"

export default function About() {
	return (
    <section id="about" class="about-section">
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
          </div>
     <div class="about-header">
		<div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              About Me 
            </h1>
            </div>
            <div className='max-w-2xl text-center font-bold'>
            <p className="text-lg leading-relaxed text-gray-700">
              I’m a passionate software development student at who is a vibrant team player and enjoys problem solving. I’m also excited to apply what I’ve learned in my course to real-world projects and build impactful tech solutions
            </p>
            </div> 
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href={LCV} class="btn btn-primary"> Download CV </a>
            </div>
          </div>
        </div>
        </div> 
        </section>
	)
}
