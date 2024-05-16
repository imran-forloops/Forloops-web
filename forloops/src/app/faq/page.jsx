import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
          <a href="#faq">
            {" "}
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">Ask Question</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="index.html">Home</a>
                  </span>
                  <span className="dvdr">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  <span>Faq</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb area end --> */}

      {/* <!-- tp-support-area-start --> */}
      <div className="tp-support__area tp-support__bg-2 pt-120 pb-120 p-relative">
        <div className="tp-support__bg tp-support__bg-2">
          <Image
            src="/img/faq/faq-bg-shape-2.png"
            width={800}
            height={700}
            alt="faq-bg-shape-2.png"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-support__title-box text-center mb-70">
                <h3 className="tp-section-title">Need A Support? 🎧</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-support__faq">
                <div className="tp-custom-accordio-2">
                  <div className="accordion" id="accordionExample-2">
                    <div id="faq" className="accordion-items border-show">
                      <h2 className="accordion-header" id="heading-1">
                        <button
                          className="accordion-buttons "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-1"
                          aria-expanded="true"
                          aria-controls="collapse-1"
                        >
                          What services does Forloops provide?
                        </button>
                      </h2>
                      <div
                        id="collapse-1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading-1"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div className="accordion-body">
                          Forloops specializes in AI consulting, custom AI and
                          Machine Learning solutions, Generative AI, AI
                          Chatbots, Natural Language Processing (NLP) solutions,
                          and Business Intelligence solutions. We empower
                          businesses by integrating AI into their processes to
                          drive growth, efficiency, and innovation.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-items border-show">
                      <h2 className="accordion-header" id="heading-2">
                        <button
                          className="accordion-buttons collapsed  "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-2"
                          aria-expanded="true"
                          aria-controls="collapse-2"
                        >
                          How can AI benefit my business?
                        </button>
                      </h2>
                      <div
                        id="collapse-2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading-2"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div className="accordion-body">
                          AI offers a multitude of benefits, including enhanced
                          decision-making, process automation, personalized
                          customer experiences, and improved efficiency. By
                          harnessing AI&apos;s potential, businesses can reduce
                          costs, accelerate sales, and gain a competitive edge
                          in today&apos;s dynamic market.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-items border-show">
                      <h2 className="accordion-header" id="heading-3">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-3"
                          aria-expanded="true"
                          aria-controls="collapse-3"
                        >
                          How does Forloops ensure the security of my data?
                        </button>
                      </h2>
                      <div
                        id="collapse-3"
                        className="accordion-collapse collapse "
                        aria-labelledby="heading-3"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div className="accordion-body">
                          At Forloops, data security is a top priority. We
                          implement robust security measures and adhere to
                          industry best practices to safeguard your data. Our
                          team ensures compliance with data protection
                          regulations and employs encryption and access controls
                          to protect sensitive information.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-items border-show">
                      <h2 className="accordion-header" id="heading-4">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-4"
                          aria-expanded="true"
                          aria-controls="collapse-4"
                        >
                          Can Forloops customize AI solutions for my unique
                          business needs?
                        </button>
                      </h2>
                      <div
                        id="collapse-4"
                        className="accordion-collapse collapse "
                        aria-labelledby="heading-4"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div className="accordion-body">
                          Absolutely! We understand that each business is
                          unique, and our team of experts excels in tailoring AI
                          solutions to meet your specific requirements. Whether
                          you need a personalized AI Chatbot, advanced NLP
                          models, or custom Machine Learning algorithms, we have
                          you covered.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-items border-show">
                      <h2 className="accordion-header" id="heading-5">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-5"
                          aria-expanded="true"
                          aria-controls="collapse-5"
                        >
                          What sets Forloops apart from other AI service
                          providers?
                        </button>
                      </h2>
                      <div
                        id="collapse-5"
                        className="accordion-collapse collapse "
                        aria-labelledby="heading-5"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div className="accordion-body">
                          Forloops stands out due to our team&apos;s deep
                          expertise and experience in the AI domain. With Dr.
                          Basit Riaz Sheikh, a certified AI expert, leading the
                          company, we bring cutting-edge technology, a track
                          record of successful AI implementations, and a
                          commitment to excellence in every project we
                          undertake.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-items border-show">
                      <h2 className="accordion-header" id="heading-6">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-6"
                          aria-expanded="true"
                          aria-controls="collapse-6"
                        >
                          How can I get started with Forloops&apos; AI
                          solutions?
                        </button>
                      </h2>
                      <div
                        id="collapse-6"
                        className="accordion-collapse collapse "
                        aria-labelledby="heading-6"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div className="accordion-body">
                          Getting started with Forloops is simple. Reach out to
                          us through our website or contact information, and our
                          team will be in touch to understand your business
                          needs and goals. We &apos;ll work together to devise a
                          tailored AI strategy that aligns with your objectives,
                          ensuring seamless integration and exceptional results.
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
    </main>
  );
};

export default page;
