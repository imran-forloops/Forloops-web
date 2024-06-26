import "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom-animation.css";
import "./assets/css/spacing.css";
import "./assets/css/flaticon.css";
import "./assets/css/hover-reveal.css";
import "./assets/css/nice-select.css";
import React from "react";
// import "./assets/css/jquery-ui.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/font-awesome-pro.css";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import "/public/scss/style.scss";
import "/public/scss/components/_accordion.scss";
import "/public/scss/components/_animation.scss";
import "/public/scss/components/_theme.scss";
import "/public/scss/components/_background.scss";
import "/public/scss/components/_preloader.scss";
import "/public/scss/components/_modal.scss";
import "/public/scss/utils/_index.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Preloader from "./components/Preloader";
import { ApolloWrapper } from "./ApolloProvider";
// const client = new ApolloClient({
//   uri: "https://iabout.me/wp64/graphql",
//   cache: new InMemoryCache(),
// });
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Amplify Your Success, Forloops Unlocks the Power of AI!",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <>
        <Head>
          {/* Set viewport for responsive design */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/* Shortcut icon */}
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://forloops.co/" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
          ></link>
          {/* Twitter Card metadata */}
          <meta name="twitter:card" content="summary_large_image" />

          {/* Open Graph metadata (for Facebook, LinkedIn, etc.) */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:title"
            content="Transforming businesses through custom AI, Generative AI, and Machine-learning solutions for growth and efficiency."
          />
          <meta property="og:url" content="https://forloops.co/" />
          <meta property="og:site_name" content="Forloops" />
          <meta
            property="og:image"
            content="https://forloops.co/assets/img/logo/logo.jpg"
          />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:type" content="image/jpeg" />
        </Head>
        <body className={inter.className} suppressHydrationWarning={true}>
          {/* <ApolloProvider client={client}> */}
          {/* <!-- back-to-top-start  --> */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="fa fa-angle-double-up"></i>
          </button>
          <Preloader />
          {/* <!-- preloader end  --> */}
          <Header />
          <ApolloWrapper>
           {children}
          </ApolloWrapper>
          <Footer />
          {/* </ApolloProvider> */}
          <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="beforeInteractive"
          />

          <Script src="/js/jquery.js" />
          {/* JavaScript files */}
          <Script src="/js/wow.js" />
          <Script src="/js/main.js" />
          <Script src="/js/meanmenu.js" />
          <Script id="my-inline-script" strategy="afterInteractive">
            {`
            document.addEventListener('DOMContentLoaded', function() {
              new WOW().init();
            });
          `}{" "}
          </Script>
          <Script src="/js/bootstrap.bundle.min.js" />
          <Script src="/js/ajax-form.js" />
          <Script src="/js/bootstrap.bundle.min.js" />
          <Script src="/js/charming.js" />
          <Script src="/js/counterup.js" />
          <Script src="/js/hover-reveal.js" />
          <Script src="/js/imagesloaded-pkgd.js" />
          <Script src="/js/jquery-ui.js" />
          <Script src="/js/magnific-popup.js" />
          <Script src="/js/nice-select.js" />
          <Script src="/js/slick.js" />
          <Script src="/js/swiper-bundle.js" />
          <Script src="/js/tween-max.js" />
          <Script src="/js/waypoints.js" />
          <Script
            src="https://kit.fontawesome.com/fbadad80a0.js"
            strategy="beforeInteractive"
          />

          <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.magnific-popup/1.1.0/jquery.magnific-popup.min.js"></Script>
        </body>
      </>
    </html>
  );
}
