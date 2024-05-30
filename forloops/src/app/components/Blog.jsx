"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Image from "next/image";
import Link from "next/link";

const GET_POSTS = gql`
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

const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Create a new array before sorting
  const sortedPosts = [...data.posts.edges].sort(
    (a, b) => new Date(b.node.date) - new Date(a.node.date)
  );

  const latestPost = sortedPosts[0].node;

  return (
    <>
      <div className="tp-blog__area grey-bg pt-120 pb-120">
        <div className="container">
          <div class="row">
            <div
              class="col-12 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div class="tp-blog__section-box d-flex justify-content-between align-items-center">
                <h3 class="tp-section-title-md">Read our recent blog</h3>
                <Link class="tp-btn-blue-square" href="/blog">
                  <span>See all Blog</span>
                </Link>
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
                  <a href={`blog/${latestPost.slug}`}>
                    <Image
                      src={latestPost.featuredImage.node.sourceUrl}
                      width={200}
                      height={200}
                      className="nextimg"
                      alt="article"
                    />
                  </a>
                </div>
                <div className="tp-blog__content-wrapper">
                  <div className="tp-blog__content">
                    <h3 className="tp-blog__title">
                      <a href={`blog/${latestPost.slug}`}>{latestPost.title}</a>
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: latestPost.content.substring(0, 200),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
