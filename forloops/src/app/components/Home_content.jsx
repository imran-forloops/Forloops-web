import Image from "next/image";
import React from "react";

const Home_content = () => {
  return (
    <>
      <div class="tp-offcanvas-area">
        <div class="tpoffcanvas">
          <div class="tpoffcanvas__close-btn">
            <button class="close-btn">
              <i class="fal fa-times"></i>
            </button>
          </div>
          <div class="tpoffcanvas__logo">
            <a href="index.html">
              <Image
                src="/img/logo/logo-white.png"
                width={100}
                height={100}
                alt="forloops logo"
              />
            </a>
          </div>
          <div class="tpoffcanvas__text">
            <p>Amplify Your Success, Forloops Unlocks the Power of AI!</p>
            <p>
              Transforming businesses through custom AI, Generative AI, and
              Machine-learning solutions for growth and efficiency.
            </p>
          </div>
          <div class="mobile-menu"></div>
          <div class="tpoffcanvas__info">
            <h3 class="offcanva-title">Get In Touch</h3>
            <div class="tp-info-wrapper mb-20 d-flex align-items-center">
              <div class="tpoffcanvas__info-icon">
                <a href="#">
                  <i class="fal fa-envelope"></i>
                </a>
              </div>
              <div class="tpoffcanvas__info-address">
                <span>Email</span>
                <a href="mailto:info@forloops.co">info@forloops.co</a>
              </div>
            </div>
            <div class="tp-info-wrapper mb-20 d-flex align-items-center">
              <div class="tpoffcanvas__info-icon">
                <a href="#">
                  <i class="fal fa-phone-alt"></i>
                </a>
              </div>
              <div class="tpoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:+923218414635">+92-321-8414635</a>
              </div>
            </div>
            <div class="tp-info-wrapper mb-20 d-flex align-items-center">
              <div class="tpoffcanvas__info-icon">
                <a href="#">
                  <i class="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div class="tpoffcanvas__info-address">
                <span>Location</span>
                <a
                  href="https://www.google.com/maps/place/701+Tillery+St+12+1646,+Austin,+TX+78702,+USA/"
                  target="_blank"
                >
                  701 Tillery Street Unit 12-1646
                  <br />
                  Austin, TX 78702, USA
                </a>
              </div>
            </div>
          </div>
          <div class="tpoffcanvas__social">
            <div class="social-icon">
              <a href="https://www.linkedin.com/company/98603088/">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="body-overlay"></div>
      <main>
        {/* <!-- tp-slider-area-start --> */}
        <div class="tp-hero__area pt-100 pb-80 p-relative">
          <div
            class="tp-hero__shape-3-1 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <Image
              src="/img/hero/hero-shape-3-3.png"
              width={200}
              height={1000}
              alt="shape"
            />
          </div>
          <div
            class="tp-hero__shape-3-2 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <Image
              src="/img/hero/hero-shape-3-4.png"
              height={1000}
              width={200}
              alt="shape"
            />
          </div>
          <div class="container">
            <div class="row align-items-start">
              <div class="col-xl-6 col-lg-6">
                <div class="tp-hero__content-box">
                  <h3
                    class="tp-hero__title-lg pb-20 theme-color wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    Amplify Your Success, Forloops Unlocks the Power of AI!
                  </h3>
                  <p
                    class="wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    Transforming businesses through custom AI, Generative AI,
                    and Machine-learning solutions for growth and efficiency.
                  </p>
                </div>
                <div
                  class="tp-hero__button-box wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <a class="tp-btn-blue-square mb-20 mr-25" href="contact.html">
                    <span>Get Started</span>
                  </a>
                  <a class="tp-btn-pink mb-20" href="about.html">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
              <div
                class="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div class="tp-hero__wrapper-3 d-flex justify-content-center justify-content-lg-end">
                  <div class="tp-hero__thumb-3">
                    <Image
                      src="/img/hero/hero-3.jpg"
                      alt=""
                      width={500}
                      height={500}
                    />
                    <div class="tp-hero__thumb-shape-1">
                      <Image
                        src="/img/hero/hero-shape-3-1.png"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div class="tp-hero__thumb-shape-2">
                      <Image
                        src="/img/hero/hero-shape-3-2.png"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-service-area-start --> */}
        <div class="tp-service__area tp-service__space theme-bg-3 pt-120 pb-100">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="tp-service__section-wrapper d-flex justify-content-between">
                  <div class="tp-service__title-box ml-40">
                    <h3
                      class="tp-service__title wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >
                      Our Services
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="tp-service__slider-wrapper">
              <div class="tp-service__slider-active d-none">
                <div
                  class="tp-service__item wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div class="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-1.png"
                      width={200}
                      height={200}
                      alt="AI Consulting"
                    />
                  </div>
                  <div class="tp-service__content">
                    <h4 class="tp-service__title-sm">AI Consulting</h4>
                    <p>
                      Strategic AI Guidance for Business Advancement. Let&apos;s
                      Unlock Your Potential!
                    </p>
                  </div>
                </div>
                <div
                  class="tp-service__item wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <div class="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-2.png"
                      width={200}
                      height={200}
                      alt="Generative AI"
                    />
                  </div>
                  <div class="tp-service__content">
                    <h4 class="tp-service__title-sm">Generative AI</h4>
                    <p>
                      Inspire Creativity with Generative AI Solutions.
                      Redefining Boundaries with AI-Generated Content!
                    </p>
                  </div>
                </div>
                <div
                  class="tp-service__item wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <div class="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-3.png"
                      width={200}
                      height={200}
                      alt="AI Chatbots"
                    />
                  </div>
                  <div class="tp-service__content">
                    <h4 class="tp-service__title-sm">AI Chatbots</h4>
                    <p>
                      Conversational AI for Enhanced Customer Engagement.
                      Powered by integrating ChatGPT or any other LLM, our
                      chatbots are customized on your dataset, ensuring better
                      contextual responses.
                    </p>
                  </div>
                </div>
                <div
                  class="tp-service__item wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1s"
                >
                  <div class="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-1.png"
                      width={200}
                      height={200}
                      alt="Machine Learning Solutions"
                    />
                  </div>
                  <div class="tp-service__content">
                    <h4 class="tp-service__title-sm">
                      Machine Learning Solutions
                    </h4>
                    <p>
                      Data-Driven Decisions with Custom Machine Learning
                      Solutions. Optimized Models with Robust MLOps!
                    </p>
                  </div>
                </div>
                <div
                  class="tp-service__item wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  <div class="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-2.png"
                      width={200}
                      height={200}
                      alt="Computer Vision & NLP Solutions"
                    />
                  </div>
                  <div class="tp-service__content">
                    <h4 class="tp-service__title-sm">
                      Computer Vision & NLP Solutions
                    </h4>
                    <p>
                      Unleashing insights from visual data and unstructured
                      text. Empower your business with AI-driven vision and
                      language capabilities.
                    </p>
                  </div>
                </div>
                <div
                  class="tp-service__item wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  <div class="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-3.png"
                      width={200}
                      height={200}
                      alt="Business Intelligence Solutions"
                    />
                  </div>
                  <div class="tp-service__content">
                    <h4 class="tp-service__title-sm">
                      Business Intelligence Solutions
                    </h4>
                    <p>
                      Actionable Insights for Informed Decisions. Explore Data
                      with Modern Dashboards, Paginated Reports, Embedded
                      Analytics, and NLP Queries!
                    </p>
                  </div>
                </div>
              </div>
              <div class="row tp-service__slider">
                <div
                  class="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div class="m-3 tp-service__item">
                    <div class="tp-service__icon">
                      <Image
                        src="/img/service/service-icon-1.png"
                        width={200}
                        height={200}
                        alt="AI Consulting"
                      />
                    </div>
                    <div class="tp-service__content">
                      <h4 class="tp-service__title-sm">AI Consulting</h4>
                      <p>
                        Strategic AI Guidance for Business Advancement. Let&apos;s
                        Unlock Your Potential!
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <div class="m-3 tp-service__item">
                    <div class="tp-service__icon">
                      <Image
                        src="/img/service/service-icon-2.png"
                        width={200}
                        height={200}
                        alt="Generative AI"
                      />
                    </div>
                    <div class="tp-service__content">
                      <h4 class="tp-service__title-sm">Generative AI</h4>
                      <p>
                        Inspire Creativity with Generative AI Solutions.
                        Redefining Boundaries with AI-Generated Content!
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <div class="m-3 tp-service__item">
                    <div class="tp-service__icon">
                      <Image
                        src="/img/service/service-icon-3.png"
                        width={200}
                        height={200}
                        alt="AI Chatbots"
                      />
                    </div>
                    <div class="tp-service__content">
                      <h4 class="tp-service__title-sm">AI Chatbots</h4>
                      <p>
                        Conversational AI for Enhanced Customer Engagement.
                        Powered by integrating ChatGPT or any other LLM, our
                        chatbots are customized on your dataset, ensuring better
                        contextual responses.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1s"
                >
                  <div class="m-3 tp-service__item">
                    <div class="tp-service__icon">
                      <Image
                        src="/img/service/service-icon-1.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <div class="tp-service__content">
                      <h4 class="tp-service__title-sm">
                        Machine Learning Solutions
                      </h4>
                      <p>
                        Data-Driven Decisions with Custom Machine Learning
                        Solutions. Optimized Models with Robust MLOps!
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  <div class="m-3 tp-service__item">
                    <div class="tp-service__icon">
                      <Image
                        src="/img/service/service-icon-2.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <div class="tp-service__content">
                      <h4 class="tp-service__title-sm">
                        Computer Vision & NLP Solutions
                      </h4>
                      <p>
                        Unleashing insights from visual data and unstructured
                        text. Empower your business with AI-driven vision and
                        language capabilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  <div class="m-3 tp-service__item">
                    <div class="tp-service__icon">
                      <Image
                        src="/img/service/service-icon-3.png"
                        width={200}
                        height={200}
                        alt="Business Intelligence Solutions"
                      />
                    </div>
                    <div class="tp-service__content">
                      <h4 class="tp-service__title-sm">
                        Business Intelligence Solutions
                      </h4>
                      <p>
                        Actionable Insights for Informed Decisions. Explore Data
                        with Modern Dashboards, Paginated Reports, Embedded
                        Analytics, and NLP Queries!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-service-area-end --> */}

        {/* <!-- tp-about-area-start --> */}
        <div class="tp-about__area pt-120 pb-120 p-relative">
          <div class="tp-about__shape-3-1">
            <Image
              src="/img/hero/hero-shape-3-5.png"
              width={200}
              height={850}
              alt="shape"
            />
          </div>
          <div class="tp-about__shape-3-2">
            <Image
              src="/img/hero/hero-shape-3-6.png"
              width={200}
              height={810}
              alt="shape"
            />
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div
                class="col-lg-4 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div class="tp-about__thumb-wrapper p-relative">
                  <div class="tp-about__shape-1">
                    <Image
                      src="/img/hero/hero-shape-3-1.png"
                      width={100}
                      height={100}
                      alt="shape"
                    />
                  </div>
                  <div class="tp-about__shape-2">
                    <Image
                      src="/img/hero/hero-shape-3-2.png"
                      width={100}
                      height={100}
                      alt="shape"
                    />
                  </div>
                  <div class="tp-about__thumb">
                    <Image
                      src="/img/hero/hero-4.jpg"
                      width={300}
                      height={300}
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
              <div
                class="col-lg-8 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div class="tp-about__section-box">
                  <h3 class="tp-section-title-md pb-30">
                    Fuel your business&apos;s success with Forloops
                  </h3>
                  <div class="tp-about__text">
                    <p>
                      Forloops, a proud member of the AWS Partner Network,
                      serving as your dedicated AI partner. Our tailored AI,
                      Generative AI, and Machine Learning solutions empower
                      organizations with strategic growth and data-driven
                      insights.
                    </p>
                    <p>
                      Experience the transformative impact of AI content
                      generation, captivating Generative AI creativity, and
                      seamless customer engagement through AI Chatbots and
                      Custom LLMs integration.
                    </p>
                    <p>
                      Optimize decision-making with our expertise in model
                      optimization and MLOps implementation.
                    </p>
                    <p>
                      Unlock hidden value within your data using modern
                      interactive dashboards, paginated reports, embedded
                      analytics, and natural language queries offered by our
                      Business Intelligence solutions.
                    </p>
                    <p>
                      Embrace the future of AI and revolutionize your business
                      processes to accelerate growth, reduce costs, and gain a
                      competitive edge.
                    </p>
                  </div>
                  <a class="tp-btn-blue-square" href="contact.html">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-about-area-end --> */}
      </main>
    </>
  );
};

export default Home_content;
