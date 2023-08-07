import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Topbar from '../Topbar'

const Service = () => {
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
        Services
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
            Service
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto"
        style={{ maxWidth: 500 }}
      >
        <p className="fs-5 fw-bold text-primary">Our Services</p>
        <h3 className="display-5 mb-5">We rare Sheep and Ram breeds like:</h3>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 ">
          <div className="service-item rounded d-flex h-100">
            <div className="service-img rounded">
              <img className="img-fluid" src="img/service-1.jpg" alt="" />
            </div>
            <div className="service-text rounded p-5">
              <div className="btn-square rounded-circle mx-auto mb-3">
                <img
                  className="img-fluid"
                  src="img/icon/icon-3.png"
                  alt="Icon"
                />
              </div>
              <h4 className="mb-3">Balami</h4>
              <p className="mb-4">
              It is the largest breed found in Nigeria, they are usually tall and huge, all white with large droopy ears. Found in Dakieo farm.
              </p>
              <a className="btn btn-sm" href="/">
                <i className="fa fa-plus text-primary me-2" />
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <div className="service-item rounded d-flex h-100">
            <div className="service-img rounded">
              <img className="img-fluid" src="img/service-2.jpg" alt="" />
            </div>
            <div className="service-text rounded p-5">
              <div className="btn-square rounded-circle mx-auto mb-3">
                <img
                  className="img-fluid"
                  src="img/icon/icon-6.png"
                  alt="Icon"
                />
              </div>
              <h4 className="mb-3">Uda</h4>
              <p className="mb-4">
              This breed is long legged and large, it usually has two colour combinations black and white or brown and white. It could grow to an enormous size.
              </p>
              <a className="btn btn-sm" href="/">
                <i className="fa fa-plus text-primary me-2" />
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item rounded d-flex h-100">
            <div className="service-img rounded">
              <img className="img-fluid" src="img/service-3.jpg" alt="" />
            </div>
            <div className="service-text rounded p-5">
              <div className="btn-square rounded-circle mx-auto mb-3">
                <img
                  className="img-fluid"
                  src="img/icon/icon-5.png"
                  alt="Icon"
                />
              </div>
              <h4 className="mb-3">Yankasa</h4>
              <p className="mb-4">
              This breed is the common type everyone knows, it looks like a cross between an Uda and a Balami but not as big as them. It usually has black patches on its legs, around the muzzle or eyes.
              </p>
              <a className="btn btn-sm" href="/">
                <i className="fa fa-plus text-primary me-2" />
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
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

export default Service