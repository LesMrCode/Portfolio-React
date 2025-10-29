import React from 'react'

export default function Hero() {
  return (
    // hero section //
    <section id="hero">
      <div className="hero">
        {/* center hero content */}
        <div className="px-4 py-5 my-5 text-center">
          {/* main heading of the section */}
          <h1 className="display-5 fw-bold text-body-emphasis">Welcome, to my digital library</h1>
          <div className="col-lg-6 mx-auto">
            {/* description of the webpages contents */}
            <p className="lead mb-4">
              A collection of all my digital projects and skills.This library not only showcases my work but also shows you my journey as an aspiring software developer.
            </p>
            {/* call to action buttons */}
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="#projects">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                  View My Projects
                </button>
              </a>
              <a href="#contact">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
