import React from "react";

const page = () => {
  return (
    <main>
      {/* <!-- breadcrumb area start --> */}
      <div
        class="breadcrumb__area breadcrumb-height p-relative grey-bg"
        data-background="/img/breadcrumb/breadcrumb.jpg"
      >
        <div class="breadcrumb__scroll-bottom smooth">
          <a href="#tp-service__area">
            <i class="far fa-arrow-down"></i>
          </a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="breadcrumb__content text-center">
                <h3 class="breadcrumb__title">About Forloops</h3>
                <div class="breadcrumb__list">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span class="dvdr">
                    <i class="fa fa-angle-right"></i>
                  </span>
                  <span>About us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb area end -->   */}
    </main>
  );
};

export default page;
