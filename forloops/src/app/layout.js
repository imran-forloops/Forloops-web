import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom-animation.css";
import "./assets/css/spacing.css";
import "./assets/css/flaticon.css";
import "./assets/css/hover-reveal.css";
import "./assets/css/nice-select.css";
// import "./assets/css/jquery-ui.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/swiper-bundle.css";
// import "./assets/css/font-awesome-pro.css";
import "./assets/css/meanmenu.css";
// import "./assets/scss/layout/_hero.scss";
// import styles from "./assets/scss/style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
