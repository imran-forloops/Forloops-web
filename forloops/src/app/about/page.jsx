import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

const page = () => {
  return (
    <main>
      
      {/* <!-- breadcrumb area start --> */}
      <div
        className="breadcrumb__area breadcrumb-height p-relative grey-bg"
        data-background="/img/breadcrumb/breadcrumb.jpg"
      >
        <div className="breadcrumb__scroll-bottom smooth">
          <a href="#tp-service__area">
            <i className="far fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">About Forloops</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span className="dvdr">
                    <i className="fa fa-angle-right"></i>
                  </span>
                  <span>About us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb area end -->   */}

      {/* <!-- tp-about-area-start --> */}
      <div id="about-inner__area" className="about-inner__area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12">
              <div
                className="about-inner__section-box mb-70 text-center wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <span className="about-inner__subtitle">About Company</span>
                <h3 className="tp-section-title-md">
                  Amplify Your Success, Forloops Unlocks the Power of AI!
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="about-inner__wrapper wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="about-inner__thumb w-img">
                  <Image
                    src="/img/about/ab-inner-1.jpg"
                    width={330}
                    height={430}
                    alt="inner-1.jpg"
                  />
                </div>
              </div>
              <div
                className="about-inner__content wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <p>
                  Founded in June 23, Forloops is an AI solutions company at the
                  forefront of revolutionizing businesses through the power of
                  artificial intelligence. We firmly believe that AI is set to
                  change the world and disrupt traditional business practices.
                  As the demand for AI adoption surges globally, we recognized
                  the urgent need for AI talent and expertise. Thus, Forloops
                  was established by Dr. Basit Riaz Sheikh, a certified AI
                  expert with a distinguished Ph.D. in Computer Engineering from
                  the prestigious Cornell University, an Ivy League institution.
                  Holding multiple technology patents for groundbreaking work in
                  deep tech, Dr. Basit Riaz Sheikh brings a wealth of knowledge
                  and expertise to the AI landscape. He has also earned multiple
                  accreditations and certifications from AWS and
                  deeplearning.ai, further solidifying his position as a
                  prominent figure in the AI industry. Forloops is a proud
                  member of the AWS partner network.
                </p>
                <p>
                  Driven by the vision of unleashing the true potential of AI
                  for businesses worldwide, Forloops specializes in custom AI
                  and Machine Learning solutions, Generative AI, AI Consulting
                  services, LLMs, AI Chatbots, AWS AI services, OpenAI’s/ChatGPT
                  integrations, MLOPs, model optimisations, text-to-image and
                  text-to-video solutions, NLP solutions, business intelligence
                  solutions, including embedded analytics and interactive
                  dashboards, and the AWS Cloud. Our team of experts, each with
                  decades of experience and numerous accreditations and
                  certifications from AWS and deeplearning.ai, is dedicated to
                  transforming businesses with cutting-edge AI solutions.
                </p>
                <p>
                  Beyond Forloops, Dr. Sheikh has a track record of successful
                  ventures, including Capital TV, a leading digital news and
                  infotainment network with over 2.5 billion video views on
                  YouTube and Facebook in the last calendar year. Additionally,
                  he founded InstaWorld, Inc., an innovative software platform
                  optimizing e-commerce deliveries and facilitating instant cash
                  on delivery payments for small and medium-scale online sellers
                  in emerging markets.
                </p>
                <p>
                  At Forloops, we are committed to empowering businesses to
                  thrive in the AI-driven future. Join Dr. Sheikh and the
                  Forloops team on a transformative journey, embracing the power
                  of AI to fuel your business&apos;s success. Together, we can
                  navigate the evolving landscape with confidence and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- tp-about-area-end --> */}
      {/* <!-- tp-service-area-start --> */}
      <div
        id="tp-service__area"
        className="tp-service__area tp-service__space service-inner grey-bg pt-120 pb-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="tp-service__section-wrapper service-inner d-flex justify-content-between wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-service__title-box ml-40">
                  <h3 className="tp-service__title">Our Services</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-service__slider-wrapper service-inner">
            <div className="tp-service__slider-active d-none">
              <div
                className="tp-service__item wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-service__icon">
                  <Image
                    src="/img/service/service-icon-1.png"
                    width={200}
                    height={200}
                    alt="icon-1.png"
                  />
                </div>
                <div className="tp-service__content">
                  <h4 className="tp-service__title-sm">AI Consulting</h4>
                  <p>
                    Strategic AI Guidance for Business Advancement. Let&apos;s
                    Unlock Your Potential!
                  </p>
                </div>
              </div>
              <div
                className="tp-service__item wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".8s"
              >
                <div className="tp-service__icon">
                  <Image
                    src="/img/service/service-icon-2.png"
                    width={200}
                    height={200}
                    alt="icon-2.png"
                  />
                </div>
                <div className="tp-service__content">
                  <h4 className="tp-service__title-sm">Generative AI</h4>
                  <p>
                    Inspire Creativity with Generative AI Solutions. Redefining
                    Boundaries with AI-Generated Content!
                  </p>
                </div>
              </div>
              <div
                className="tp-service__item wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="tp-service__icon">
                  <Image
                    src="/img/service/service-icon-3.png"
                    width={200}
                    height={200}
                    alt="icon-3.png"
                  />
                </div>
                <div className="tp-service__content">
                  <h4 className="tp-service__title-sm">AI Chatbots</h4>
                  <p>
                    Conversational AI for Enhanced Customer Engagement. Powered
                    by integrating ChatGPT or any other LLM, our chatbots are
                    customized on your dataset, ensuring better contextual
                    responses.
                  </p>
                </div>
              </div>
              <div
                className="tp-service__item wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1s"
              >
                <div className="tp-service__icon">
                  <Image
                    src="/img/service/service-icon-2.png"
                    width={200}
                    height={200}
                    alt="icon-2.png"
                  />
                </div>
                <div className="tp-service__content">
                  <h4 className="tp-service__title-sm">
                    Machine Learning Solutions
                  </h4>
                  <p>
                    Data-Driven Decisions with Custom Machine Learning
                    Solutions. Optimized Models with Robust MLOps!
                  </p>
                </div>
              </div>
              <div
                className="tp-service__item wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1.2s"
              >
                <div className="tp-service__icon">
                  <Image
                    src="/img/service/service-icon-1.png"
                    width={200}
                    height={200}
                    alt="icon-1.png"
                  />
                </div>
                <div className="tp-service__content">
                  <h4 className="tp-service__title-sm">
                    Computer Vision & NLP Solutions
                  </h4>
                  <p>
                    Unleashing insights from visual data and unstructured text.
                    Empower your business with AI-driven vision and language
                    capabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="row tp-service__slider">
              <div
                className="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="m-3 tp-service__item">
                  <div className="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-1.png"
                      width={200}
                      height={200}
                      alt="icon-1.png"
                    />
                  </div>
                  <div className="tp-service__content">
                    <h4 className="tp-service__title-sm">AI Consulting</h4>
                    <p>
                      Strategic AI Guidance for Business Advancement. Let&apos;s
                      Unlock Your Potential!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="m-3 tp-service__item">
                  <div className="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-2.png"
                      width={1000}
                      height={1000}
                      alt="icon-1.png"
                      className="nextimg"
                    />
                  </div>
                  <div className="tp-service__content">
                    <h4 className="tp-service__title-sm">Generative AI</h4>
                    <p>
                      Inspire Creativity with Generative AI Solutions.
                      Redefining Boundaries with AI-Generated Content!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="m-3 tp-service__item">
                  <div className="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-3.png"
                      width={200}
                      height={200}
                      alt="icon-1.png"
                    />
                  </div>
                  <div className="tp-service__content">
                    <h4 className="tp-service__title-sm">AI Chatbots</h4>
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
                className="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1s"
              >
                <div className="m-3 tp-service__item">
                  <div className="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-1.png"
                      width={200}
                      height={200}
                      alt="icon-1.png"
                    />
                  </div>
                  <div className="tp-service__content">
                    <h4 className="tp-service__title-sm">
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
                className="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1.2s"
              >
                <div className="m-3 tp-service__item">
                  <div className="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-2.png"
                      width={200}
                      height={200}
                      alt="icon-1.png"
                    />
                  </div>
                  <div className="tp-service__content">
                    <h4 className="tp-service__title-sm">
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
                className="col-12 col-sm-6 col-lg-4 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1.2s"
              >
                <div className="m-3 tp-service__item">
                  <div className="tp-service__icon">
                    <Image
                      src="/img/service/service-icon-3.png"
                      width={200}
                      height={200}
                      alt="icon-3.png"
                    />
                  </div>
                  <div className="tp-service__content">
                    <h4 className="tp-service__title-sm">
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

      {/* <!-- tp-faq-area-start --> */}
      <div class="tp-faq__area pt-120 pb-110">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="tp-service__section-wrapper service-inner d-flex justify-content-between wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div class="tp-service__title-box ml-40">
                  <h3 class="tp-service__title">FAQ</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-xl-7 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div class="tp-custom-accordio-3">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-items">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        What services does Forloops provide?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Forloops specializes in AI consulting, custom AI and
                        Machine Learning solutions, Generative AI, AI Chatbots,
                        Natural Language Processing (NLP) solutions, and
                        Business Intelligence solutions. We empower businesses
                        by integrating AI into their processes to drive growth,
                        efficiency, and innovation.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-items">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How can AI benefit my business?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        AI offers a multitude of benefits, including enhanced
                        decision-making, process automation, personalized
                        customer experiences, and improved efficiency. By
                        harnessing AI&apos;s potential, businesses can reduce
                        costs, accelerate sales, and gain a competitive edge in
                        today&apos;s dynamic market.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-items">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How does Forloops ensure the security of my data?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        At Forloops, data security is a top priority. We
                        implement robust security measures and adhere to
                        industry best practices to safeguard your data. Our team
                        ensures compliance with data protection regulations and
                        employs encryption and access controls to protect
                        sensitive information.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-items">
                    <h2 class="accordion-header" id="headingfour">
                      <button
                        class="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        Can Forloops customize AI solutions for my unique
                        business needs?
                      </button>
                    </h2>
                    <div
                      id="collapsefour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Absolutely! We understand that each business is unique,
                        and our team of experts excels in tailoring AI solutions
                        to meet your specific requirements. Whether you need a
                        personalized AI Chatbot, advanced NLP models, or custom
                        Machine Learning algorithms, we have you covered.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-items">
                    <h2 class="accordion-header" id="headingfive">
                      <button
                        class="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        What sets Forloops apart from other AI service
                        providers?
                      </button>
                    </h2>
                    <div
                      id="collapsefive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Forloops stands out due to our team&apos;s deep
                        expertise and experience in the AI domain. With Dr.
                        Basit Riaz Sheikh, a certified AI expert, leading the
                        company, we bring cutting-edge technology, a track
                        record of successful AI implementations, and a
                        commitment to excellence in every project we undertake.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-items">
                    <h2 class="accordion-header" id="headingsix">
                      <button
                        class="accordion-buttons collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsesix"
                        aria-expanded="false"
                        aria-controls="collapsesix"
                      >
                        How can I get started with Forloops&apos; AI solutions?
                      </button>
                    </h2>
                    <div
                      id="collapsesix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Getting started with Forloops is simple. Reach out to us
                        through our website or contact information, and our team
                        will be in touch to understand your business needs and
                        goals. We&apos;ll work together to devise a tailored AI
                        strategy that aligns with your objectives, ensuring
                        seamless integration and exceptional results.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-xl-5 col-lg-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div class="tp-faq__right-side text-center">
                <div class="tp-faq__icon">
                  <a href="#">
                    <svg
                      width="30"
                      height="29"
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.9542 23.9764L0 29V0H30V23.9764H5.9542Z"
                        fill="#017EFA"
                      />
                    </svg>
                  </a>
                </div>
                <div class="tp-faq__content">
                  <h4 class="tp-faq__faq-sm-title">
                    Do you have more questions?
                  </h4>
                  <p>
                    Transforming businesses through custom AI, Generative AI,
                    and Machine-learning solutions for growth and efficiency.
                  </p>
                  <a href="mailto:info@forloops.co">Shoot a Direct Mail</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- tp-faq-area-end --> */}

      
    </main>
  );
};

export default page;
