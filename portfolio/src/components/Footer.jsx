import React from 'react'

export default function Footer() {
	return (
	<div className='bg-black text-white p-4 mt-4'>
		<div className="footer-section">
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4"
      >
		{/* copyright text */}
        <p className="col-md-4 mb-0 text-body-secondary">
          &copy; 2025 Company, Inc
        </p>
        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          aria-label="Bootstrap"
        >
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">Lesley, Built With React.</a>
          </li>
        </ul>
      </footer>
    </div>
	</div> 
	)
}
