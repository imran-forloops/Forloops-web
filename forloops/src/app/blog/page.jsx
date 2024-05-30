"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const POSTS_QUERY = gql`
  query GetPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
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
          author {
            node {
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const Page = () => {
  const [first] = useState(2);
  const [after, setAfter] = useState(null);

  const { loading, error, data, fetchMore } = useQuery(POSTS_QUERY, {
    variables: { first, after },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { edges, pageInfo } = data.posts;

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        after: pageInfo.endCursor,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        return {
          posts: {
            ...fetchMoreResult.posts,
            edges: [...prevResult.posts.edges, ...fetchMoreResult.posts.edges],
          },
        };
      },
    });
  };

  return (
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
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20">
                {edges.map(({ node }) => (
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
                {pageInfo.hasNextPage && (
                  <div className="basic-pagination">
                    <nav>
                      <ul>
                        <li>
                          <button
                            className=" loadmore"
                            onClick={handleLoadMore}
                          >
                            Show More {""} {""}
                            <i class="fa fa-angle-double-right"></i>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
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
                {/* Add more widgets as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
