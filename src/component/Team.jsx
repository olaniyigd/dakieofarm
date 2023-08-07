import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Topbar from './Topbar'

const Team = () => {
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
        Our Team
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
            Our Team
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <p className="fs-5 fw-bold text-primary">Our Team</p>
        <h1 className="display-5 mb-5">
          Dedicated &amp; Experienced Team Members
        </h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item rounded">
            <img className="img-fluid" src="img/team-1.jpg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Doris Jordan</h4>
              <p className="text-primary">Landscape Designer</p>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item rounded">
            <img className="img-fluid" src="img/team-2.jpg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Johnny Ramirez</h4>
              <p className="text-primary">Garden Designer</p>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item rounded">
            <img className="img-fluid" src="img/team-3.jpg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Diana Wagner</h4>
              <p className="text-primary">Senior Gardener</p>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
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

export default Team