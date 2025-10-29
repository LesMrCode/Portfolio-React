import React from 'react'
export default function Header() {
    return (
        <section className="header-section">
        {/* main header section with a background colour and abit of padding */}
        <header
          className=" bg-black d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom "
        >
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <svg
                class="bi"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
          </div>
          <ul
            className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"
          >
            {/* navigation menu and its respective links to the different sections of the webpage */}
            <li><a href="#hero" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#about" className="nav-link px-2">About</a></li>
            <li><a href="#skills" className="nav-link px-2">Skills</a></li>
            <li><a href="#projects" className="nav-link px-2">Projects</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>
          {/* a call to action button */}
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
            Get In Touch
            </button>
          </div>
        </header>
        </section>
    )
}