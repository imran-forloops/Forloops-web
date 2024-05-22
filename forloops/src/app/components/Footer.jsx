import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* <!-- tp-footer-area-start --> */}
      <div className="tp-footer__area theme-bg pb-50">
        <div
          className="tp-footer-bottom__area wow tpfadeUp"
          data-wow-duration=".9s"
          data-wow-delay=".9s"
        >
          <div className="container">
            <div className="tp-footer-bottom__border-top pt-40">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-6 col-12 order-2 order-lg-1 text-center text-md-start">
                  <div className="tp-footer-bottom__logo">
                    <Link href="/">
                      <Image
                        src="/img/logo/logo-white.png"
                        width={100}
                        height={100}
                        alt="forloops logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12 col-12 order-1 order-lg-2 d-block">
                  <div className="tp-footer-bottom__menu">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/faq">Faq</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-12 order-2 order-lg-3 text-center text-md-end">
                  <div className="tp-footer-bottom__social">
                    <ul>
                      <li>
                        <Link href="https://www.linkedin.com/company/98603088/">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
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
