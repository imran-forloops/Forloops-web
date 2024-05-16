"use client";

import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <>
      {/* <!-- tp-blog-area-start --> */}
      <div className="tp-blog__area grey-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-blog__section-box d-flex justify-content-between align-items-center">
                <h3 className="tp-section-title-md">Read our recent blog</h3>
                <a className="tp-btn-blue-square" href="blog.html">
                  <span>See all Blog</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 mb-30 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-blog__item">
                <div className="tp-blog__thumb fix">
                  <a href="blog-details.html">
                    <Image
                      src="/img/blog/article-1.jpg"
                      width={200}
                      height={200}
                      className="nextimg"
                      alt="article"
                    />
                  </a>
                </div>
                <div className="tp-blog__content-wrapper">
                  <div className="tp-blog__tag">
                    <span>Article</span>
                  </div>
                  <div className="tp-blog__content">
                    <h3 className="tp-blog__title">
                      <a href="blog-details.html">
                        The Magical World of Generative AI in Customer Support
                      </a>
                    </h3>
                    <p>
                      Generative AI, the advanced technology powering ChatGPT,
                      Google &apos; s Bard, DALL-E, MidJourney, and an
                      ever-growing list of AI-powered tools, has taken the world
                      by storm...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 mb-30 wow tpfadeRight d-none"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-blog__item">
                <div className="tp-blog__thumb fix">
                  <a href="blog-details.html">
                    <Image
                      src="/img/blog/blog-2.jpg"
                      width={200}
                      height={200}
                      alt="blog2"
                    />
                  </a>
                </div>
                <div className="tp-blog__content-wrapper">
                  <div className="tp-blog__tag">
                    <span>Design</span>
                  </div>
                  <div className="tp-blog__content">
                    <h3 className="tp-blog__title">
                      <a href="blog-details.html">
                        Is your company facing a social media crisis?
                      </a>
                    </h3>
                    <p>
                      Specialize in designing, building, shipping and scaling{" "}
                      <br /> beautiful, usable products with blazing-fast
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- tp-blog-area-end --> */}
    </>
  );
};

export default Blog;
