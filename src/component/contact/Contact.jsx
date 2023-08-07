import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Topbar from '../Topbar'

const Contact = () => {
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
        Contact Us
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
            Contact
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <p className="fs-5 fw-bold text-primary">Contact Us</p>
          <h1 className="display-5 mb-5">
            If You Have Any Query, Please Contact Us
          </h1>
          <p className="mb-4">
            The contact form is currently active. Fill the form below and send
          </p>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary py-3 px-4" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          className="col-lg-6 wow fadeIn"
          data-wow-delay="0.5s"
          style={{ minHeight: 450 }}
        >
          <div className="position-relative rounded overflow-hidden h-100">
            <iframe
              className="position-relative w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder={0}
              style={{ minHeight: 450, border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
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

export default Contact