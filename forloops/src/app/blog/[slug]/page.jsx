"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const POST_QUERY = gql`
  query GetPost($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      console.log("Fetched post slug:", slug);
    }
  }, [slug]);

  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: { slug },
    skip: !slug,
  });
  useEffect(() => {
    if (data) {
      console.log("Fetched data:", data);
    }
    if (error) {
      console.log("Query error:", error);
    }
  }, [data, error]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data.postBy;
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
          <Link href="#postbox__item">
            <i className="fa-solid fa-arrow-down"></i>
          </Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">Blog Details</h3>
                <div className="breadcrumb__list">
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                  <span>Blog Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb area end -->

  <!-- postbox area start --> */}
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
              <div
                id="Blog-Details"
                className="postbox__wrapper postbox__p-right"
              >
                <article
                  id="postbox__item"
                  className="postbox__item format-image transition-3"
                >
                  <div className="postbox__content">
                    <p>
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        width={800}
                        height={300}
                        // className="nextimg"
                        alt="article-"
                      />
                    </p>
                    <div className="postbox__meta">
                      <span>
                        <i className="fal fa-user-circle"></i>
                        By {post.author.node.name}
                      </span>
                      <time dateTime="2023-07-22">
                        <i className="fal fa-clock"></i>{" "}
                        {new Date(post.date).toLocaleDateString()}
                      </time>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="postbox__social-wrapper">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12">
                          <div className="postbox__tag tagcloud">
                            <span>Tag</span>
                            <Link href="#">Artificial Intelligence</Link>
                            <Link href="#">Generative AI</Link>
                            <Link href="#">Customer Support</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
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
                  <h3 className="sidebar__widget-title">Categories</h3>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link href="/blog">
                          Web Design<span>26</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Devlopment <span>30</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Branding <span>71</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          MOtion Design <span>56</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          UI/UX Deisgn <span>60</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Graphic Design <span>99</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar__widget mb-40 d-none">
                  <h3 className="sidebar__widget-title">Pages</h3>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link href="/blog">
                          Web Design{" "}
                          <span>
                            <i className="fal fa-angle-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Devlopment{" "}
                          <span>
                            <i className="fal fa-angle-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Branding{" "}
                          <span>
                            <i className="fal fa-angle-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Motion Design
                          <span>
                            <i className="fal fa-angle-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          UI/UX Deisgn{" "}
                          <span>
                            <i className="fal fa-angle-right"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Graphic Design{" "}
                          <span>
                            <i className="fal fa-angle-right"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar__widget mb-40 d-none">
                  <h3 className="sidebar__widget-title">Recent Post</h3>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post rc__post">
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="#">
                            <Image
                              src="/img/blog/blog-details-sm-1.jpg"
                              width={500}
                              height={1000}
                              className="nextimg"
                              alt="blog-details-sm-1.jpg"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>4 March. 2022</span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link href="#">
                              Don’t Underestimate The Software
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="#">
                            <Image
                              src="/img/blog/blog-details-sm-2.jpg"
                              width={1000}
                              height={100}
                              alt="blog-details-sm-2.jpg"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>4 March. 2022</span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link href="#">
                              Designing Human-Machine Interfaces..
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="#">
                            <Image
                              src="/img/blog/blog-details-sm-3.jpg"
                              width={100}
                              height={100}
                              alt="blog-details-sm-3.jpg"
                            />{" "}
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>4 March. 2022</span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link href="#">
                              Web Design Done Well: Excellent
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-20 d-flex">
                        <div className="rc__post-thumb mr-20">
                          <Link href="#">
                            <Image
                              src="/img/blog/blog-details-sm-4.jpg"
                              width={100}
                              height={100}
                              alt="blog-details-sm-4.jpg"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>4 March. 2022</span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link href="#">
                              Don’t Underestimate The Software{" "}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-40">
                  <h3 className="sidebar__widget-title">Tags</h3>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <Link href="#">Artificial Intelligence</Link>
                      <Link href="#">LLM</Link>
                      <Link href="#">Generative AI</Link>
                      <Link href="#">ChatGPT</Link>
                      <Link href="#">OpenAI</Link>
                      <Link href="#">Machine Learning</Link>
                      <Link href="#">Bard</Link>
                      <Link href="#">DALL-E</Link>
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
  );
};

export default BlogPost;
