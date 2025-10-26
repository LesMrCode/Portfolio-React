import React from 'react'

export default function Hero() {
	return (
    <section id="hero">
        <div class="hero">
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">Welcome, to my digital library</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
           A collection of all my digital projects and skills.This library not only showcases my work but also shows you my journey as an aspiring software developer.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="#projects">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              View My Projects 
            </button>
          </a>
          <a href="#contact">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
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
