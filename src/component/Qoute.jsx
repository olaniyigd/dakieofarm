import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'

const Qoute = () => {
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
        Free Quote
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
            Free Quote
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Quote Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <p className="fs-5 fw-bold text-primary">Free Quote</p>
        <h1 className="display-5 mb-5">Get A Free Quote</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div
            className="bg-light rounded p-4 p-sm-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="gname"
                    placeholder="Gurdian Name"
                  />
                  <label htmlFor="gname">Your Name</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control border-0"
                    id="gmail"
                    placeholder="Gurdian Email"
                  />
                  <label htmlFor="gmail">Your Email</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="cname"
                    placeholder="Child Name"
                  />
                  <label htmlFor="cname">Your Mobile</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="cage"
                    placeholder="Child Age"
                  />
                  <label htmlFor="cage">Service Type</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control border-0"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary py-3 px-4" type="submit">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
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

export default Qoute