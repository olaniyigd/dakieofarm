import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Topbar from '../Topbar'

const Projects = () => {
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
    className="container-fluid bg-danger py-5 mb-5" style={{backgroundImage: "url('/dakieologoblack.jpeg')"}}
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white mb-4">
        Products
      </h1>
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Projects Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto "
        style={{ maxWidth: 500 }}
      >
        <p className="fs-5 fw-bold text-primary">Our Products</p>
        <h1 className="display-5 mb-5">Some Of Our Products</h1>
      </div>
      <div className="row ">
        <div className="col-12 text-center">
          <ul className="list-inline rounded mb-5" id="portfolio-flters">
            <li className="mx-2 active" data-filter="*">
              All
            </li>
            <li className="mx-2" data-filter=".first">
              Uda
            </li>
            <li className="mx-2" data-filter=".second">
              Balami
            </li>
            <li className="mx-2" data-filter=".second">
              Yankasa
            </li>
          </ul>
        </div>
      </div>
      <div className="row g-4 portfolio-container">
        <div
          className="col-lg-4 col-md-6 portfolio-item first "
        >
          <div className="portfolio-inner rounded">
            <img className="img-fluid" src="img/service-1.jpg" alt="" />
            <div className="portfolio-text">
              <h4 className="text-white mb-4">Landscaping</h4>
              <div className="d-flex">
                <a
                  className="btn btn-lg-square rounded-circle mx-2"
                  href="img/service-1.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-lg-square rounded-circle mx-2" href="/">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second "
        >
          <div className="portfolio-inner rounded">
            <img className="img-fluid" src="img/service-2.jpg" alt="" />
            <div className="portfolio-text">
              <h4 className="text-white mb-4">Pruning plants</h4>
              <div className="d-flex">
                <a
                  className="btn btn-lg-square rounded-circle mx-2"
                  href="img/service-2.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-lg-square rounded-circle mx-2" href="/">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item first "
        >
          <div className="portfolio-inner rounded">
            <img className="img-fluid" src="img/service-3.jpg" alt="" />
            <div className="portfolio-text">
              <h4 className="text-white mb-4">Irrigation &amp; Drainage</h4>
              <div className="d-flex">
                <a
                  className="btn btn-lg-square rounded-circle mx-2"
                  href="img/service-3.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-lg-square rounded-circle mx-2" href="/">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second "
        >
          <div className="portfolio-inner rounded">
            <img className="img-fluid" src="img/service-4.jpg" alt="" />
            <div className="portfolio-text">
              <h4 className="text-white mb-4">Garden Maintenance</h4>
              <div className="d-flex">
                <a
                  className="btn btn-lg-square rounded-circle mx-2"
                  href="img/service-4.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-lg-square rounded-circle mx-2" href="/">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item first "
        >
          <div className="portfolio-inner rounded">
            <img className="img-fluid" src="img/service-5.jpg" alt="" />
            <div className="portfolio-text">
              <h4 className="text-white mb-4">Green Technology</h4>
              <div className="d-flex">
                <a
                  className="btn btn-lg-square rounded-circle mx-2"
                  href="img/service-5.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-lg-square rounded-circle mx-2" href="/">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second "
        >
          <div className="portfolio-inner rounded">
            <img className="img-fluid" src="img/service-6.jpg" alt="" />
            <div className="portfolio-text">
              <h4 className="text-white mb-4">Urban Gardening</h4>
              <div className="d-flex">
                <a
                  className="btn btn-lg-square rounded-circle mx-2"
                  href="img/service-6.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a className="btn btn-lg-square rounded-circle mx-2" href="/">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Projects End */}
  {/* Footer Start */}
  <Footer />
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="border-bottom" href="/">
            dakieofarm.com
          </a>
          , All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            DakieoDev
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a
    href="/"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
</>

  )
}

export default Projects