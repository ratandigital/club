import BreakingNews from "@/components/BreakingNews";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* pre loader area start */}
    {/* <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object" id="object_four" />
          <div className="object" id="object_three" />
          <div className="object" id="object_two" />
          <div className="object" id="object_one" />
        </div>
      </div>
    </div> */}
    {/* pre loader area end */}
    {/* back to top start */}
    <div className="back-to-top-wrapper">
      <button id="back_to_top" type="button" className="back-to-top-btn">
        <svg
          width={12}
          height={7}
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6L6 1L1 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
    {/* back to top end */}
    {/* search popup start */}
    <div className="search__popup">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="search__wrapper">
              <div className="search__top d-flex justify-content-between align-items-center">
                <div className="search__logo">
                  <a href="/">
                    <img src="assets/img/logo/logo-white.png" alt="" />
                  </a>
                </div>
                <div className="search__close">
                  <button
                    type="button"
                    className="search__close-btn search-close-btn"
                  >
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1L1 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 1L17 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="search__form">
                <form action="#">
                  <div className="search__input">
                    <input
                      className="search-input-field"
                      type="text"
                      placeholder="Type here to search..."
                    />
                    <span className="search-focus-border" />
                    <button type="submit">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.0002 19.0002L17.2002 17.2002"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* search popup end */}
    {/* tp-offcanvus-area-start */}
    <div className="tpoffcanvas-area">
      <div className="tpoffcanvas">
        <div className="tpoffcanvas__close-btn">
          <button className="close-btn">
            <i className="fal fa-times" />
          </button>
        </div>
        <div className="tpoffcanvas__logo">
          <a href="/">
            <img src="assets/img/logo/logo-white.png" alt="" />
          </a>
        </div>
        <div className="tpoffcanvas__title">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            incidunt eaque ab cumque, porro maxime autem sed.
          </p>
        </div>
        <div className="tp-main-menu-mobile d-xl-none" />
        <div className="tpoffcanvas__contact-info">
          <div className="tpoffcanvas__contact-title">
            <h5>Contact us</h5>
          </div>
          <ul>
            <li>
              <i className="fa-light fa-location-dot" />
              <a
                href="https://www.google.com/maps/@23.8223586,90.3661283,15z"
                target="_blank"
              >
                Melbone st, Australia, Ny 12099
              </a>
            </li>
            <li>
              <i className="fas fa-envelope" />
              <a href="https://template.wphix.com/cdn-cgi/l/email-protection#04776b68657661606361446369656d682a676b69">
                <span
                  className="__cf_email__"
                  data-cfemail="f7839f929a9287828592b7909a969e9bd994989a"
                >
                  [email&nbsp;protected]
                </span>
              </a>
            </li>
            <li>
              <i className="fal fa-phone-alt" />
              <a href="tel:+48555223224">+48 555 223 224</a>
            </li>
          </ul>
        </div>
        <div className="tpoffcanvas__input">
          <div className="tpoffcanvas__input-title">
            <h4>Get UPdate</h4>
          </div>
          <form action="#">
            <div className="p-relative">
              <input type="text" placeholder="Enter mail" />
              <button>
                <i className="fas fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
        <div className="tpoffcanvas__social">
          <div className="social-icon">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="body-overlay" />
    {/* tp-offcanvus-area-end */}
    <header className="tp-header-height">
      {/* header top area start */}
      <div className="tp-header-top__area tp-header-top__space d-none d-md-block theme-bg-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="tp-header-top__left-info">
                <ul>
                  <li>
                    <i className="flaticon-map" />
                    <a
                      href="https://www.google.com/maps/@23.822337,90.3654296,15z?entry=ttu"
                      target="_blank"
                    >
                      Upazila Parishad, Gournadi, Barishal.
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-envelope" />
                    <a href="https://template.wphix.com/cdn-cgi/l/email-protection#2e404b4b4a464b425e6e4d41435e4f4057004d4143">
                      <span
                        className="__cf_email__"
                        data-cfemail="08666d6d6c606d6478486b676578696671266b6765"
                      >
                        officersclubgournadi@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-3">
              <div className="tp-header-top__right-wrap d-flex align-items-center justify-content-end">
                <div className="tp-header-top__right-info d-none d-xl-block">
                  <span>Council</span>
                  <span>
                    <em>/</em>Goverment
                  </span>
                  <span>
                    <em>/</em>Complaints
                  </span>
                </div>
                <div className="tp-header-top__right-social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header top area end */}
      {/* header area end */}
      <div id="header-sticky" className="tp-header-area tp-header-plr" style={{backgroundColor:'#344955'}}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-8">
              <div className="tp-header-logo">
                <a href="/">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
              <div className="tp-header-menu">
                <nav className="tp-main-menu-content ">
                  <ul>
                    <li className="has-dropdown text-whitez">
                      <a className="text-white" href="/">HOME</a>
                      {/* <div className="tp-submenu submenu has-homemenu">
                        <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-3">
                          <div className="col homemenu">
                            <div className="homemenu-thumb mb-15">
                              <img src="assets/img/menu/home-1.jpg" alt="" />
                              <div className="homemenu-btn">
                                <a className="tp-menu-btn" href="index.html">
                                  Multi page
                                </a>
                                <a
                                  className="tp-menu-btn"
                                  href="index-one-page.html"
                                >
                                  One page
                                </a>
                              </div>
                            </div>
                            <div className="homemenu-content text-center">
                              <h4 className="homemenu-title">
                                <a href="index.html">Home 01</a>
                              </h4>
                            </div>
                          </div>
                          <div className="col homemenu">
                            <div className="homemenu-thumb mb-15">
                              <img src="assets/img/menu/home-2.jpg" alt="" />
                              <div className="homemenu-btn">
                                <a className="tp-menu-btn" href="index-2.html">
                                  Multi page
                                </a>
                                <a
                                  className="tp-menu-btn"
                                  href="index-2-one-page.html"
                                >
                                  One page
                                </a>
                              </div>
                            </div>
                            <div className="homemenu-content text-center">
                              <h4 className="homemenu-title">
                                <a href="index-2.html">Home 02</a>
                              </h4>
                            </div>
                          </div>
                          <div className="col homemenu">
                            <div className="homemenu-thumb mb-15">
                              <img src="assets/img/menu/home-3.jpg" alt="" />
                              <div className="homemenu-btn">
                                <a className="tp-menu-btn" href="index-3.html">
                                  Multi page
                                </a>
                                <a
                                  className="tp-menu-btn"
                                  href="index-3-one-page.html"
                                >
                                  One page
                                </a>
                              </div>
                            </div>
                            <div className="homemenu-content text-center">
                              <h4 className="homemenu-title">
                                <a href="index-3.html">Home 03</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </li>
                    <li>
                      <a className="text-white" href="">About</a>
                    </li>
                    <li className="has-dropdown">
                      <a className="text-white" href="">SERVICES</a>
                      <ul className="tp-submenu submenu">
                        <li>
                          <a className="text-white" href="">Service</a>
                        </li>
                        <li>
                          <a className="text-white" href="">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a className="text-white" href="#">Pages</a>
                      {/* <ul className="tp-submenu submenu">
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="">Team Details</a>
                        </li>
                        <li>
                          <a href="departments.html">Department</a>
                        </li>
                        <li>
                          <a href="department-details.html">Department Details</a>
                        </li>
                        <li>
                          <a href="event.html">Event</a>
                        </li>
                        <li>
                          <a href="event-details.html">Event Details</a>
                        </li>
                        <li>
                          <a href="portfolio.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="">Portfolio Details</a>
                        </li>
                        <li>
                          <a href="history.html">History</a>
                        </li>
                        <li>
                          <a href="price.html">Price</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="has-dropdown">
                      <a className="text-white" href="">NEWS</a>
                      <ul className="tp-submenu submenu">
                        <li>
                          <a className="" href="">Blog</a>
                        </li>
                        <li>
                          <a className="" href="">Blog Standard</a>
                        </li>
                        <li>
                          <a className="" href="">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="text-white" href="">CONTACT</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-4">
              <div className="tp-header-right-box">
                <div className="tp-header-right-action d-flex align-items-center justify-content-end">
                  <div className="tp-header-right-search d-none d-sm-block">
                    <button className="search-open-btn">
                      <i className="fa-regular fa-magnifying-glass" />
                    </button>
                  </div>
                  <div className="tp-header-right-btn d-none d-sm-block">
                    <a className="tp-btn" href="">
                      Member Area
                    </a>
                  </div>
                  <div className="tp-header-right-tel-icon-box d-none d-xxl-block">
                    <div className="tp-header-right-tel-icon d-flex align-items-center">
                      <i className="flaticon-phone-call-1" />
                      <div className="tp-header-right-tel-content">
                        <span>Call Us</span>
                        <a href="tel:(00)122456789">(00) 122 456 789</a>
                      </div>
                    </div>
                  </div>
                  <div className="tp-header-bar d-xl-none text-end">
                    <button className="tp-menu-bar">
                      <i className="fa-light fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header area end */}
    </header>
    <main>
      {/* hero area start */}
      <div className="tp-slider-area">
        <div className="tp-slider-wrapper p-relative">
          <div className="tp-slider-meta-box d-none d-md-block">
            <div className="tp-slider-meta d-flex align-items-center">
              <div className="tp-slider-meta-icon">
                <i className="flaticon-sun" />
              </div>
              <div className="tp-slider-meta-content">
                <span>
                  30°C
                  <br />
                  12:14 Loacl Time
                </span>
              </div>
            </div>
          </div>
          <div className="tp-slider-arrow-box">
            <button className="slider-prev">
              <i className="fa-regular fa-arrow-left" />
            </button>
            <button className="slider-next">
              <i className="fa-regular fa-arrow-right" />
            </button>
          </div>
          <div className="tp-slider-shape-5">
            <img src="assets/img/slider/chairman.jpeg" alt="" />
          </div>
          <div className="swiper-container tp-slider-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="tp-slider-bg d-flex justify-content-center align-items-center p-relative fix">
                  <div
                    className="tp-slider-img"
                    data-background="assets/img/slider/slider11.jpg"
                  />
                  <div className="tp-slider-shape-1 z-index-1">
                    <img src="assets/img/slider/chairman" alt="" />
                  </div>
                  <div className="tp-slider-shape-2 z-index-2">
                    <img src="assets/img/slider/chairman" alt="" />
                  </div>
                  <div className="tp-slider-shape-3 z-index-1">
                    <img src="assets/img/slider/chairman" alt="" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-9">
                        <div className="tp-slider-content-wrap p-relative z-index-2">
                          <div className="tp-slider-shape-4">
                            <img
                              src="assets/img/slider/slider-shape-1-4.png"
                              alt=""
                            />
                          </div>
                          <div className="tp-slider-title-box p-relative">
                            <span className="tp-slider-subtitle">
                              WE ARE ALWAYS OPEN FOR WORLD
                            </span>
                            <h4 className="tp-slider-title">
                              অফিসার্স ক্লাব <br /> গৌরনদী, বরিশাল।
                            </h4>
                            {/* <p>
                              Mayor Christina J. Walsh, an accomplished advocate
                              for wo the City’s 54th mayor. Mayor Walsh was sworn.
                            </p> */}
                          </div>
                          <div className="tp-slider-video-box d-flex align-items-center">
                            <div className="tp-slider-btn">
                              <a className="tp-btn-xl mr-30" href="">
                                Discover More
                              </a>
                            </div>
                            <div className="tp-slider-video d-flex align-items-center">
                              <a
                                className="popup-video video-animation"
                                href="https://www.youtube.com/watch?v=K527oNxtO7o"
                              >
                                <i className="fa-sharp fa-light fa-play" />
                              </a>
                              <span>
                                Watch Our <br /> Showcase
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-slider-bg d-flex justify-content-center align-items-center p-relative fix">
                  <div
                    className="tp-slider-img"
                    data-background="assets/img/slider/slider-22.jpg"
                  />
                  <div className="tp-slider-shape-1 z-index-1">
                    <img src="assets/img/slider/slider-shape-1-1.png" alt="" />
                  </div>
                  <div className="tp-slider-shape-2 z-index-2">
                    <img src="assets/img/slider/slider-shape-1-3.png" alt="" />
                  </div>
                  <div className="tp-slider-shape-3 z-index-1">
                    <img src="assets/img/slider/slider-shape-1-2.png" alt="" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-9">
                        <div className="tp-slider-content-wrap p-relative z-index-2">
                          <div className="tp-slider-shape-4">
                            <img
                              src="assets/img/slider/slider-shape-1-4.png"
                              alt=""
                            />
                          </div>
                          <div className="tp-slider-title-box p-relative">
                            <span className="tp-slider-subtitle">
                              WE ARE ALWAYS OPEN FOR WORLD
                            </span>
                            <h4 className="tp-slider-title">
                            অফিসার্স ক্লাব <br /> গৌরনদী, বরিশাল।
                            </h4>
                            {/* <p>
                              Mayor Christina J. Walsh, an accomplished advocate
                              for wo the City’s 54th mayor. Mayor Walsh was sworn.
                            </p> */}
                          </div>
                          <div className="tp-slider-video-box d-flex align-items-center">
                            <div className="tp-slider-btn">
                              <a className="tp-btn-xl mr-30" href="">
                                Discover More
                              </a>
                            </div>
                            <div className="tp-slider-video d-flex align-items-center">
                              <a
                                className="popup-video video-animation"
                                href="https://www.youtube.com/watch?v=K527oNxtO7o"
                              >
                                <i className="fa-sharp fa-light fa-play" />
                              </a>
                              <span>
                                Watch Our <br /> Showcase
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-slider-bg d-flex justify-content-center align-items-center p-relative fix">
                  <div
                    className="tp-slider-img"
                    data-background="assets/img/slider/slider-33.jpg"
                  />
                  <div className="tp-slider-shape-1 z-index-1">
                    <img src="assets/img/slider/slider-shape-1-1.png" alt="" />
                  </div>
                  <div className="tp-slider-shape-2 z-index-2">
                    <img src="assets/img/slider/slider-shape-1-3.png" alt="" />
                  </div>
                  <div className="tp-slider-shape-3 z-index-1">
                    <img src="assets/img/slider/slider-shape-1-2.png" alt="" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-9">
                        <div className="tp-slider-content-wrap p-relative z-index-2">
                          <div className="tp-slider-shape-4">
                            <img
                              src="assets/img/slider/slider-shape-1-4.png"
                              alt=""
                            />
                          </div>
                          <div className="tp-slider-title-box p-relative">
                            <span className="tp-slider-subtitle">
                              WE ARE ALWAYS OPEN FOR WORLD
                            </span>
                            <h4 className="tp-slider-title">
                            অফিসার্স ক্লাব <br /> গৌরনদী, বরিশাল।
                            </h4>
                            {/* <p>
                              Mayor Christina J. Walsh, an accomplished advocate
                              for wo the City’s 54th mayor. Mayor Walsh was sworn.
                            </p> */}
                          </div>
                          <div className="tp-slider-video-box d-flex align-items-center">
                            <div className="tp-slider-btn">
                              <a className="tp-btn-xl mr-30" href="">
                                Discover More
                              </a>
                            </div>
                            <div className="tp-slider-video d-flex align-items-center">
                              <a
                                className="popup-video video-animation"
                                href="https://www.youtube.com/watch?v=K527oNxtO7o"
                              >
                                <i className="fa-sharp fa-light fa-play" />
                              </a>
                              <span>
                                Watch Our <br /> Showcase
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero area end */}
      {/* feature area start */}
      {/* <div
        id="feature-one-page"
        className="tp-feature-area pt-130 pb-110 p-relative z-index grey-bg-2"
      >
        <div className="tp-feature-shape-1 d-none d-xxl-block">
          <img src="assets/img/feature/ab-shape-2.png" alt="" />
        </div>
        <div className="tp-feature-shape-2">
          <img src="assets/img/feature/ab-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-lg-3 justify-content-center justify-content-xl-start">
            <div
              className="col col-sm-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-feature-item mb-30 text-center">
                <div className="tp-feature-icon">
                  <i className="flaticon-open-book" />
                </div>
                <div className="tp-feature-content">
                  <h4 className="tp-feature-title-sm">EDUCATION</h4>
                </div>
              </div>
            </div>
            <div
              className="col col-sm-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-feature-item mb-30 text-center">
                <div className="tp-feature-icon">
                  <i className="flaticon-job-offer" />
                </div>
                <div className="tp-feature-content">
                  <h4 className="tp-feature-title-sm">BUSINESS</h4>
                </div>
              </div>
            </div>
            <div
              className="col col-sm-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-feature-item mb-30 text-center">
                <div className="tp-feature-icon">
                  <i className="flaticon-targeting" />
                </div>
                <div className="tp-feature-content">
                  <h4 className="tp-feature-title-sm">GOVERMENT</h4>
                </div>
              </div>
            </div>
            <div
              className="col col-sm-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-feature-item mb-30 text-center">
                <div className="tp-feature-icon">
                  <i className="flaticon-goverment" />
                </div>
                <div className="tp-feature-content">
                  <h4 className="tp-feature-title-sm">CITY JOB</h4>
                </div>
              </div>
            </div>
            <div
              className="col col-sm-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay="1s"
            >
              <div className="tp-feature-item mb-30 text-center">
                <div className="tp-feature-icon">
                  <i className="flaticon-traffic-light" />
                </div>
                <div className="tp-feature-content">
                  <h4 className="tp-feature-title-sm">TRAFIC SYSTEM</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* feature area end */}
       {/* news area start */}
       <BreakingNews/>
       {/* news area end */}
      {/* about area start */}
      <div id="about-one-page " className="tp-about-area fix pt-20" style={{backgroundColor:'#344955', color:'white'}}>
        <div className="container">
          <div className="row text-white">
                  আমাদের মিশন ও ভিশন
            <div className="col-xl-8 ">
              <div className="tp-about-title-box mb-45">
                <span className="tp-section-subtitle">HEY WE ARE STATEX!</span>
                <h4 className="tp-section-title text-white">
                  আমাদের মিশন ও ভিশন
                </h4>
              </div>
            </div>
          </div>
         
          <div className="tp-about-right-wrap pb-120 p-relative">
           
            <div className="tp-about-shape d-none d-xl-block">
              <img src="assets/img/about/ab-shape-1.png" alt="" />
            </div>
            
            <div
              className="tp-about-right-img d-none d-xl-block wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              
              <img src="assets/img/about/uno.png" alt="" />
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div className="tp-about-feature-box">
                  <h4 className="tp-about-feature-title">
                    সেবাসমূহ
                  </h4>
                  <div className="tp-about-feature-list">
                    <ul>
                      <li>
                        <a href="">আড্ডা</a>
                      </li>
                      <li>
                        <a href="">খেলাধুলা</a>
                      </li>
                      <li>
                        <a href="">যোগাযোগ বৃদ্ধি</a>
                      </li>
                      <li>
                        <a href="">মতবিনিময়</a>
                      </li>
                      <li>
                        <a href="">
                          সদস্য হওয়ার যোগ্যতা
                        </a>
                      </li>
                      {/* <li>
                        <a href="">Report Polution</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="tp-about-feature-btn">
                    <a className="tp-btn-purple" href="">
                      KNOW MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-12">
                <div className="tp-about-content-wrap p-relative">
                  <div className="tp-about-text ">
                    <h2 className="text-white">Mission</h2>
                    <p className="text-white">
                      We strive to understand what they’re going the what what
                      their price points are, and what’s important to them and
                      their customers. We connect
                    </p>
                  </div>
                  <div className="tp-about-city-info d-flex align-items-center">
                    <i className="flaticon-smart-city" />
                    <span>
                    BE PART OF SOMETHING BIGGER
THAN YOURSELF
                    </span>
                  </div>
                  <div className="tp-about-text">
                    <h2 className="text-white">Vission</h2>
                    <p className="text-white">
                      We strive to understand what they’re going the what what
                      their price points are, and what’s important to them and
                      their customers. We connect
                    </p>
                  </div>
                  {/* <div className="tp-about-progress p-relative">
                    <span className="progress-label">City Development</span>
                    <span className="progress-count">92%</span>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        data-width="92%"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{
                          width: "58%",
                          visibility: "visible",
                          animationDuration: "1s",
                          animationDelay: "0.3s",
                          animationName: "slideInLeft"
                        }}
                      ></div>
                    </div>
                  </div> */}
                  {/* <div className="tp-about-tel-info d-flex align-items-center">
                    <div className="tp-about-tel-box mr-100 d-flex align-items-center">
                      <div className="tp-about-tel-icon">
                        <span>
                          <i className="flaticon-phone-call-1" />
                        </span>
                      </div>
                      <div className="tp-about-tel-number">
                        <span>Call Us</span>
                        <a href="tel:(088)017xxxxx">(088) 01712 xxx xxxs</a>
                      </div>
                    </div>
                    <div className="tp-about-signature">
                      <img src="assets/img/about/signature.png" alt="" />
                    </div>
                  </div> */}
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
           {/* team area start */}
           <div className="tp-team-2-area pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-section-title text-center mb-55">
                <span className="tp-section-subtitle">our team members</span>
                <h4 className="tp-section-title">
                  অফিসার্স ক্লাবের সম্মানীত সদস্যগণ 
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-team-2-item fix p-relative">
                <div className="tp-team-2-thumb-box fix">
                  <img
                    className="w-100"
                    src="assets/img/team/uno.jpg"
                    alt=""
                  />
                </div>
                <div className="tp-team-2-content text-center">
                  <h4 className="tp-team-2-title">
                    <a href="">মোঃ আবু আবদুল্লাহ খান </a>
                  </h4>
                  <span>উপজেলা নির্বাহী অফিসার</span>
                  <div className="tp-team-2-social-box">
                    <button>
                      <i className="fa-solid fa-share-nodes" />
                    </button>
                    <div className="tp-team-2-social">
                      <a className="icon-1" href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a className="icon-2" href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a className="icon-3" href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-team-2-item fix p-relative">
                <div className="tp-team-2-thumb-box fix">
                  <img
                    className="w-100"
                    src="assets/img/team/eng.png"
                    alt=""
                  />
                </div>
                <div className="tp-team-2-content text-center">
                  <h4 className="tp-team-2-title">
                    <a href="">মোঃ অহিদুর রহমান</a>
                  </h4>
                  <span>উপজেলা প্রকৌশলী</span>
                  <div className="tp-team-2-social-box">
                    <button>
                      <i className="fa-solid fa-share-nodes" />
                    </button>
                    <div className="tp-team-2-social">
                      <a className="icon-1" href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a className="icon-2" href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a className="icon-3" href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-team-2-item fix p-relative">
                <div className="tp-team-2-thumb-box fix">
                  <img
                    className="w-100"
                    src="assets/img/team/asok.jpg"
                    alt=""
                  />
                </div>
                <div className="tp-team-2-content text-center">
                  <h4 className="tp-team-2-title">
                    <a href="">অশোক কুমার চৌধুরী</a>
                  </h4>
                  <span>উপজেলা খাদ্য নিয়ন্ত্রক</span>
                  <div className="tp-team-2-social-box">
                    <button>
                      <i className="fa-solid fa-share-nodes" />
                    </button>
                    <div className="tp-team-2-social">
                      <a className="icon-1" href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a className="icon-2" href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a className="icon-3" href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team area end */}
            {/* online-service area start */}
            <div className="tp-online-area fix p-relative pt-120 pb-90" style={{backgroundColor:'#F8F4EC'}}>
        <div className="tp-online-right-shape">
          <img src="assets/img/event/event-right-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tp-online-title-box text-center mb-50">
                <h4 className="tp-section-title">
                  Explore  Services &amp; Our Awesome Resources
                </h4>
              </div>
            </div>
          </div>
          <div
            className="row gx-0 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
              <div className="tp-online-list-box theme-bg">
                <h4 style={{backgroundColor:'#344955', padding:'5px', color:'white', textAlign:'center'}}>Quick Services</h4>
                <ul>
                  <li>
                    <a href="">
                      Rules and regulation
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Financial Statement
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Member Area
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Apply for Membership
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Pay Monthly Subscription 
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Share your related activities
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
              <div className="tp-online-list-box background-style-2 theme-bg-2">
              <h4 style={{backgroundColor:'#344955', padding:'5px', color:'white', textAlign:'center'}}>Notice</h4>
                <ul>
                  <li>
                    <a href="">
                      Monthly meeting schedule date
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Important notice for all
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Tournament notice
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      xxxxx
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      New member collection notice
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      xxxxx
                      <span>
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* online-service area end */}
      {/* service area start */}
      <div
        id="service-one-page"
        className="tp-service-area p-relative theme-bg-2 pt-120 pb-90"
      >
        <div className="tp-service-shape-1 d-none d-lg-block">
          <img src="assets/img/service/bd2-removebg-preview.png" alt="" />
        </div>
        <div className="container custom-container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-title-box text-center mb-70">
                <span className="tp-section-subtitle">OUR Goal</span>
                <h4 className="tp-section-title text-white">
                BE PART OF SOMETHING BIGGER
