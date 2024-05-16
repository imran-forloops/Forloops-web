import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const page = () => {
  return (
    <main>
      {/* <!-- breadcrumb area start --> */}
      <div
        className="breadcrumbarea breadcrumb-height p-relative grey-bg"
        style={{
          backgroundImage: `url('/img/breadcrumb/breadcrumb.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#contact">
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">Contact us</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="index.html">Home</a>
                  </span>
                  <span className="dvdr">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  <span>Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb area end --> */}

      {/* <!-- contact area start --> */}
      <div className="tp-conatact-area pt-125 pb-125">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div className="contact-info text-center">
                <span className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <h4>Visit Us</h4>
                <span>
                  <a
                    href="https://www.google.com/maps/place/701+Tillery+St+12+1646,+Austin,+TX+78702,+USA/"
                    target="_blank"
                  >
                    701 Tillery Street Unit 12-1646
                    <br />
                    Austin, TX 78702, USA
                  </a>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div className="contact-info text-center">
                <span className="contact-icon">
                  <i className="fas fa-phone-volume"></i>
                </span>
                <h4>Contact Us</h4>
                <span>
                  <a href="tel:+923218414635">+92-321-8414635</a>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div className="contact-info text-center">
                <span className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <h4>Email Us</h4>
                <span>
                  <a href="mailto:info@forloops.co">info@forloops.co</a>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div id="contact" className="contact-form-box pt-60">
                <div className="contact-form-box text-center">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <h4 className="contact-title">Send us a Message</h4>
                    </div>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="tp-contact-input">
                          <input
                            type="text"
                            placeholder="Enter your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="tp-contact-input">
                          <input
                            type="email"
                            placeholder="Enter your Mail"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="tp-contact-input">
                          <input
                            type="text"
                            placeholder="Enter your Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="tp-contact-input">
                          <input type="text" placeholder="Subject" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tp-contact-input">
                          <textarea
                            placeholder="Type your Message"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="tp-submit-button">
                          <button type="submit" className="tp-btn-blue-square">
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact area end --> */}
    </main>
  );
};

export default page;
