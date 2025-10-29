import React from 'react'
import LCV from "./LCV.pdf" //import CV file//

export default function About() {
  return (
    //Main section for the about me part//
    <section id="about" className="about-section">
      <div className="container col-xxl-8 px-4 py-5">
        {/* Center the text and content in this section */}
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
          </div>
          {/*The text content for the about me section */}
          <div className="about-header">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                About Me
              </h1>
            </div>
            <div className='max-w-2xl text-center font-bold'>
              {/* Paragraph describing myself */}
              <p className="text-lg leading-relaxed text-gray-700">
                I’m a passionate software development student at who is a vibrant team player and enjoys problem solving. I’m also excited to apply what I’ve learned in my course to real-world projects and build impactful tech solutions
              </p>
            </div>
            {/* button that is linked to the cv file */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href={LCV} download={LCV} className="btn btn-primary"> Download CV </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
