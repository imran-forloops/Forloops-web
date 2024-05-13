import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* <!-- tp-footer-area-start --> */}
      <div class="tp-footer__area theme-bg pb-50">
        <div
          class="tp-footer-bottom__area wow tpfadeUp"
          data-wow-duration=".9s"
          data-wow-delay=".9s"
        >
          <div class="container">
            <div class="tp-footer-bottom__border-top pt-40">
              <div class="row align-items-center">
                <div class="col-xl-2 col-lg-2 col-md-6 col-12 order-2 order-lg-1 text-center text-md-start">
                  <div class="tp-footer-bottom__logo">
                    <a href="index.html">
                      <Image
                        src="/img/logo/logo-white.png"
                        width={100}
                        height={100}
                        alt="forloops logo"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-12 col-12 order-1 order-lg-2 d-block">
                  <div class="tp-footer-bottom__menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-12 order-2 order-lg-3 text-center text-md-end">
                  <div class="tp-footer-bottom__social">
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/company/98603088/">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- tp-footer-area-end --> */}
    </footer>
  );
};

export default Footer;
