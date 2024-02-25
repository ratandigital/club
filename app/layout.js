import { Inter } from "next/font/google";
// import "./globals.css";
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/swiper-bundle.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/flaticon_statex.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/font-awesome-pro.css";
import "../public/assets/css/spacing.css";
import "../public/assets/css/custom-animation.css";
import "../public/assets/css/main.css";
import "../public/assets/css/custom.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Officer's Club Gournadi",
  description: "Officer's Club Gournadi, Barishal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script data-cfasync="false" src="../../cdn-cgi/Scripts/5c5dd728/cloudflare-static/email-decode.min.js"></Script>
   <Script src="../assets/js/vendor/jquery.js"></Script>
   <Script src="../assets/js/vendor/waypoints.js"></Script>
   <Script src="../assets/js/bootstrap-bundle.js"></Script>
   <Script src="../assets/js/meanmenu.js"></Script>
   <Script src="../assets/js/gsap.min.js"></Script>
   <Script src="../assets/js/ScrollTrigger.min.js"></Script>
   <Script src="../assets/js/split-text.min.js"></Script>
   <Script src="../assets/js/swiper-bundle.js"></Script>
   <Script src="../assets/js/slick.js"></Script>
   <Script src="../assets/js/range-slider.js"></Script>
   <Script src="../assets/js/magnific-popup.js"></Script>
   <Script src="../assets/js/nice-select.js"></Script>
   <Script src="../assets/js/purecounter.js"></Script>
   <Script src="../assets/js/countdown.js"></Script>
   <Script src="../assets/js/jequery-knob.js"></Script>
   <Script src="../assets/js/jequery-appear.js"></Script>
   <Script src="../assets/js/wow.js"></Script>
   <Script src="../assets/js/jarallax.js"></Script>
   <Script src="../assets/js/isotope-pkgd.js"></Script>
   <Script src="../assets/js/imagesloaded-pkgd.js"></Script>
   <Script src="../assets/js/ajax-form.js"></Script>
   <Script src="../assets/js/main.js"></Script>
    </html>
  );
}
