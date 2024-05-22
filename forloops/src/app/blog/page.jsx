"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../apolloClient";
import { Query } from "@apollo/client/react/components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { node } from "fontawesome";
import Link from "next/link";

const POSTS_QUERY = gql`
  query GetPosts {
    posts {
      edges {
        node {
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
          preview {
            node {
              id
            }
          }
          postId
          author {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`;

const Page = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log("dataa a gya hy", data);

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
            <Link href="#postbox__meta">
              <i className="fa-solid fa-arrow-down"></i>
            </Link>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content text-center">
                  <h3 className="breadcrumb__title">Recent Blog</h3>
                  <div className="breadcrumb__list">
                    <span>
                      <Link href="/">Home</Link>
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
                  {data.posts.edges.map(({ node }) => (
                    <article
                      key={node.id}
                      className="postbox__item format-image mb-50 transition-3"
                    >
                      <div className="postbox__thumb w-img">
                        <Link href={`/blog/${node.slug}`}>
                          <Image
                            src={node.featuredImage?.node?.sourceUrl}
                            width={1000}
                            height={1000}
                            className="nextimg"
                            alt={node.title}
                          />
                        </Link>
                      </div>
                      <div className="postbox__content">
                        <div id="postbox__meta" className="postbox__meta">
                          <span>
                            <i className="fal fa-user-circle"></i>

                            {node.author.node.name}
                          </span>
                          <span>
                            <i className="fal fa-clock"></i>

                            {new Date(node.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link href={`/blog/${node.slug}`}>{node.title}</Link>
                        </h3>
                        <div className="postbox__text">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: node.content.substring(0, 300),
                            }}
                          />
                        </div>
                        <div className="post__button">
                          <Link
                            className="tp-btn-blue-square"
                            href={`/blog/${node.slug}`}
                          >
                            <span>READ MORE</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                  <div className="basic-pagination d-none">
                    <nav>
                      <ul>
                        <li>
                          <Link href="/blog">
                            <i className="fal fa-arrow-left"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">1</Link>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <Link href="/blog">3</Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="fa fa-arrow-right"></i>
                          </Link>
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
                        <form
                          action="#"
                          method="post"
                          onSubmit={(e) => e.preventDefault()}
                        >
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
                            <Link href={`/blog/${node.slug}`}>
                              <Image
                                src="/img/blog/blog-details-sm-1.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-1.jpg"
                              />
                            </Link>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <Link href={`/blog/${node.slug}`}>
                                Don’t Underestimate The Software
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <Link href={`/blog/${node.slug}`}>
                              <Image
                                src="/img/blog/blog-details-sm-2.jpg"
                                width={100}
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
                              <Link href={`/blog/${node.slug}`}>
                                Designing Human-Machine Interfaces..
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <Link href={`/blog/${node.slug}`}>
                              <Image
                                src="/img/blog/blog-details-sm-3.jpg"
                                width={100}
                                height={100}
                                alt="blog-details-sm-3.jpg"
                              />
                            </Link>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <Link href={`/blog/${node.slug}`}>
                                Web Design Done Well: Excellent
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <Link href={`/blog/${node.slug}`}>
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
                              <Link href={`/blog/${node.slug}`}>
                                Don’t Underestimate The Software{" "}
                              </Link>
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
                          <Link href="/blog">
                            Web Design
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            Branding Design
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            Photography{" "}
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            Business Statergy
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            UI/UX Deisgn
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            Web Development
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>
                        </li>
                      </ul>
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
    </>
  );
};

export default Page;
