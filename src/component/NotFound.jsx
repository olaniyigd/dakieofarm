import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Topbar from './Topbar'

const NotFound = () => {
  return (
    <>
  {/* Topbar Start */}
  <Topbar />
  {/* Topbar End */}
  {/* Navbar Start */}
  <Navbar />
  {/* Navbar End */}
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white mb-4 animated slideInDown">
        404 Error
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            404 Error
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* 404 Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <i className="bi bi-exclamation-triangle display-1 text-primary" />
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-4">
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <a className="btn btn-primary py-3 px-4" href="">
            Go Back To Home
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* 404 End */}
  {/* Footer Start */}
  <Footer />
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="border-bottom" href="#">
            Your Site Name
          </a>
          , All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
</>

  )
}

export default NotFound