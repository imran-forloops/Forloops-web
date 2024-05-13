import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
// import "../assets/css/style.css";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
  return (
    <header>
      {/* <!-- tp-header-area-start --> */}
      <div class="tp-header__top-area theme-bg tp-header__space-3 d-none d-sm-block">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xxl-8 col-xl-8 col-lg-6 col-md-6 col-6">
              <div class="tp-header__top-left">
                <a href="tel:+923218414635">
                  <svg
                    width="14"
                    height="19"
                    viewBox="0 0 14 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2" r="2" fill="#3EB7FD" />
                    <circle cx="7" cy="2" r="2" fill="#3EB7FD" />
                    <circle cx="12" cy="2" r="2" fill="#3EB7FD" />
                    <circle cx="12" cy="7" r="2" fill="#3EB7FD" />
                    <circle cx="12" cy="12" r="2" fill="#3EB7FD" />
                    <circle cx="7" cy="7" r="2" fill="#3EB7FD" />
                    <circle cx="7" cy="12" r="2" fill="#3EB7FD" />
                    <circle cx="7" cy="17" r="2" fill="#3EB7FD" />
                    <circle cx="2" cy="7" r="2" fill="#3EB7FD" />
                    <circle cx="2" cy="12" r="2" fill="#3EB7FD" />
                  </svg>
                  <span>
                    Help Desk : <b class="frist-child">+92-321-8414635</b>
                  </span>
                </a>
                <a class="last-child" href="#">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 7.3125C16 6.68359 15.6445 6.10938 15.125 5.80859V1.65234C15.125 1.40625 14.9336 0.75 14.25 0.75C14.0312 0.75 13.8398 0.832031 13.7031 0.96875L11.3516 2.82812C10.2031 3.75781 8.72656 4.25 7.25 4.25H2C1.01562 4.25 0.25 5.04297 0.25 6V8.625C0.25 9.60938 1.01562 10.375 2 10.375H2.90234C2.875 10.6758 2.84766 10.9766 2.84766 11.25C2.84766 12.3438 3.09375 13.3828 3.55859 14.2852C3.69531 14.5859 3.99609 14.75 4.32422 14.75H6.34766C7.05859 14.75 7.49609 13.957 7.05859 13.3828C6.62109 12.7812 6.34766 12.0703 6.34766 11.25C6.34766 10.9492 6.40234 10.6758 6.45703 10.375H7.25C8.72656 10.375 10.2031 10.8945 11.3516 11.8242L13.7031 13.6836C13.8125 13.793 14.0586 13.875 14.2227 13.875C14.9062 13.875 15.0977 13.2734 15.0977 13V8.84375C15.6445 8.54297 16 7.96875 16 7.3125ZM13.375 11.1953L12.4453 10.457C10.9688 9.28125 9.13672 8.625 7.25 8.625V6C9.13672 6 10.9688 5.37109 12.4453 4.19531L13.375 3.45703V11.1953Z"
                      fill="#3EB7FD"
                    />
                  </svg>
                  <span>
                    <b>Now Hiring: </b>Are you a driven and motivated AI/ML
                    Engineer or Full Stack Engineer?
                  </span>
                </a>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-6">
              <div class="tp-header__top-right text-end">
                <a href="https://www.linkedin.com/company/98603088/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="header-sticky"
        class="tp-header__area tp-header__space-3 tp-header__bottom tp-header__menu-space p-relative"
      >
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-6 col-7">
              <div class="tp-header__logo">
                <a href="index.html">
                  <Image
                    src="/logo-black.png"
                    alt="forloops logo"
                    width={200}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <div class="col-xl-7 col-lg-7 d-none d-lg-block z-index-5">
              <div class="tp-header__main-menu tp-header__black-menu tp-header__menu-3">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link href="index.html">Home</Link>
                    </li>
                    <li>
                      <a href="/about">About</a>
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
                </nav>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-5">
              <div class="tp-header__right-two d-flex align-items-center justify-content-end">
                <a
                  class="tp-btn-blue-square d-none d-md-block"
                  href="contact.html"
                >
                  <span>Get Started</span>
                </a>
                <a
                  class="tp-header__bars tp-menu-bar d-lg-none"
                  href="javascript:void(0)"
                >
                  <i class="far fa-bars"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
