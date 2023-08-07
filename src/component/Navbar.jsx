import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
    <a
      href="/"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
     <img style={{height:"70px", width:"170px"}} src="/DKLogo.jpg" alt="Imag" />
    </a>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="/" className="nav-item nav-link active">
          Home
        </a>
        <a href="/about" className="nav-item nav-link">
          About
        </a>
        <a href="/service" className="nav-item nav-link">
          Services
        </a>
        <a href="/project" className="nav-item nav-link">
          Projects
        </a>
        <a href="/contact" className="nav-item nav-link">
          Contact
        </a>
      </div>
      <a
        href="/qoute"
        className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
      >
        Get A Quote
        <i className="fa fa-arrow-right ms-3" />
      </a>
    </div>
  </nav>
  )
}

export default Navbar