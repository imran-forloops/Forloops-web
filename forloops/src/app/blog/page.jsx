import React from "react";
import Header from "../components/Header";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main>
        {/* <!-- breadcrumb area start --> */}
        <div
          class="breadcrumb__area breadcrumb-height p-relative grey-bg"
          data-background="/img/breadcrumb/breadcrumb.jpg"
        >
          <div class="breadcrumb__scroll-bottom smooth">
            <a href="#blog">
              <i class="far fa-arrow-down"></i>
            </a>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xxl-12">
                <div class="breadcrumb__content text-center">
                  <h3 class="breadcrumb__title">Recent Blog</h3>
                  <div class="breadcrumb__list">
                    <span>
                      <a href="index.html">Home</a>
                    </span>
                    <span class="dvdr">
                      <i class="fa fa-angle-right"></i>
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
        <div class="postbox__area pt-120 pb-120">
          <div class="container">
            <div class="row">
              <div class="col-xxl-8 col-xl-8 col-lg-8">
                <div id="blog" class="postbox__wrapper pr-20">
                  <article class="postbox__item format-image mb-50 transition-3">
                    <div class="postbox__thumb w-img">
                      <a href="blog-details.html">
                        <Image
                          src="/img/blog/article-1.jpg"
                          width={1000}
                          height={1000}
                          alt="article-1.jpg"
                          className="nextimg"
                        />
                      </a>
                    </div>
                    <div class="postbox__content">
                      <div class="postbox__meta">
                        <span>
                          <i class="fal fa-user-circle"></i> Dr Basit Riaz
                          Sheikh
                        </span>
                        <span>
                          <i class="fal fa-clock"></i> Jul 20, 2022
                        </span>
                      </div>
                      <h3 class="postbox__title">
                        <a href="blog-details.html">
                          The Magical World of Generative AI in Customer Support
                        </a>
                      </h3>
                      <div class="postbox__text">
                        <p>
                          Generative AI, the advanced technology powering
                          ChatGPT, Google&apos;s Bard, DALL-E, MidJourney, and
                          an ever-growing list of AI-powered tools, has taken
                          the world by storm. And quite literally. With its
                          ability to replicate human-like responses, Generative
                          AI is the next...
                        </p>
                      </div>
                      <div class="post__button">
                        <a class="tp-btn-blue-square" href="/blog_details">
                          <span>READ MORE</span>
                        </a>
                      </div>
                    </div>
                  </article>

                  <div class="basic-pagination d-none">
                    <nav>
                      <ul>
                        <li>
                          <a href="blog.html">
                            <i class="fal fa-arrow-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">1</a>
                        </li>
                        <li>
                          <span class="current">2</span>
                        </li>
                        <li>
                          <a href="blog.html">3</a>
                        </li>
                        <li>
                          <a href="blog.html">
                            <i class="fal fa-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4">
                <div class="sidebar__wrapper">
                  <div class="sidebar__widget mb-40">
                    <h3 class="sidebar__widget-title">Search Here</h3>
                    <div class="sidebar__widget-content">
                      <div class="sidebar__search">
                        <form action="#" method="post" onsubmit="return false;">
                          <div class="sidebar__search-input-2">
                            <input
                              type="text"
                              placeholder="Search your keyword..."
                              required
                            />
                            <button type="submit">
                              <i class="far fa-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar__widget mb-40 d-none">
                    <h3 class="sidebar__widget-title">Recent Post</h3>
                    <div class="sidebar__widget-content">
                      <div class="sidebar__post rc__post">
                        <div class="rc__post mb-20 d-flex">
                          <div class="rc__post-thumb mr-20">
                            <a href="blog-details.html">
                              <Image
                                src="/img/blog/blog-details-sm-1.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-1.jpg"
                              />
                            </a>
                          </div>
                          <div class="rc__post-content">
                            <div class="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 class="rc__post-title">
                              <a href="blog-details.html">
                                Don’t Underestimate The Software
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div class="rc__post mb-20 d-flex">
                          <div class="rc__post-thumb mr-20">
                            <a href="blog-details.html">
                              <Image
                                src="/img/blog/blog-details-sm-2.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-2.jpg"
                              />
                            </a>
                          </div>
                          <div class="rc__post-content">
                            <div class="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 class="rc__post-title">
                              <a href="blog-details.html">
                                Designing Human-Machine Interfaces..
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div class="rc__post mb-20 d-flex">
                          <div class="rc__post-thumb mr-20">
                            <a href="blog-details.html">
                              <Image
                                src="/img/blog/blog-details-sm-3.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-3.jpg"
                              />
                            </a>
                          </div>
                          <div class="rc__post-content">
                            <div class="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 class="rc__post-title">
                              <a href="blog-details.html">
                                Web Design Done Well: Excellent
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div class="rc__post mb-20 d-flex">
                          <div class="rc__post-thumb mr-20">
                            <a href="blog-details.html">
                              <Image
                                src="/img/blog/blog-details-sm-4.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-4.jpg"
                              />
                            </a>
                          </div>
                          <div class="rc__post-content">
                            <div class="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 class="rc__post-title">
                              <a href="blog-details.html">
                                Don’t Underestimate The Software{" "}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar__widget mb-40 d-none">
                    <h3 class="sidebar__widget-title">Categories</h3>
                    <div class="sidebar__widget-content">
                      <ul>
                        <li>
                          <a href="blog.html">
                            Web Design
                            <span>
                              <i class="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Branding Design
                            <span>
                              <i class="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Photography{" "}
                            <span>
                              <i class="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Business Statergy
                            <span>
                              <i class="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            UI/UX Deisgn
                            <span>
                              <i class="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Web Development
                            <span>
                              <i class="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sidebar__widget mb-40">
                    <h3 class="sidebar__widget-title">Tags</h3>
                    <div class="sidebar__widget-content">
                      <div class="tagcloud">
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
