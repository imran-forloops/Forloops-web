import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const page = () => {
  return (
    <>
      {/* <!-- breadcrumb area start --> */}
      <div
        class="breadcrumb__area breadcrumb-height p-relative grey-bg"
        data-background="assets/img/breadcrumb/breadcrumb.jpg"
      >
        <div class="breadcrumb__scroll-bottom smooth">
          <Link href="#project">
            <i className="fa-solid fa-arrow-down"></i>
          </Link>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="breadcrumb__content text-center">
                <h3 class="breadcrumb__title">Project Page</h3>
                <div class="breadcrumb__list">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span class="dvdr">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  <span>Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb area end --> */}
      {/* <!-- tp-project-area-start --> */}
      <div class="tp-project__area tp-project__border pt-120 pb-90">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div id="project" class="tp-project__item mb-30">
                <div class="tp-project__thumb fix">
                  <Image
                    src="/img/project/project-1.jpg"
                    width={400}
                    height={300}
                    className=""
                    alt=""
                  />
                </div>
                <div class="tp-project__content">
                  <h3 class="tp-project__title">
                    <a href="/">Product Enginnering</a>
                  </h3>
                  <p>
                    At Quitox we specialize in designing, building, shipping...
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div class="tp-project__item mb-30">
                <div class="tp-project__thumb fix">
                  <Image
                    src="/img/project/project-2.jpg"
                    width={400}
                    height={300}
                    className=""
                    alt=""
                  />
                </div>
                <div class="tp-project__content">
                  <h3 class="tp-project__title">
                    <a href="/">Web Design Company</a>
                  </h3>
                  <p>
                    At Quitox we specialize in designing, building, shipping...
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div class="tp-project__item mb-30">
                <div class="tp-project__thumb fix">
                  <Image
                    src="/img/project/project-3.jpg"
                    width={400}
                    height={300}
                    className=""
                    alt=""
                  />
                </div>
                <div class="tp-project__content">
                  <h3 class="tp-project__title">
                    <a href="/">Business Setup & Company</a>
                  </h3>
                  <p>
                    At Quitox we specialize in designing, building, shipping...
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay="1s"
            >
              <div class="tp-project__item mb-30">
                <div class="tp-project__thumb fix">
                  <Image
                    src="/img/project/project-4.jpg"
                    width={400}
                    height={300}
                    className=""
                    alt=""
                  />
                </div>
                <div class="tp-project__content">
                  <h3 class="tp-project__title">
                    <a href="/">Mainland Company Formation</a>
                  </h3>
                  <p>
                    At Quitox we specialize in designing, building, shipping...
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay="1.2s"
            >
              <div class="tp-project__item mb-30">
                <div class="tp-project__thumb fix">
                  <Image
                    src="/img/project/project-5.jpg"
                    width={400}
                    height={300}
                    className=""
                    alt=""
                  />
                </div>
                <div class="tp-project__content">
                  <h3 class="tp-project__title">
                    <a href="#">Digital Solution company</a>
                  </h3>
                  <p>
                    At Quitox we specialize in designing, building, shipping...
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay="1.4s"
            >
              <div class="tp-project__item mb-30">
                <div class="tp-project__thumb fix">
                  <Image
                    src="/img/project/project-6.jpg"
                    width={400}
                    height={300}
                    className=""
                    alt=""
                  />
                </div>
                <div class="tp-project__content">
                  <h3 class="tp-project__title">
                    <a href="/">Data Analysis</a>
                  </h3>
                  <p>
                    At Quitox we specialize in designing, building, shipping...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          {/* <!-- tp-project-area-end --> */}
          

            {/* <!-- tp-support-area-start --> */}
  <div class="tp-support__area pt-120 pb-120 grey-bg p-relative">
    <div class="tp-support__bg">
      <img src="assets/img/faq/faq-bg-shape.png" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="tp-support__title-box text-center mb-70">
            <h3 class="tp-section-title">Need A Support? 🎧</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="tp-support__faq">
            <div class="tp-custom-accordio-2">
              <div class="accordion" id="accordionExample-2">
                <div class="accordion-items">
                  <h2 class="accordion-header" id="heading-1">
                    <button class="accordion-buttons " type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                      How Do I Change My Email or Password?
                    </button>
                  </h2>
                  <div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="heading-1"
                       data-bs-parent="#accordionExample-2">
                    <div class="accordion-body">
                      Through the collaboration with customers in discussing needs and demand, we're able
                      to attain mutual understanding, gain customer trust <br /> to offer appropriate advice
                    </div>
                  </div>
                </div>
                <div class="accordion-items">
                  <h2 class="accordion-header" id="heading-2">
                    <button class="accordion-buttons collapsed  " type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
                      Can I Lock My Note App?
                    </button>
                  </h2>
                  <div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2"
                       data-bs-parent="#accordionExample-2">
                    <div class="accordion-body">
                      Through the collaboration with customers in discussing needs and demand, we're able
                      to attain mutual understanding, gain customer trust <br/> to offer appropriate advice
                    </div>
                  </div>
                </div>
                <div class="accordion-items">
                  <h2 class="accordion-header" id="heading-3">
                    <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
                      How About Data Security & NDA Agreement
                    </button>
                  </h2>
                  <div id="collapse-3" class="accordion-collapse collapse " aria-labelledby="heading-3"
                       data-bs-parent="#accordionExample-2">
                    <div class="accordion-body">
                      Through the collaboration with customers in discussing needs and demand, we're able
                      to attain mutual understanding, gain customer trust <br/> to offer appropriate advice
                    </div>
                  </div>
                </div>
                <div class="accordion-items">
                  <h2 class="accordion-header" id="heading-4">
                    <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
                      Can My Premium License Be Used For All Devices?
                    </button>
                  </h2>
                  <div id="collapse-4" class="accordion-collapse collapse " aria-labelledby="heading-4"
                       data-bs-parent="#accordionExample-2">
                    <div class="accordion-body">
                      Through the collaboration with customers in discussing needs and demand, we're able
                      to attain mutual understanding, gain customer trust <br/> to offer appropriate advice
                    </div>
                  </div>
                </div>
                <div class="accordion-items">
                  <h2 class="accordion-header" id="heading-5">
                    <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
                      What makes LessAccounting better than the rest?
                    </button>
                  </h2>
                  <div id="collapse-5" class="accordion-collapse collapse " aria-labelledby="heading-5"
                       data-bs-parent="#accordionExample-2">
                    <div class="accordion-body">
                      Through the collaboration with customers in discussing needs and demand, we're able
                      to attain mutual understanding, gain customer trust <br/> to offer appropriate advice
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- tp-support-area-end --> */}
    </>
  );
};

export default page;
