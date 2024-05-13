import React from "react";

const page = () => {
  return (
    <main>
      {/* <!-- breadcrumb area start --> */}
      <div
        class="breadcrumb__area breadcrumb-height p-relative grey-bg"
        data-background="/img/breadcrumb/breadcrumb.jpg"
      >
        <div class="breadcrumb__scroll-bottom smooth">
          <a href="#contact">
            <i class="far fa-arrow-down"></i>
          </a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="breadcrumb__content text-center">
                <h3 class="breadcrumb__title">Contact us</h3>
                <div class="breadcrumb__list">
                  <span>
                    <a href="index.html">Home</a>
                  </span>
                  <span class="dvdr">
                    <i class="fa fa-angle-right"></i>
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
      <div class="tp-conatact-area pt-125 pb-125">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div class="contact-info text-center">
                <span class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
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
            <div class="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div class="contact-info text-center">
                <span class="contact-icon">
                  <i class="fas fa-phone-volume"></i>
                </span>
                <h4>Contact Us</h4>
                <span>
                  <a href="tel:+923218414635">+92-321-8414635</a>
                </span>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 mb-30">
              <div class="contact-info text-center">
                <span class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <h4>Email Us</h4>
                <span>
                  <a href="mailto:info@forloops.co">info@forloops.co</a>
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <div id="contact" class="contact-form-box pt-60">
                <div class="contact-form-box text-center">
                  <div class="row justify-content-center">
                    <div class="col-8">
                      <h4 class="contact-title">Send us a Message</h4>
                    </div>
                  </div>
                  <form action="#">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="tp-contact-input">
                          <input
                            type="text"
                            placeholder="Enter your Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="tp-contact-input">
                          <input
                            type="email"
                            placeholder="Enter your Mail"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="tp-contact-input">
                          <input
                            type="text"
                            placeholder="Enter your Number"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="tp-contact-input">
                          <input type="text" placeholder="Subject" required />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="tp-contact-input">
                          <textarea
                            placeholder="Type your Message"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="tp-submit-button">
                          <button type="submit" class="tp-btn-blue-square">
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
