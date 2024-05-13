import styles from "./page.module.css";
import Header from "./components/Header";
import Home_content from "./components/Home_content";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* <!-- preloader --> */}
      {/* <div id="preloader">
        <div class="preloader">
          <span></span>
          <span></span>
        </div>
      </div> */}
      {/* <!-- preloader end  --> */}

      {/* <!-- back-to-top-start  --> */}
      <button class="scroll-top scroll-to-target" data-target="html">
        <i class="far fa-angle-double-up"></i>
      </button>
      {/* <!-- back-to-top-end  --> */}

      <Header />
      <Home_content />
      <Blog />
      <Footer />
    </>
  );
}