THAN YOURSELF <br /> 
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-service-item p-relative">
                <div className="tp-service-shape">
                  <img src="assets/img/service/sv-item-shape.png" alt="" />
                </div>
                <div className="tp-service-icon">
                  <i className="flaticon-approved" />
                </div>
                <div className="tp-service-content">
                  <h4 className="tp-service-title-sm">
                    <a href="">MemberShip</a>
                  </h4>
                  <p>Write a short descip onthat ipsum loreum sed ameture hot</p>
                </div>
                <div className="tp-service-link">
                  <a href="">
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-item p-relative">
                <div className="tp-service-shape">
                  <img src="assets/img/service/sv-item-shape.png" alt="" />
                </div>
                <div className="tp-service-icon">
                  <i className="flaticon-car-insurance" />
                </div>
                <div className="tp-service-content">
                  <h4 className="tp-service-title-sm">
                    <a href="">Achievement</a>
                  </h4>
                  <p>Write a short descip onthat ipsum loreum sed ameture hot</p>
                </div>
                <div className="tp-service-link">
                  <a href="">
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-service-item p-relative">
                <div className="tp-service-shape">
                  <img src="assets/img/service/sv-item-shape.png" alt="" />
                </div>
                <div className="tp-service-icon">
                  <i className="flaticon-industrial-park" />
                </div>
                <div className="tp-service-content">
                  <h4 className="tp-service-title-sm">
                    <a href="">Gallary</a>
                  </h4>
                  <p>Write a short descip onthat ipsum loreum sed ameture hot</p>
                </div>
                <div className="tp-service-link">
                  <a href="">
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-service-item p-relative">
                <div className="tp-service-shape">
                  <img src="assets/img/service/sv-item-shape.png" alt="" />
                </div>
                <div className="tp-service-icon">
                  <i className="flaticon-scroll" />
                </div>
                <div className="tp-service-content">
                  <h4 className="tp-service-title-sm">
                    <a href="">Culture and Recreation </a>
                  </h4>
                  <p>Write a short descip onthat ipsum loreum sed ameture hot</p>
                </div>
                <div className="tp-service-link">
                  <a href="">
                    Read More <i className="fa-light fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
      {/* event area start */}
      {/* <div className="tp-event-area pt-120 pb-90 p-relative grey-bg-2">
        <div className="container">
          <div className="tp-event-title-wrap mb-40">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="tp-event-title-box text-center">
                  <span className="tp-section-subtitle">Latest events</span>
                  <h4 className="tp-section-title">
                    Upcoming city activities &amp;
                    <br />
                    events schedule
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-event-item text-center">
                <div className="tp-event-thumb fix">
                  <img src="assets/img/event/event-1.jpg" alt="" />
                </div>
                <div className="tp-event-content-wrap">
                  <div className="tp-event-content">
                    <div className="tp-event-meta">
                      <span>
                        <i className="fa-regular fa-clock" />
                        08:00 am
                      </span>
                      <span>
                        <i className="fa-light fa-location-dot" />
                        <a
                          href="https://www.google.com/maps/@23.8202709,90.2804172,9z?entry=ttu"
                          target="_blank"
                        >
                          Watsica 24, USA
                        </a>
                      </span>
                    </div>
                    <h4 className="tp-event-title-sm">
                      <a href="event-details.html">
                        The city in photography contest in london
                      </a>
                    </h4>
                  </div>
                  <div className="tp-event-link">
                    <a href="event-details.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-event-item text-center">
                <div className="tp-event-thumb fix">
                  <img src="assets/img/event/event-2.jpg" alt="" />
                </div>
                <div className="tp-event-content-wrap">
                  <div className="tp-event-content">
                    <div className="tp-event-meta">
                      <span>
                        <i className="fa-regular fa-clock" />
                        08:00 am
                      </span>
                      <span>
                        <i className="fa-light fa-location-dot" />
                        <a
                          href="https://www.google.com/maps/@23.8202709,90.2804172,9z?entry=ttu"
                          target="_blank"
                        >
                          Watsica 24, USA
                        </a>
                      </span>
                    </div>
                    <h4 className="tp-event-title-sm">
                      <a href="event-details.html">
                        Computer training or workshop
                      </a>
                    </h4>
                  </div>
                  <div className="tp-event-link">
                    <a href="event-details.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-event-item text-center">
                <div className="tp-event-thumb fix">
                  <img src="assets/img/event/event-3.jpg" alt="" />
                </div>
                <div className="tp-event-content-wrap">
                  <div className="tp-event-content">
                    <div className="tp-event-meta">
                      <span>
                        <i className="fa-regular fa-clock" />
                        08:00 am
                      </span>
                      <span>
                        <i className="fa-light fa-location-dot" />
                        <a
                          href="https://www.google.com/maps/@23.8202709,90.2804172,9z?entry=ttu"
                          target="_blank"
                        >
                          Watsica 24, USA
                        </a>
                      </span>
                    </div>
                    <h4 className="tp-event-title-sm">
                      <a href="event-details.html">
                        Sport games for current childrens
                      </a>
                    </h4>
                  </div>
                  <div className="tp-event-link">
                    <a href="event-details.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* event area end */}
      {/* funfact area end */}
      {/* <div
        className="tp-funfact-2-area tp-funfact-2-bg pt-120 pb-90 p-relative"
        data-background="assets/img/funfact/funfact-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-funfact-2-item z-index text-center">
                <div className="tp-funfact-2-icon p-relative">
                  <span>
                    <i className="flaticon-foundation" />
                  </span>
                </div>
                <div className="tp-funfact-2-content">
                  <h4>
                    <em
                      data-purecounter-duration={1}
                      data-purecounter-end={820}
                      className="purecounter"
                    >
                      0
                    </em>
                    +
                  </h4>
                  <span>Years of Foundation</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-funfact-2-item z-index text-center">
                <div className="tp-funfact-2-icon p-relative">
                  <span>
                    <i className="flaticon-running-man" />
                  </span>
                </div>
                <div className="tp-funfact-2-content">
                  <h4>
                    <em
                      data-purecounter-duration={1}
                      data-purecounter-end={26}
                      className="purecounter"
                    >
                      0
                    </em>
                    k
                  </h4>
                  <span>People in the City</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-funfact-2-item z-index text-center">
                <div className="tp-funfact-2-icon p-relative">
                  <span>
                    <i className="flaticon-landscape" />
                  </span>
                </div>
                <div className="tp-funfact-2-content">
                  <h4>
                    <em
                      data-purecounter-duration={1}
                      data-purecounter-end={46}
                      className="purecounter"
                    >
                      0
                    </em>
                    %
                  </h4>
                  <span>Private Gardens Lands</span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-funfact-2-item z-index text-center">
                <div className="tp-funfact-2-icon p-relative">
                  <span>
                    <i className="flaticon-windrose" />
                  </span>
                </div>
                <div className="tp-funfact-2-content">
                  <h4>
                    <em
                      data-purecounter-duration={1}
                      data-purecounter-end={920}
                      className="purecounter"
                    >
                      0
                    </em>
                    +
                  </h4>
                  <span>Successful Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* funfact area end */}
      {/* project area start */}
      <div className="tp-project-area pt-120 fix">
        <div className="container">
          <div className="tp-project-top-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-xl-7 col-lg-6">
                <div className="tp-project-title-box">
                  <span className="tp-section-subtitle">Some Activities</span>
                  <h4 className="tp-section-title">
                    Explore  Beautiful
                    <br />
                    Highlights Photo
                  </h4>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-project-right-text">
                  <p>
                    We strive to understand what they’re going the what what their
                    price points are, and what’s important to them and their
                    customers. We connect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-xl-12">
            <div className="tp-project-slider-wrap">
              <div className="swiper-container tp-project-slider-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="tp-project-item p-relative">
                      <div className="tp-project-thumb fix">
                        <img src="assets/img/project/ai1.jpg" alt="" />
                      </div>
                      <div className="tp-project-content-wrap d-flex align-items-center justify-content-between">
                        <div className="tp-project-content">
                          <span>Club Tour Activity</span>
                          <h4 className="tp-project-title-sm">
                            <a href="">Kuakata Sea biz</a>
                          </h4>
                        </div>
                        <div className="tp-project-icon">
                          <a href="">
                            <i className="fa-regular fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-project-item p-relative">
                      <div className="tp-project-thumb fix">
                        <img src="assets/img/project/ai2.jpg" alt="" />
                      </div>
                      <div className="tp-project-content-wrap d-flex align-items-center justify-content-between">
                        <div className="tp-project-content">
                          <span>Sports Meeting Activity</span>
                          <h4 className="tp-project-title-sm">
                            <a href="">Officers Club</a>
                          </h4>
                        </div>
                        <div className="tp-project-icon">
                          <a href="">
                            <i className="fa-regular fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-project-item p-relative">
                      <div className="tp-project-thumb fix">
                        <img src="assets/img/project/ai3.jpg" alt="" />
                      </div>
                      <div className="tp-project-content-wrap d-flex align-items-center justify-content-between">
                        <div className="tp-project-content">
                          <span>Community Service</span>
                          <h4 className="tp-project-title-sm">
                            <a href="">Community Service</a>
                          </h4>
                        </div>
                        <div className="tp-project-icon">
                          <a href="">
                            <i className="fa-regular fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-project-item p-relative">
                      <div className="tp-project-thumb fix">
                        <img src="assets/img/project/ai4.jpg" alt="" />
                      </div>
                      <div className="tp-project-content-wrap d-flex align-items-center justify-content-between">
                        <div className="tp-project-content">
                          <span>Cultural Event</span>
                          <h4 className="tp-project-title-sm">
                            <a href="">Cultural Event</a>
                          </h4>
                        </div>
                        <div className="tp-project-icon">
                          <a href="">
                            <i className="fa-regular fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-project-item p-relative">
                      <div className="tp-project-thumb fix">
                        <img src="assets/img/project/ai5.jpg" alt="" />
                      </div>
                      <div className="tp-project-content-wrap d-flex align-items-center justify-content-between">
                        <div className="tp-project-content">
                          <span>Educational Workshop</span>
                          <h4 className="tp-project-title-sm">
                            <a href="">Educational Workshop</a>
                          </h4>
                        </div>
                        <div className="tp-project-icon">
                          <a href="">
                            <i className="fa-regular fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* project area end */}

      {/* video area start */}
      <div className="tp-video-area tp-video-space fix p-relative">
        <div className="tp-video-shape-1 d-none d-xl-block">
          <img src="assets/img/video/shape-1-1.png" alt="" />
        </div>
        <div className="tp-video-shape-2 d-none d-xl-block">
          <img src="assets/img/video/shape-1-2.png" alt="" />
        </div>
        <div className="tp-video-shape-3 d-none d-xl-block">
          <img src="assets/img/video/shape-1-3.png" alt="" />
        </div>
        <div className="tp-video-shape-4 d-none d-xl-block">
          <img src="assets/img/video/shape-1-4.png" alt="" />
        </div>
        <div
          className="tp-video-bg jarallax"
          data-background="assets/img/video/bg-1-1.jpg"
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-video-content text-center">
                <div className="tp-video-content-icon-box">
                  <a
                    className="popup-video video-animation-2"
                    href="https://www.youtube.com/watch?v=PO_fBTkoznc"
                  >
                    <i className="flaticon-play" />
                  </a>
                </div>
                <h6 className="tp-video-content-title">
                  Our latest activites video
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video area end */}
 
      {/* testimonial area end */}
      <div className="tp-testimonial-area theme-bg-2 pt-120 pb-120 z-index">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tp-testimonial-title-box mb-50 text-center">
                <span className="tp-section-subtitle">our testimonials</span>
                <h4 className="tp-section-title text-white">
                  Some Feedback
                </h4>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-img-wrap p-relative">
            <div className="tp-testimonial-arrow-box">
              <button className="testi-prev">
                <i className="fa-solid fa-arrow-left" />
              </button>
              <button className="testi-next">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
            <div className="tp-testimonial-img-1 d-none d-xl-block">
              <img src="assets/img/testimonial/testi-1.jpg" alt="" />
            </div>
            <div className="tp-testimonial-img-2 d-none d-xl-block">
              <img src="assets/img/testimonial/testi-2.jpg" alt="" />
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div className="tp-testimonial-bg p-relative">
                  <div className="tp-testimonial-bg-shape">
                    <img src="assets/img/testimonial/testi-bg-shape.png" alt="" />
                  </div>
                  <div className="swiper-container tp-testimonial-slider-actve">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="tp-testimonial-item">
                          <div className="tp-testimonial-avatar">
                            <img src="assets/img/avata/avata-3.png" alt="" />
                          </div>
                          <div className="tp-testimonial-content">
                            <p>
                              “The 3-day long banquet organized by the Officers Club Gourandi was very nice and attractive. Many thanks to the organizers.”
                            </p>
                          </div>
                          <div className="tp-testimonial-avatar-info">
                            <span>xxx</span>
                            <h4 className="tp-testimonial-title-sm">
                             Barishal
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tp-testimonial-item">
                          <div className="tp-testimonial-avatar">
                            <img src="assets/img/avata/avata-3.png" alt="" />
                          </div>
                          <div className="tp-testimonial-content">
                            <p>
                              “The 3-day long banquet organized by the Officers Club Gourandi was very nice and attractive. Many thanks to the organizers.”
                            </p>
                          </div>
                          <div className="tp-testimonial-avatar-info">
                            <span>xxx </span>
                            <h4 className="tp-testimonial-title-sm">
                              Barishal
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial area end */}
      {/* blog area start */}
      <div id="blog-one-page" className="tp-blog-area pt-100 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-section-title text-center mb-55">
                <span className="tp-section-subtitle">our latest blogs</span>
                <h4 className="tp-section-title">
                  Latest News &amp; Blog <br />
                  From Articles
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-blog__item">
                <div className="tp-blog__thumb p-relative fix">
                  <a href="">
                    <img
                      className="w-100"
                      src="assets/img/blog/kuakata.jpg"
                      alt=""
                    />
                  </a>
                  <span>
                    <img src="assets/img/avata/avata-1.png" alt="" />
                    <i>By: Rasalina</i>
                  </span>
                </div>
                <div className="tp-blog__content-wrap">
                  <div className="tp-blog__meta">
                    <span>
                      <svg
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.44824 13.0469H3.69824V10.7969H1.44824V13.0469ZM4.19824 13.0469H6.69824V10.7969H4.19824V13.0469ZM1.44824 10.2969H3.69824V7.79687H1.44824V10.2969ZM4.19824 10.2969H6.69824V7.79687H4.19824V10.2969ZM1.44824 7.29687H3.69824V5.04688H1.44824V7.29687ZM7.19824 13.0469H9.69824V10.7969H7.19824V13.0469ZM4.19824 7.29687H6.69824V5.04688H4.19824V7.29687ZM10.1982 13.0469H12.4482V10.7969H10.1982V13.0469ZM7.19824 10.2969H9.69824V7.79687H7.19824V10.2969ZM4.44824 3.54687V1.29687C4.44824 1.22917 4.4222 1.17187 4.37012 1.125C4.32324 1.07292 4.26595 1.04687 4.19824 1.04687H3.69824C3.63053 1.04687 3.57064 1.07292 3.51855 1.125C3.47168 1.17187 3.44824 1.22917 3.44824 1.29687V3.54687C3.44824 3.61458 3.47168 3.67448 3.51855 3.72656C3.57064 3.77344 3.63053 3.79687 3.69824 3.79687H4.19824C4.26595 3.79687 4.32324 3.77344 4.37012 3.72656C4.4222 3.67448 4.44824 3.61458 4.44824 3.54687ZM10.1982 10.2969H12.4482V7.79687H10.1982V10.2969ZM7.19824 7.29687H9.69824V5.04688H7.19824V7.29687ZM10.1982 7.29687H12.4482V5.04688H10.1982V7.29687ZM10.4482 3.54687V1.29687C10.4482 1.22917 10.4222 1.17187 10.3701 1.125C10.3232 1.07292 10.266 1.04687 10.1982 1.04687H9.69824C9.63053 1.04687 9.57064 1.07292 9.51855 1.125C9.47168 1.17187 9.44824 1.22917 9.44824 1.29687V3.54687C9.44824 3.61458 9.47168 3.67448 9.51855 3.72656C9.57064 3.77344 9.63053 3.79687 9.69824 3.79687H10.1982C10.266 3.79687 10.3232 3.77344 10.3701 3.72656C10.4222 3.67448 10.4482 3.61458 10.4482 3.54687ZM13.4482 3.04687V13.0469C13.4482 13.3177 13.3493 13.5521 13.1514 13.75C12.9535 13.9479 12.7191 14.0469 12.4482 14.0469H1.44824C1.17741 14.0469 0.943034 13.9479 0.745117 13.75C0.547201 13.5521 0.448242 13.3177 0.448242 13.0469V3.04687C0.448242 2.77604 0.547201 2.54167 0.745117 2.34375C0.943034 2.14583 1.17741 2.04687 1.44824 2.04687H2.44824V1.29687C2.44824 0.953124 2.57064 0.658853 2.81543 0.414062C3.06022 0.16927 3.35449 0.046874 3.69824 0.046874H4.19824C4.54199 0.046874 4.83626 0.16927 5.08105 0.414062C5.32585 0.658853 5.44824 0.953124 5.44824 1.29687V2.04687H8.44824V1.29687C8.44824 0.953124 8.57064 0.658853 8.81543 0.414062C9.06022 0.16927 9.35449 0.046874 9.69824 0.046874H10.1982C10.542 0.046874 10.8363 0.16927 11.0811 0.414062C11.3258 0.658853 11.4482 0.953124 11.4482 1.29687V2.04687H12.4482C12.7191 2.04687 12.9535 2.14583 13.1514 2.34375C13.3493 2.54167 13.4482 2.77604 13.4482 3.04687Z"
                          fill="currentcolor"
                        />
                      </svg>
                      12 Apr 2023
                    </span>
                    <span>
                      <svg
                        width={17}
                        height={14}
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.95839 2.17857C8.16672 1.86905 7.31553 1.71428 6.40482 1.71428C5.4941 1.71428 4.64291 1.86905 3.85125 2.17857C3.05958 2.48809 2.42863 2.90774 1.95839 3.4375C1.4941 3.96726 1.26196 4.53571 1.26196 5.14286C1.26196 5.63095 1.4197 6.10119 1.73517 6.55357C2.05065 7.00595 2.4941 7.39881 3.06553 7.73214L3.9316 8.23214L3.6191 8.98214C3.82148 8.8631 4.00601 8.74702 4.17267 8.63393L4.56553 8.35714L5.03875 8.44643C5.50303 8.52976 5.95839 8.57143 6.40482 8.57143C7.31553 8.57143 8.16672 8.41667 8.95839 8.10714C9.75005 7.79762 10.378 7.37798 10.8423 6.84821C11.3126 6.31845 11.5477 5.75 11.5477 5.14286C11.5477 4.53571 11.3126 3.96726 10.8423 3.4375C10.378 2.90774 9.75005 2.48809 8.95839 2.17857ZM3.2441 1.1875C4.21434 0.776785 5.26791 0.571428 6.40482 0.571428C7.54172 0.571428 8.59232 0.776785 9.5566 1.1875C10.5268 1.59226 11.2917 2.14583 11.8512 2.84821C12.4108 3.55059 12.6905 4.31548 12.6905 5.14286C12.6905 5.97024 12.4108 6.73512 11.8512 7.4375C11.2917 8.13988 10.5268 8.69643 9.5566 9.10714C8.59232 9.5119 7.54172 9.71429 6.40482 9.71429C5.89291 9.71429 5.3691 9.66667 4.83339 9.57143C4.09529 10.0952 3.26791 10.4762 2.35125 10.7143C2.13696 10.7679 1.88101 10.8155 1.58339 10.8571H1.5566C1.49113 10.8571 1.42863 10.8333 1.3691 10.7857C1.31553 10.7381 1.28279 10.6756 1.27089 10.5982C1.26494 10.5804 1.26196 10.5625 1.26196 10.5446C1.26196 10.5208 1.26196 10.5 1.26196 10.4821C1.26791 10.4643 1.27386 10.4464 1.27982 10.4286C1.29172 10.4107 1.30065 10.3958 1.3066 10.3839C1.31255 10.372 1.32148 10.3571 1.33339 10.3393C1.35125 10.3155 1.36315 10.3006 1.3691 10.2946C1.38101 10.2827 1.39589 10.2679 1.41375 10.25C1.4316 10.2262 1.44351 10.2113 1.44946 10.2054C1.47922 10.1696 1.54767 10.0952 1.65482 9.98214C1.76196 9.86905 1.83934 9.78274 1.88696 9.72321C1.93458 9.65774 2.00005 9.57143 2.08339 9.46429C2.17267 9.35119 2.24708 9.23512 2.3066 9.11607C2.37208 8.99702 2.43458 8.86607 2.4941 8.72321C1.75601 8.29464 1.17565 7.76786 0.753031 7.14286C0.330412 6.51786 0.119102 5.85119 0.119102 5.14286C0.119102 4.31548 0.398864 3.55059 0.958388 2.84821C1.51791 2.14583 2.27982 1.59226 3.2441 1.1875ZM13.7441 11.0089C13.8036 11.1518 13.8632 11.2827 13.9227 11.4018C13.9882 11.5208 14.0626 11.6369 14.1459 11.75C14.2352 11.8571 14.3036 11.9405 14.3512 12C14.3989 12.0655 14.4762 12.1548 14.5834 12.2679C14.6905 12.381 14.759 12.4554 14.7887 12.4911C14.7947 12.497 14.8066 12.5089 14.8245 12.5268C14.8423 12.5506 14.8542 12.5655 14.8602 12.5714C14.8721 12.5833 14.884 12.5982 14.8959 12.6161C14.9137 12.6399 14.9257 12.6577 14.9316 12.6696C14.9376 12.6815 14.9435 12.6964 14.9495 12.7143C14.9614 12.7321 14.9673 12.75 14.9673 12.7679C14.9733 12.7857 14.9762 12.8036 14.9762 12.8214C14.9762 12.8452 14.9733 12.8661 14.9673 12.8839C14.9495 12.9673 14.9108 13.0327 14.8512 13.0804C14.7917 13.128 14.7262 13.1488 14.6548 13.1429C14.3572 13.1012 14.1012 13.0536 13.887 13C12.9703 12.7619 12.1429 12.381 11.4048 11.8571C10.8691 11.9524 10.3453 12 9.83339 12C8.22029 12 6.81553 11.6071 5.6191 10.8214C5.96434 10.8452 6.22625 10.8571 6.40482 10.8571C7.36315 10.8571 8.28279 10.7232 9.16375 10.4554C10.0447 10.1875 10.8304 9.80357 11.5209 9.30357C12.2649 8.75595 12.8364 8.125 13.2352 7.41071C13.634 6.69643 13.8334 5.94048 13.8334 5.14286C13.8334 4.68452 13.7649 4.23214 13.628 3.78571C14.3959 4.20833 15.003 4.73809 15.4495 5.375C15.8959 6.0119 16.1191 6.69643 16.1191 7.42857C16.1191 8.14286 15.9078 8.8125 15.4852 9.4375C15.0626 10.0565 14.4822 10.5804 13.7441 11.0089Z"
                          fill="currentcolor"
                        />
                      </svg>
                      Comments (01)
                    </span>
                  </div>
                  <h5 className="tp-blog__title-sm">
                    <a href="">
                    A Memorable Journey to Kuakata with Gournadi Officer's Club
                    </a>
                  </h5>
                  <div className="tp-blog__link">
                    <a href="">
                      Read More <i className="fa-regular fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-blog__item">
                <div className="tp-blog__thumb p-relative fix">
                  <a href="">
                    <img
                      className="w-100"
                      src="assets/img/blog/kuakata.jpg"
                      alt=""
                    />
                  </a>
                  <span>
                    <img src="assets/img/avata/avata-1.png" alt="" />
                    <i>By: Rasalina</i>
                  </span>
                </div>
                <div className="tp-blog__content-wrap">
                  <div className="tp-blog__meta">
                    <span>
                      <svg
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.44824 13.0469H3.69824V10.7969H1.44824V13.0469ZM4.19824 13.0469H6.69824V10.7969H4.19824V13.0469ZM1.44824 10.2969H3.69824V7.79687H1.44824V10.2969ZM4.19824 10.2969H6.69824V7.79687H4.19824V10.2969ZM1.44824 7.29687H3.69824V5.04688H1.44824V7.29687ZM7.19824 13.0469H9.69824V10.7969H7.19824V13.0469ZM4.19824 7.29687H6.69824V5.04688H4.19824V7.29687ZM10.1982 13.0469H12.4482V10.7969H10.1982V13.0469ZM7.19824 10.2969H9.69824V7.79687H7.19824V10.2969ZM4.44824 3.54687V1.29687C4.44824 1.22917 4.4222 1.17187 4.37012 1.125C4.32324 1.07292 4.26595 1.04687 4.19824 1.04687H3.69824C3.63053 1.04687 3.57064 1.07292 3.51855 1.125C3.47168 1.17187 3.44824 1.22917 3.44824 1.29687V3.54687C3.44824 3.61458 3.47168 3.67448 3.51855 3.72656C3.57064 3.77344 3.63053 3.79687 3.69824 3.79687H4.19824C4.26595 3.79687 4.32324 3.77344 4.37012 3.72656C4.4222 3.67448 4.44824 3.61458 4.44824 3.54687ZM10.1982 10.2969H12.4482V7.79687H10.1982V10.2969ZM7.19824 7.29687H9.69824V5.04688H7.19824V7.29687ZM10.1982 7.29687H12.4482V5.04688H10.1982V7.29687ZM10.4482 3.54687V1.29687C10.4482 1.22917 10.4222 1.17187 10.3701 1.125C10.3232 1.07292 10.266 1.04687 10.1982 1.04687H9.69824C9.63053 1.04687 9.57064 1.07292 9.51855 1.125C9.47168 1.17187 9.44824 1.22917 9.44824 1.29687V3.54687C9.44824 3.61458 9.47168 3.67448 9.51855 3.72656C9.57064 3.77344 9.63053 3.79687 9.69824 3.79687H10.1982C10.266 3.79687 10.3232 3.77344 10.3701 3.72656C10.4222 3.67448 10.4482 3.61458 10.4482 3.54687ZM13.4482 3.04687V13.0469C13.4482 13.3177 13.3493 13.5521 13.1514 13.75C12.9535 13.9479 12.7191 14.0469 12.4482 14.0469H1.44824C1.17741 14.0469 0.943034 13.9479 0.745117 13.75C0.547201 13.5521 0.448242 13.3177 0.448242 13.0469V3.04687C0.448242 2.77604 0.547201 2.54167 0.745117 2.34375C0.943034 2.14583 1.17741 2.04687 1.44824 2.04687H2.44824V1.29687C2.44824 0.953124 2.57064 0.658853 2.81543 0.414062C3.06022 0.16927 3.35449 0.046874 3.69824 0.046874H4.19824C4.54199 0.046874 4.83626 0.16927 5.08105 0.414062C5.32585 0.658853 5.44824 0.953124 5.44824 1.29687V2.04687H8.44824V1.29687C8.44824 0.953124 8.57064 0.658853 8.81543 0.414062C9.06022 0.16927 9.35449 0.046874 9.69824 0.046874H10.1982C10.542 0.046874 10.8363 0.16927 11.0811 0.414062C11.3258 0.658853 11.4482 0.953124 11.4482 1.29687V2.04687H12.4482C12.7191 2.04687 12.9535 2.14583 13.1514 2.34375C13.3493 2.54167 13.4482 2.77604 13.4482 3.04687Z"
                          fill="currentcolor"
                        />
                      </svg>
                      12 Apr 2023
                    </span>
                    <span>
                      <svg
                        width={17}
                        height={14}
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.95839 2.17857C8.16672 1.86905 7.31553 1.71428 6.40482 1.71428C5.4941 1.71428 4.64291 1.86905 3.85125 2.17857C3.05958 2.48809 2.42863 2.90774 1.95839 3.4375C1.4941 3.96726 1.26196 4.53571 1.26196 5.14286C1.26196 5.63095 1.4197 6.10119 1.73517 6.55357C2.05065 7.00595 2.4941 7.39881 3.06553 7.73214L3.9316 8.23214L3.6191 8.98214C3.82148 8.8631 4.00601 8.74702 4.17267 8.63393L4.56553 8.35714L5.03875 8.44643C5.50303 8.52976 5.95839 8.57143 6.40482 8.57143C7.31553 8.57143 8.16672 8.41667 8.95839 8.10714C9.75005 7.79762 10.378 7.37798 10.8423 6.84821C11.3126 6.31845 11.5477 5.75 11.5477 5.14286C11.5477 4.53571 11.3126 3.96726 10.8423 3.4375C10.378 2.90774 9.75005 2.48809 8.95839 2.17857ZM3.2441 1.1875C4.21434 0.776785 5.26791 0.571428 6.40482 0.571428C7.54172 0.571428 8.59232 0.776785 9.5566 1.1875C10.5268 1.59226 11.2917 2.14583 11.8512 2.84821C12.4108 3.55059 12.6905 4.31548 12.6905 5.14286C12.6905 5.97024 12.4108 6.73512 11.8512 7.4375C11.2917 8.13988 10.5268 8.69643 9.5566 9.10714C8.59232 9.5119 7.54172 9.71429 6.40482 9.71429C5.89291 9.71429 5.3691 9.66667 4.83339 9.57143C4.09529 10.0952 3.26791 10.4762 2.35125 10.7143C2.13696 10.7679 1.88101 10.8155 1.58339 10.8571H1.5566C1.49113 10.8571 1.42863 10.8333 1.3691 10.7857C1.31553 10.7381 1.28279 10.6756 1.27089 10.5982C1.26494 10.5804 1.26196 10.5625 1.26196 10.5446C1.26196 10.5208 1.26196 10.5 1.26196 10.4821C1.26791 10.4643 1.27386 10.4464 1.27982 10.4286C1.29172 10.4107 1.30065 10.3958 1.3066 10.3839C1.31255 10.372 1.32148 10.3571 1.33339 10.3393C1.35125 10.3155 1.36315 10.3006 1.3691 10.2946C1.38101 10.2827 1.39589 10.2679 1.41375 10.25C1.4316 10.2262 1.44351 10.2113 1.44946 10.2054C1.47922 10.1696 1.54767 10.0952 1.65482 9.98214C1.76196 9.86905 1.83934 9.78274 1.88696 9.72321C1.93458 9.65774 2.00005 9.57143 2.08339 9.46429C2.17267 9.35119 2.24708 9.23512 2.3066 9.11607C2.37208 8.99702 2.43458 8.86607 2.4941 8.72321C1.75601 8.29464 1.17565 7.76786 0.753031 7.14286C0.330412 6.51786 0.119102 5.85119 0.119102 5.14286C0.119102 4.31548 0.398864 3.55059 0.958388 2.84821C1.51791 2.14583 2.27982 1.59226 3.2441 1.1875ZM13.7441 11.0089C13.8036 11.1518 13.8632 11.2827 13.9227 11.4018C13.9882 11.5208 14.0626 11.6369 14.1459 11.75C14.2352 11.8571 14.3036 11.9405 14.3512 12C14.3989 12.0655 14.4762 12.1548 14.5834 12.2679C14.6905 12.381 14.759 12.4554 14.7887 12.4911C14.7947 12.497 14.8066 12.5089 14.8245 12.5268C14.8423 12.5506 14.8542 12.5655 14.8602 12.5714C14.8721 12.5833 14.884 12.5982 14.8959 12.6161C14.9137 12.6399 14.9257 12.6577 14.9316 12.6696C14.9376 12.6815 14.9435 12.6964 14.9495 12.7143C14.9614 12.7321 14.9673 12.75 14.9673 12.7679C14.9733 12.7857 14.9762 12.8036 14.9762 12.8214C14.9762 12.8452 14.9733 12.8661 14.9673 12.8839C14.9495 12.9673 14.9108 13.0327 14.8512 13.0804C14.7917 13.128 14.7262 13.1488 14.6548 13.1429C14.3572 13.1012 14.1012 13.0536 13.887 13C12.9703 12.7619 12.1429 12.381 11.4048 11.8571C10.8691 11.9524 10.3453 12 9.83339 12C8.22029 12 6.81553 11.6071 5.6191 10.8214C5.96434 10.8452 6.22625 10.8571 6.40482 10.8571C7.36315 10.8571 8.28279 10.7232 9.16375 10.4554C10.0447 10.1875 10.8304 9.80357 11.5209 9.30357C12.2649 8.75595 12.8364 8.125 13.2352 7.41071C13.634 6.69643 13.8334 5.94048 13.8334 5.14286C13.8334 4.68452 13.7649 4.23214 13.628 3.78571C14.3959 4.20833 15.003 4.73809 15.4495 5.375C15.8959 6.0119 16.1191 6.69643 16.1191 7.42857C16.1191 8.14286 15.9078 8.8125 15.4852 9.4375C15.0626 10.0565 14.4822 10.5804 13.7441 11.0089Z"
                          fill="currentcolor"
                        />
                      </svg>
                      Comments (01)
                    </span>
                  </div>
                  <h5 className="tp-blog__title-sm">
                    <a href="">
                    A Memorable Journey to Kuakata with Gournadi Officer's Club
                    </a>
                  </h5>
                  <div className="tp-blog__link">
                    <a href="">
                      Read More <i className="fa-regular fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="tp-blog__item">
                <div className="tp-blog__thumb p-relative fix">
                  <a href="">
                    <img
                      className="w-100"
                      src="assets/img/blog/kuakata.jpg"
                      alt=""
                    />
                  </a>
                  <span>
                    <img src="assets/img/avata/avata-1.png" alt="" />
                    <i>By: Rasalina</i>
                  </span>
                </div>
                <div className="tp-blog__content-wrap">
                  <div className="tp-blog__meta">
                    <span>
                      <svg
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.44824 13.0469H3.69824V10.7969H1.44824V13.0469ZM4.19824 13.0469H6.69824V10.7969H4.19824V13.0469ZM1.44824 10.2969H3.69824V7.79687H1.44824V10.2969ZM4.19824 10.2969H6.69824V7.79687H4.19824V10.2969ZM1.44824 7.29687H3.69824V5.04688H1.44824V7.29687ZM7.19824 13.0469H9.69824V10.7969H7.19824V13.0469ZM4.19824 7.29687H6.69824V5.04688H4.19824V7.29687ZM10.1982 13.0469H12.4482V10.7969H10.1982V13.0469ZM7.19824 10.2969H9.69824V7.79687H7.19824V10.2969ZM4.44824 3.54687V1.29687C4.44824 1.22917 4.4222 1.17187 4.37012 1.125C4.32324 1.07292 4.26595 1.04687 4.19824 1.04687H3.69824C3.63053 1.04687 3.57064 1.07292 3.51855 1.125C3.47168 1.17187 3.44824 1.22917 3.44824 1.29687V3.54687C3.44824 3.61458 3.47168 3.67448 3.51855 3.72656C3.57064 3.77344 3.63053 3.79687 3.69824 3.79687H4.19824C4.26595 3.79687 4.32324 3.77344 4.37012 3.72656C4.4222 3.67448 4.44824 3.61458 4.44824 3.54687ZM10.1982 10.2969H12.4482V7.79687H10.1982V10.2969ZM7.19824 7.29687H9.69824V5.04688H7.19824V7.29687ZM10.1982 7.29687H12.4482V5.04688H10.1982V7.29687ZM10.4482 3.54687V1.29687C10.4482 1.22917 10.4222 1.17187 10.3701 1.125C10.3232 1.07292 10.266 1.04687 10.1982 1.04687H9.69824C9.63053 1.04687 9.57064 1.07292 9.51855 1.125C9.47168 1.17187 9.44824 1.22917 9.44824 1.29687V3.54687C9.44824 3.61458 9.47168 3.67448 9.51855 3.72656C9.57064 3.77344 9.63053 3.79687 9.69824 3.79687H10.1982C10.266 3.79687 10.3232 3.77344 10.3701 3.72656C10.4222 3.67448 10.4482 3.61458 10.4482 3.54687ZM13.4482 3.04687V13.0469C13.4482 13.3177 13.3493 13.5521 13.1514 13.75C12.9535 13.9479 12.7191 14.0469 12.4482 14.0469H1.44824C1.17741 14.0469 0.943034 13.9479 0.745117 13.75C0.547201 13.5521 0.448242 13.3177 0.448242 13.0469V3.04687C0.448242 2.77604 0.547201 2.54167 0.745117 2.34375C0.943034 2.14583 1.17741 2.04687 1.44824 2.04687H2.44824V1.29687C2.44824 0.953124 2.57064 0.658853 2.81543 0.414062C3.06022 0.16927 3.35449 0.046874 3.69824 0.046874H4.19824C4.54199 0.046874 4.83626 0.16927 5.08105 0.414062C5.32585 0.658853 5.44824 0.953124 5.44824 1.29687V2.04687H8.44824V1.29687C8.44824 0.953124 8.57064 0.658853 8.81543 0.414062C9.06022 0.16927 9.35449 0.046874 9.69824 0.046874H10.1982C10.542 0.046874 10.8363 0.16927 11.0811 0.414062C11.3258 0.658853 11.4482 0.953124 11.4482 1.29687V2.04687H12.4482C12.7191 2.04687 12.9535 2.14583 13.1514 2.34375C13.3493 2.54167 13.4482 2.77604 13.4482 3.04687Z"
                          fill="currentcolor"
                        />
                      </svg>
                      12 Apr 2023
                    </span>
                    <span>
                      <svg
                        width={17}
                        height={14}
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.95839 2.17857C8.16672 1.86905 7.31553 1.71428 6.40482 1.71428C5.4941 1.71428 4.64291 1.86905 3.85125 2.17857C3.05958 2.48809 2.42863 2.90774 1.95839 3.4375C1.4941 3.96726 1.26196 4.53571 1.26196 5.14286C1.26196 5.63095 1.4197 6.10119 1.73517 6.55357C2.05065 7.00595 2.4941 7.39881 3.06553 7.73214L3.9316 8.23214L3.6191 8.98214C3.82148 8.8631 4.00601 8.74702 4.17267 8.63393L4.56553 8.35714L5.03875 8.44643C5.50303 8.52976 5.95839 8.57143 6.40482 8.57143C7.31553 8.57143 8.16672 8.41667 8.95839 8.10714C9.75005 7.79762 10.378 7.37798 10.8423 6.84821C11.3126 6.31845 11.5477 5.75 11.5477 5.14286C11.5477 4.53571 11.3126 3.96726 10.8423 3.4375C10.378 2.90774 9.75005 2.48809 8.95839 2.17857ZM3.2441 1.1875C4.21434 0.776785 5.26791 0.571428 6.40482 0.571428C7.54172 0.571428 8.59232 0.776785 9.5566 1.1875C10.5268 1.59226 11.2917 2.14583 11.8512 2.84821C12.4108 3.55059 12.6905 4.31548 12.6905 5.14286C12.6905 5.97024 12.4108 6.73512 11.8512 7.4375C11.2917 8.13988 10.5268 8.69643 9.5566 9.10714C8.59232 9.5119 7.54172 9.71429 6.40482 9.71429C5.89291 9.71429 5.3691 9.66667 4.83339 9.57143C4.09529 10.0952 3.26791 10.4762 2.35125 10.7143C2.13696 10.7679 1.88101 10.8155 1.58339 10.8571H1.5566C1.49113 10.8571 1.42863 10.8333 1.3691 10.7857C1.31553 10.7381 1.28279 10.6756 1.27089 10.5982C1.26494 10.5804 1.26196 10.5625 1.26196 10.5446C1.26196 10.5208 1.26196 10.5 1.26196 10.4821C1.26791 10.4643 1.27386 10.4464 1.27982 10.4286C1.29172 10.4107 1.30065 10.3958 1.3066 10.3839C1.31255 10.372 1.32148 10.3571 1.33339 10.3393C1.35125 10.3155 1.36315 10.3006 1.3691 10.2946C1.38101 10.2827 1.39589 10.2679 1.41375 10.25C1.4316 10.2262 1.44351 10.2113 1.44946 10.2054C1.47922 10.1696 1.54767 10.0952 1.65482 9.98214C1.76196 9.86905 1.83934 9.78274 1.88696 9.72321C1.93458 9.65774 2.00005 9.57143 2.08339 9.46429C2.17267 9.35119 2.24708 9.23512 2.3066 9.11607C2.37208 8.99702 2.43458 8.86607 2.4941 8.72321C1.75601 8.29464 1.17565 7.76786 0.753031 7.14286C0.330412 6.51786 0.119102 5.85119 0.119102 5.14286C0.119102 4.31548 0.398864 3.55059 0.958388 2.84821C1.51791 2.14583 2.27982 1.59226 3.2441 1.1875ZM13.7441 11.0089C13.8036 11.1518 13.8632 11.2827 13.9227 11.4018C13.9882 11.5208 14.0626 11.6369 14.1459 11.75C14.2352 11.8571 14.3036 11.9405 14.3512 12C14.3989 12.0655 14.4762 12.1548 14.5834 12.2679C14.6905 12.381 14.759 12.4554 14.7887 12.4911C14.7947 12.497 14.8066 12.5089 14.8245 12.5268C14.8423 12.5506 14.8542 12.5655 14.8602 12.5714C14.8721 12.5833 14.884 12.5982 14.8959 12.6161C14.9137 12.6399 14.9257 12.6577 14.9316 12.6696C14.9376 12.6815 14.9435 12.6964 14.9495 12.7143C14.9614 12.7321 14.9673 12.75 14.9673 12.7679C14.9733 12.7857 14.9762 12.8036 14.9762 12.8214C14.9762 12.8452 14.9733 12.8661 14.9673 12.8839C14.9495 12.9673 14.9108 13.0327 14.8512 13.0804C14.7917 13.128 14.7262 13.1488 14.6548 13.1429C14.3572 13.1012 14.1012 13.0536 13.887 13C12.9703 12.7619 12.1429 12.381 11.4048 11.8571C10.8691 11.9524 10.3453 12 9.83339 12C8.22029 12 6.81553 11.6071 5.6191 10.8214C5.96434 10.8452 6.22625 10.8571 6.40482 10.8571C7.36315 10.8571 8.28279 10.7232 9.16375 10.4554C10.0447 10.1875 10.8304 9.80357 11.5209 9.30357C12.2649 8.75595 12.8364 8.125 13.2352 7.41071C13.634 6.69643 13.8334 5.94048 13.8334 5.14286C13.8334 4.68452 13.7649 4.23214 13.628 3.78571C14.3959 4.20833 15.003 4.73809 15.4495 5.375C15.8959 6.0119 16.1191 6.69643 16.1191 7.42857C16.1191 8.14286 15.9078 8.8125 15.4852 9.4375C15.0626 10.0565 14.4822 10.5804 13.7441 11.0089Z"
                          fill="currentcolor"
                        />
                      </svg>
                      Comments (01)
                    </span>
                  </div>
                  <h5 className="tp-blog__title-sm">
                    <a href="">
                    A Memorable Journey to Kuakata with Gournadi Officer's Club
                    </a>
                  </h5>
                  <div className="tp-blog__link">
                    <a href="">
                      Read More <i className="fa-regular fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog area end */}
    </main>
    <footer>
      {/* footer-top area start */}
      <div
        id="footer-one-page"
        className="tp-footer-top-area tp-footer-top-bdr-bottom pt-35 theme-bg-2"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="tp-footer-top-item tp-footer-top-space-1 d-flex align-items-center">
                <div className="tp-footer-top-info-icon">
                  <i className="flaticon-globe" />
                </div>
                <div className="tp-footer-top-info">
                  <h4 className="tp-footer-top-info-title">Address</h4>
                  <span>
                    <a
                      href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z?hl=en&entry=ttu"
                      target="_blank"
                    >
                      Upazila Parishad, Gournadi, Barishal
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="tp-footer-top-item tp-footer-top-space-2 d-flex align-items-center">
                <div className="tp-footer-top-info-icon">
                  <i className="flaticon-email" />
                </div>
                <div className="tp-footer-top-info">
                  <h4 className="tp-footer-top-info-title">Contact</h4>
                  <span>
                    <a href="https://template.wphix.com/cdn-cgi/l/email-protection#ccbfb8adb8a9b4a4a9a0bca5a2aaa38caba1ada5a0e2afa3a1">
                      <span
                        className="__cf_email__"
                        data-cfemail="a3d0d7c2d7c6dbcbc6cfd3cacdc5cce3c4cec2cacf8dc0ccce"
                      >
                        officersclubgournadi@gmail.com
                      </span>
                    </a>
                  </span>
                  <br/>
                  <span>
                    <a href="tel:+88(3265)56720">+88 (01712) xxxxxx</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="tp-footer-top-item tp-footer-top-space-3 d-flex align-items-center">
                <div className="tp-footer-top-info-icon">
                  <i className="flaticon-fast-time" />
                </div>
                <div className="tp-footer-top-info">
                  <h4 className="tp-footer-top-info-title">Clock</h4>
                  <span>Mon - Sat 8 am - 5 pm Friday: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer-top area end */}
      {/* footer area start */}
      <div className="tp-footer-area theme-bg-2 pt-110 pb-60 p-relative z-index">
        <div className="tp-footer-shape">
          <img src="assets/img/footer/footer-shape.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-50 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-footer-widget footer-col-1">
                <div className="tp-footer-widget-logo">
                  <a href="/">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
                <div className="tp-footer-widget-content">
                  <p className="mb-40">
                    Desires to obtain pain of it because it is pain, but
                    occasionally circum We work with a passion of
                  </p>
                  <a className="tp-btn white-anim" href="">
                    KNOW MORE
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 mb-50 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-footer-widget footer-col-2">
                <h4 className="tp-footer-widget-title">Usefull Links</h4>
                <div className="tp-footer-widget-menu">
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Upcoming Events</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-50 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-footer-widget footer-col-3">
                <h4 className="tp-footer-widget-title">Instagram</h4>
                <div className="tp-footer-widget-instagram">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="assets/img/instagram/insta-1.jpg" alt="" />
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/instagram/insta-2.jpg" alt="" />
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/instagram/insta-3.jpg" alt="" />
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/instagram/insta-4.jpg" alt="" />
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/instagram/insta-1.jpg" alt="" />
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/img/instagram/insta-2.jpg" alt="" />
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-50 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-footer-widget footer-col-4">
                <h4 className="tp-footer-widget-title">News &amp; Updates</h4>
                <div className="tp-footer-widget-content">
                  <p className="mb-25">
                    The latest Mayorx news, articles, and resources sent straight
                    to your inbox every month
                  </p>
                </div>
                <form action="#">
                  <div className="tp-footer-mail-box p-relative">
                    <input type="text" placeholder="Your Email" />
                    <button className="tp-btn-subscribe-sm">SUBSCRIBE</button>
                  </div>
                  <div className="tp-footer-check-box">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I agree that my data is collected
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer area end */}
      {/* copy-right area start */}
      <div className="tp-copyright-area tp-copyright-space green-bg pt-25 pb-25">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="tp-copyright-left-text text-center text-md-start">
                <p>
                  © Copyright 2023 by <a href="#">ratanjs.com</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none col-sm-6 d-sm-block">
              <div className="tp-copyright-right-social text-center text-md-end">
                <a href="#">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy-right area end */}
    </footer>
  </>
  
  );
}
