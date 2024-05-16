import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const page = () => {
  return (
    <>
      <main>
       
        <div
          className="breadcrumbarea breadcrumb-height p-relative grey-bg"
          style={{
            backgroundImage: `url('/img/breadcrumb/breadcrumb.jpg')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Content inside the div */}

          <div className="breadcrumb__scroll-bottom smooth">
            <a href="#blog">
              <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content text-center">
                  <h3 className="breadcrumb__title">Recent Blog</h3>
                  <div className="breadcrumb__list">
                    <span>
                      <a href="index.html">Home</a>
                    </span>
                    <span className="dvdr">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                    <span>Blog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- breadcrumb area end --> */}

        {/* <!-- postbox area start --> */}
        <div className="postbox__area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div id="blog" className="postbox__wrapper pr-20">
                  <article className="postbox__item format-image mb-50 transition-3">
                    <div className="postbox__thumb w-img">
                      <a href="blog-details.html">
                        <Image
                          src="/img/blog/article-1.jpg"
                          width={1000}
                          height={1000}
                          className="nextimg"
                          alt="article-1.jg"
                        />
                      </a>
                    </div>
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          <i className="fal fa-user-circle"></i> Dr Basit Riaz
                          Sheikh
                        </span>
                        <span>
                          <i className="fal fa-clock"></i> Jul 20, 2022
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <a href="blog-details.html">
                          The Magical World of Generative AI in Customer Support
                        </a>
                      </h3>
                      <div className="postbox__text">
                        <p>
                          Generative AI, the advanced technology powering
                          ChatGPT, Google&apos;s Bard, DALL-E, MidJourney, and
                          an ever-growing list of AI-powered tools, has taken
                          the world by storm. And quite literally. With its
                          ability to replicate human-like responses, Generative
                          AI is the next...
                        </p>
                      </div>
                      <div className="post__button">
                        <a className="tp-btn-blue-square" href="/blog_details">
                          <span>READ MORE</span>
                        </a>
                      </div>
                    </div>
                  </article>

                  <div className="basic-pagination d-none">
                    <nav>
                      <ul>
                        <li>
                          <a href="blog.html">
                            <i className="fal fa-arrow-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">1</a>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <a href="blog.html">3</a>
                        </li>
                        <li>
                          <a href="blog.html">
                            <i className="fal fa-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">Search Here</h3>
                    <div className="sidebar__widget-content">
                      <div className="sidebar__search">
                        <form action="#" method="post" onsubmit="return false;">
                          <div className="sidebar__search-input-2">
                            <input
                              type="text"
                              placeholder="Search your keyword..."
                              required
                            />
                            <button type="submit">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__widget mb-40 d-none">
                    <h3 className="sidebar__widget-title">Recent Post</h3>
                    <div className="sidebar__widget-content">
                      <div className="sidebar__post rc__post">
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <a href="blog-details.html">
                              <Image
                                src="/img/blog/blog-details-sm-1.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-1.jpg"
                              />
                            </a>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <a href="blog-details.html">
                                Don’t Underestimate The Software
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <a href="blog-details.html">
                              <Image
                                src="/img/blog/blog-details-sm-2.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-2.jpg"
                              />
                            </a>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <a href="blog-details.html">
                                Designing Human-Machine Interfaces..
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <a href="blog-details.html">
                              <Image
                                src="/img/blog/blog-details-sm-3.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-3.jpg"
                              />
                            </a>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <a href="blog-details.html">
                                Web Design Done Well: Excellent
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <a href="blog-details.html">
                              <Image
                                src="/img/blog/blog-details-sm-4.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-4.jpg"
                              />
                            </a>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <a href="blog-details.html">
                                Don’t Underestimate The Software{" "}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__widget mb-40 d-none">
                    <h3 className="sidebar__widget-title">Categories</h3>
                    <div className="sidebar__widget-content">
                      <ul>
                        <li>
                          <a href="blog.html">
                            Web Design
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Branding Design
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Photography{" "}
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Business Statergy
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            UI/UX Deisgn
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Web Development
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">Tags</h3>
                    <div className="sidebar__widget-content">
                      <div className="tagcloud">
                        <a href="#">Artificial Intelligence</a>
                        <a href="#">LLM</a>
                        <a href="#">Generative AI</a>
                        <a href="#">ChatGPT</a>
                        <a href="#">OpenAI</a>
                        <a href="#">Machine Learning</a>
                        <a href="#">Bard</a>
                        <a href="#">DALL-E</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- postbox area end --> */}
      </main>
    </>
  );
};

export default page;
