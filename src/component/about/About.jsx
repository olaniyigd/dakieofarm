import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Topbar from '../Topbar'

const About = () => {
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
        About Us
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
            About
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-end">
        <div className="col-lg-5 col-md-5 ">
          <img
            className="img-fluid rounded"
            style={{paddingBottom:"200px", height:"100%", width:"100%"}}
            src="/DKLogo.jpg"
            alt='abut'
          />
        </div>
        <div className="col-lg-7 col-md-7 ">
          <h1 className="display-5 mb-4">Executive Summary</h1>
          <p className="mb-4">
          DAKIEO Farm is a livestock farm company, which is registered company under the Corporate Affairs Commission (CAC), Nigeria. DAKIEO Farm is a start-up Farm that is involved in production of quality and affordable Ram, Sheep, and Cow targeting consumers in southwestern Nigeria.  Our Sheep and Ram breeding company is involved in upgrading and multiplying Sheep and Rams with local adaptability and improved performance and yield, innovative breeding technology of artificial insemination and careful selection.
We rare Sheep and Ram breeds like Balami, Uda, West African Dwarf sheep and Yankasa. We currently rear 10 of these mixed varieties for sales. Our medium of farming allows for healthy produce and productive yield. While poor farm yield has always been the major problem facing sheep farms production, at DAKIEO Farm, we are providing the right solution through improved nutrition (silage and concentrate supplement), artificial insemination of local breeds and selection of up-to-date rearing techniques.
The entrepreneur behind the vision of DAKIEO Farm is a vast agriculturist, majoring on livestock farming. As a way of practice, he has devoted most of his time and resources in rearing livestock.   Owning a first degree in Linguistics at the University of Ilorin, Ilorin, Kwara State, Nigeria. 
DAKIEO Farm is owned by MR. FARUQ OLANIYI GBADEGESIN.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Facts Start */}
  <div
    className="container-fluid"
  >
    <h5 className="display-5 mb-4">The Benefits of Our Products And Service</h5>
          <p className="mb-4">
          1. High quality and affordable Ram and Cow <br/>
          2. Excellent Customer Care Services <br/>
          3. Fair and best possible prices

          </p>
  </div>

  <div
    className="container-fluid"
  >
    <h5 className="display-5 mb-4">Vision</h5>
          <p className="mb-4">
          To be the leading livestock farm in the environs we are situated in Nigeria through the provision of excellent sales services and products.

          </p>
  </div>

  <div
    className="container-fluid"
  >
    <h5 className="display-5 mb-4">Our Mission</h5>
          <p className="mb-4">
          Our mission is to sell our livestock by products in commercial quantities both within Nigeria and across Africa. DAKIEO intends to build Sheep, Ram and Cow rearing business that can favorably compete with other leading ram/sheep rearing brands in Nigeria and Africa as a whole.

          </p>
  </div>
  {/* Facts End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto"
        style={{ maxWidth: 500 }}
      >
        <p className="fs-5 fw-bold text-primary">Our Team</p>
        <h1 className="display-5 mb-5">
          Dedicated &amp; Experienced Team Members
        </h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="team-item rounded">
            <img className="img-fluid" src="/inioluwa.jpeg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Inioluwa Ayelabola</h4>
              <p className="text-primary">Co-Founder</p>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle me-2" href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" >
          <div className="team-item rounded">
            <img className="img-fluid" src="/dakieologoblack.jpeg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Olaniyi Gbadegesin</h4>
              <p className="text-primary">Founder</p>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle me-2" href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <div className="team-item rounded">
            <img className="img-fluid" src="/inioluwa.jpeg" alt="" />
            <div className="team-text">
              <h4 className="mb-0">Inioluwa Ayelabola</h4>
              <p className="text-primary">Accountant</p>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle me-2" href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square rounded-circle me-2" href="/">
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
          <a className="border-bottom" href="/">
            dakeiofarm.com
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

export default About