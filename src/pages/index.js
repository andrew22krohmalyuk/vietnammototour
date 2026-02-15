import Head from "next/head";
import Script from 'next/script';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// `${process.env.__NEXT_ROUTER_BASEPATH}/next.svg`

const getUrl = (path) => `${process.env.__NEXT_ROUTER_BASEPATH || ""}/${path}`;

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Home One || Tevily || Tevily HTML Template For Tour</title>
        <link rel="apple-touch-icon" sizes="180x180" href={getUrl("assets/images/favicons/apple-touch-icon.png")}/>
        <link rel="icon" type="image/png" sizes="32x32" href={getUrl("assets/images/favicons/favicon-32x32.png")}/>
        <link rel="icon" type="image/png" sizes="16x16" href={getUrl("assets/images/favicons/favicon-16x16.png")}/>
        <link rel="manifest" href={getUrl("assets/images/favicons/site.webmanifest")}/>
        <meta name="description" content="Tevily HTML Template For Tour"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"/>

        <link rel="stylesheet" href={getUrl("assets/vendors/bootstrap/css/bootstrap.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/animate/animate.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/animate/custom-animate.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/fontawesome/css/all.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/jarallax/jarallax.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/nouislider/nouislider.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/nouislider/nouislider.pips.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/odometer/odometer.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/swiper/swiper.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/tevily-icons/style.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/tiny-slider/tiny-slider.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/reey-font/stylesheet.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/owl-carousel/owl.carousel.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/owl-carousel/owl.theme.default.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/twentytwenty/twentytwenty.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/bxslider/jquery.bxslider.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/bootstrap-select/css/bootstrap-select.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/vegas/vegas.min.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/jquery-ui/jquery-ui.css")}/>
        <link rel="stylesheet" href={getUrl("assets/vendors/timepicker/timePicker.css")}/>

        <link rel="stylesheet" href={getUrl("assets/css/tevily.css")} />
        <link rel="stylesheet" href={getUrl("assets/css/tevily-responsive.css")} />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
      {/*<div className="preloader">*/}
      {/*  <img className="preloader__image" width="60" src={getUrl("assets/images/loader.png")} alt=""/>*/}
      {/*</div>*/}
      <div className="page-wrapper">
        <header className="main-header clearfix">
          <div className="main-header__top">
            <div className="container">
              <div className="main-header__top-inner clearfix">
                <div className="main-header__top-left">
                  <ul className="list-unstyled main-header__top-address">
                    <li>
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="text">
                        <a href="tel:+84-935-797-550">+84 935 797 550</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-at"></span>
                      </div>
                      <div className="text">
                        <a href="mailto:easyridermotorbiketour@gmail.com">easyridermotorbiketour@gmail.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="main-header__top-right">
                  <div className="main-header__top-right-inner">
                    <div className="main-header__top-right-social">
                      <a href="#"><i className="fab fa-facebook"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-dribbble"></i></a>
                    </div>
                    <div className="main-header__top-right-btn-box">
                      <a href="#" className="thm-btn main-header__top-right-btn">Become a local guide</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu clearfix">
            <div className="main-menu-wrapper clearfix">
              <div className="container clearfix">
                <div className="main-menu-wrapper-inner clearfix">
                  <div className="main-menu-wrapper__left clearfix">
                    <div className="main-menu-wrapper__logo">
                      <Link href="/">
                        <img
                          style={{ height: '45px' }}
                          src={getUrl("assets/images/logo/logo.jpeg")} alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="main-menu-wrapper__main-menu">
                      <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                      <ul className="main-menu__list">
                        <li className="dropdown current">
                          <a href="index.html">Home</a>
                          <ul>
                            <li>
                              <a href="index.html">Home One</a>
                            </li>
                            <li><a href="index2.html">Home Two</a></li>
                            <li className="dropdown">
                              <a href="#">Header Styles</a>
                              <ul>
                                <li><a href="index.html">Header One</a></li>
                                <li><a href="index.html">Header Two</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Destinations</a>
                          <ul>
                            <li><a href="destinations.html">Destinations</a></li>
                            <li><a href="destinations-details.html">Destinations Detail</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Tours</a>
                          <ul>
                            <li><a href="tours.html">Tours</a></li>
                            <li><a href="tours-list.html">Tours List</a></li>
                            <li><a href="tour-details.html">Tours Details</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Pages</a>
                          <ul>
                            <li><a href="about.html">About</a></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">News</a>
                          <ul>
                            <li><a href="news.html">News</a></li>
                            <li><a href="news-details.html">News Details</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="main-menu-wrapper__right">
                    <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a>
                    <a href="#" className="main-menu__user icon-avatar"></a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content" />
        </div>

        <section className="main-slider">
          <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
        "effect": "fade",
        "pagination": {
            "el": "#main-slider-pagination",
            "type": "bullets",
            "clickable": true
          },
        "navigation": {
            "nextEl": ".main-slider-button-next",
            "prevEl": ".main-slider-button-prev",
            "clickable": true
        },
        "autoplay": {
            "delay": 5000
        }}'>

            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="image-layer"
                     style={{ backgroundImage: `url('${getUrl('assets/images/banner/banner.jpg')}');`, zIndex: '1' }}></div>
                <div className="image-layer-overlay"></div>
                <div className="container">
                  <div className="swiper-slide-inner">
                    <div className="row">
                      <div className="col-xl-12">
                        <h2> Travel & Adventures</h2>
                        <p>Where Would You Like To Go?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image-layer"
                     style={{ backgroundImage: `url('${getUrl('assets/images/banner/banner.jpg')}');`, zIndex: '1' }}></div>
                <div className="image-layer-overlay"></div>
                <div className="container">
                  <div className="swiper-slide-inner">
                    <div className="row">
                      <div className="col-xl-12">
                        <h2> Travel & Adventures</h2>
                        <p>Where Would You Like To Go?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="image-layer"
                     style={{ backgroundImage: `url('${getUrl('assets/images/banner/banner.jpg')}');`, zIndex: '1' }}></div>
                <div className="image-layer-overlay"></div>
                <div className="container">
                  <div className="swiper-slide-inner">
                    <div className="row">
                      <div className="col-xl-12">
                        <h2> Travel & Adventures</h2>
                        <p>Where Would You Like To Go?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-slider-nav">
              <div className="main-slider-button-prev"><span className="icon-right-arrow"></span></div>
              <div className="main-slider-button-next"><span className="icon-right-arrow"></span></div>
            </div>
          </div>
        </section>

        <section className="tour-search">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tour-search-box">
                  <form className="tour-search-one" action="tour-sidebar.html">
                    <div className="tour-search-one__inner">
                      <div className="tour-search-one__inputs">
                        <div className="tour-search-one__input-box">
                          <label htmlFor="place">Where to</label>
                          <input type="text" placeholder="Enter keywords" name="place" id="place"/>
                        </div>
                        <div className="tour-search-one__input-box">
                          <label>When</label>
                          <input type="text" placeholder="September" name="when" id="datepicker"/>
                        </div>
                        <div className="tour-search-one__input-box tour-search-one__input-box-last">
                          <label htmlFor="type">Type</label>
                          <select className="selectpicker" id="type">
                            <option value="Adventure">Adventure</option>
                            <option value="Wildlife">Wildlife</option>
                            <option value="Sightseeing">Sightseeing</option>
                          </select>
                        </div>
                      </div>
                      <div className="tour-search-one__btn-wrap">
                        <button type="submit" className="thm-btn tour-search-one__btn">Find now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="destinations-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Destination lists</span>
              <h2 className="section-title__title">Go Exotic Places</h2>
            </div>
            <div className="row masonary-layout">
              <div className="col-xl-3 col-lg-3">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img src={getUrl("assets/images/destination/destination-1-1.png")} alt=""/>
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title"><a href="destinations-details.html">Spain</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">6 tours</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img src={getUrl("assets/images/destination/destination-1-2.png")} alt=""/>
                    <div className="destinations-one__content">
                      <p className="destinations-one__sub-title">Wildlife</p>
                      <h2 className="destinations-one__title"><a href="destinations-details.html">Thailand</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">6 tours</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img src={getUrl("assets/images/destination/destination-1-3.png")} alt=""/>
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title"><a href="destinations-details.html">Africa</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">6 tours</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img src={getUrl("assets/images/destination/destination-1-4.png")} alt=""/>
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title"><a
                        href="destinations-details.html">Australia</a></h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">6 tours</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img src={getUrl("assets/images/destination/destination-1-5.png")} alt=""/>
                    <div className="destinations-one__content">
                      <p className="destinations-one__sub-title">Adventure</p>
                      <h2 className="destinations-one__title"><a
                        href="destinations-details.html">Switzerland</a></h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">6 tours</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="about-one">
          <div className="about-one-shape-1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
            <img src={getUrl("assets/images/shapes/about-one-shape-1.png")} alt=""/>
          </div>
          <div className="about-one-shape-2 float-bob-y"><img src={getUrl("assets/images/shapes/about-one-shape-2.png")} alt=""/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-duration="1500ms">
                <div className="about-one__left">
                  <div className="about-one__img-box">
                    <div className="about-one__img">
                      <img src={getUrl("assets/images/resources/about-one-img-1.png")} alt=""/>
                    </div>
                    <div className="about-one__call">
                      <div className="about-one__call-icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="about-one__call-number">
                        <p>Book Tour Now</p>
                        <h4><a href="tel:+84-935-797-550">+84 935 797 550</a></h4>
                      </div>
                    </div>
                    <div className="about-one__discount">
                      <h2>30%</h2>
                      <h3>Discount</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Get to know us</span>
                    <h2 className="section-title__title">Plan Your Trip with Trevily</h2>
                  </div>
                  <p className="about-one__right-text">There are many variations of passages of available but the
                    majority have suffered alteration in some form, by injected hum randomised words which
                    don&#39;t look even slightly.</p>
                  <ul className="list-unstyled about-one__points">
                    <li>
                      <div className="icon">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="text">
                        <p>Invest in your simply neighborhood</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="text">
                        <p>Support people in free text extreme need</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="text">
                        <p>Largest global industrial business community</p>
                      </div>
                    </li>
                  </ul>
                  <a href="#" className="about-one__btn thm-btn">Book with us now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-tours">
          <div className="popular-tours__container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Featured tours</span>
              <h2 className="section-title__title">Most Popular Tours</h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="popular-tours__carousel owl-theme owl-carousel">
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-1.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">National Park 2 Days
                        Tour</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-2.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">The Dark Forest
                        Adventure</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-3.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">Discover Depth of
                        Beach</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-4.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">Moscow Red City
                        Land</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-1.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">Magic of Italy
                        Tours</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-2.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">National Park 2 Days
                        Tour</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-3.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">Discover Depth of
                        Beach</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-4.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">National Park 2 Days
                        Tour</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-1.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">National Park 2 Days
                        Tour</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-2.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">National Park 2 Days
                        Tour</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-3.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">National Park 2 Days
                        Tour</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="popular-tours__single">
                    <div className="popular-tours__img">
                      <img src={getUrl("assets/images/resources/popular-tours__img-4.jpg")} alt=""/>
                      <div className="popular-tours__icon">
                        <a href="tour-details.html">
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="popular-tours__content">
                      <div className="popular-tours__stars">
                        <i className="fa fa-star"></i> 8.0 Superb
                      </div>
                      <h3 className="popular-tours__title"><a href="tour-details.html">National Park 2 Days
                        Tour</a></h3>
                      <p className="popular-tours__rate"><span>$1870</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">3 Days</a></li>
                        <li><a href="tour-details.html">12+</a></li>
                        <li><a href="tour-details.html">Los Angeles</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="video-one">
          <div className="video-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
               style={{ backgroundImage: "url(assets/images/backgrounds/video-one-bg.jpg);" }}></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="video-one__left">
                  <div className="video-one__video-link">
                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                      <div className="video-one__video-icon">
                        <span className="icon-play-button"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                  <p className="video-one__tagline">Are you ready to travel?</p>
                  <h2 className="video-one__title">Tevily is a World Leading Online Tour Booking Platform</h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="video-one__right">
                  <ul className="list-unstyled video-one__four-icon-boxes">
                    <li>
                      <div className="video-one__icon-box">
                        <span className="icon-deer"></span>
                      </div>
                      <h4 className="video-one__icon-box-title"><a href="#">Wildlife <br/> Tours</a></h4>
                    </li>
                    <li>
                      <div className="video-one__icon-box">
                        <span className="icon-paragliding"></span>
                      </div>
                      <h4 className="video-one__icon-box-title"><a href="#">Paragliding <br/> Tours</a></h4>
                    </li>
                    <li>
                      <div className="video-one__icon-box">
                        <span className="icon-flag"></span>
                      </div>
                      <h4 className="video-one__icon-box-title"><a href="#">Adventure <br/> Tours</a></h4>
                    </li>
                    <li>
                      <div className="video-one__icon-box">
                        <span className="icon-hang-gliding"></span>
                      </div>
                      <h4 className="video-one__icon-box-title"><a href="#">Hang Gliding <br/> Tours</a></h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-one">
          <div className="brand-one-shape"
               style={{ backgroundImage: "url(assets/images/shapes/brand-one-shape.png);" }}></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                <div className="brand-one__title">
                  <h2>Our partners</h2>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="brand-one__main-content">
                  <div className="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                            "0": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                            },
                            "375": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                            },
                            "575": {
                                "spaceBetween": 30,
                                "slidesPerView": 3
                            },
                            "767": {
                                "spaceBetween": 50,
                                "slidesPerView": 4
                            },
                            "991": {
                                "spaceBetween": 50,
                                "slidesPerView": 5
                            },
                            "1199": {
                                "spaceBetween": 50,
                                "slidesPerView": 5
                            }
                        }}'>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-1.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-2.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-3.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-4.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-5.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-1.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-2.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-3.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-4.png")} alt=""/>
                      </div>
                      <div className="swiper-slide">
                        <img src={getUrl("assets/images/brand/brand-one-5.png")} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-one">
          <div className="testimonial-one-shape-2 float-bob-y">
            <img src={getUrl("assets/images/shapes/testimonial-one-shape-2.png")} alt=""/>
          </div>
          <div className="testimonial-one-shape-3 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
            <img src={getUrl("assets/images/shapes/testimonial-one-shape-3.png")} alt=""/>
          </div>
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Testimonials & reviews</span>
              <h2 className="section-title__title">What They’re Saying</h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="testimonial-one__carousel owl-theme owl-carousel">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-1.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Shirley Smith</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-2.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Kevin Martin</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-3.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Jessica Brown</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-1.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Shirley Smith</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-2.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Kevin Martin</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-3.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Jessica Brown</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-1.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Shirley Smith</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-2.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Kevin Martin</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__img">
                      <img src={getUrl("assets/images/testimonial/testimonial-one-img-3.png")} alt=""/>
                    </div>
                    <div className="testimonail-one__content">
                      <div className="testimonial-one__top-revivew-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text">This is due to their best service, pricing and
                        customer support. It’s throughly refresing to such a personal touch. Duis aute
                        irure lupsum reprehenderit.</p>
                      <div className="testimonial-one__client-info">
                        <h3 className="testimonial-one__client-name">Jessica Brown</h3>
                        <p className="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-one">
          <div className="gallery-one-bg" style={{ backgroundImage: "url(assets/images/shapes/gallery-map.png);" }}></div>
          <div className="gallery-one__container-box clearfix">
            <ul className="list-unstyled gallery-one__content clearfix">
              <li className="wow fadeInUp" data-wow-delay="100ms">
                <div className="gallery-one__img-box">
                  <img src={getUrl("assets/images/gallery/gallery-one-img-1.jpg")} alt=""/>
                  <div className="gallery-one__iocn">
                    <a className="img-popup" href={getUrl("assets/images/gallery/gallery-one-img-1.jpg")}><i
                      className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="200ms">
                <div className="gallery-one__img-box">
                  <img src={getUrl("assets/images/gallery/gallery-one-img-2.jpg")} alt=""/>
                  <div className="gallery-one__iocn">
                    <a className="img-popup" href={getUrl("assets/images/gallery/gallery-one-img-2.jpg")}><i
                      className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="300ms">
                <div className="gallery-one__img-box">
                  <img src={getUrl("assets/images/gallery/gallery-one-img-3.jpg")} alt=""/>
                  <div className="gallery-one__iocn">
                    <a className="img-popup" href={getUrl("assets/images/gallery/gallery-one-img-3.jpg")}><i
                      className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="400ms">
                <div className="gallery-one__img-box">
                  <img src={getUrl("assets/images/gallery/gallery-one-img-4.jpg")} alt=""/>
                  <div className="gallery-one__iocn">
                    <a className="img-popup" href={getUrl("assets/images/gallery/gallery-one-img-4.jpg")}><i
                      className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="500ms">
                <div className="gallery-one__img-box">
                  <img src={getUrl("assets/images/gallery/gallery-one-img-5.jpg")} alt=""/>
                  <div className="gallery-one__iocn">
                    <a className="img-popup" href={getUrl("assets/images/gallery/gallery-one-img-5.jpg")}><i
                      className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="why-choose">
          <div className="why-choose__container">
            <div className="why-choose__left">
              <div className="why-choose__left-bg"
                   style={{ backgroundImage: "url(assets/images/backgrounds/why-choose-left-bg.jpg)" }}></div>
              <div className="why-choose__toggle">
                <p>Trips <br/> & tours</p>
              </div>
            </div>
            <div className="why-choose__right">
              <div className="why-choose__right-map"
                   style={{ backgroundImage: "url(assets/images/shapes/why-choose-right-map.png)" }}></div>
              <div className="why-choose__right-content">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Our benefit lists</span>
                  <h2 className="section-title__title">Why Choose Tevily</h2>
                </div>
                <p className="why-choose__right-text">There are many variations of passages of Lorem Ipsum is simply
                  free text available in the market for you, but the majority have suffered alteration in some
                  form.</p>
                <ul className="list-unstyled why-choose__list">
                  <li>
                    <div className="icon">
                      <span className="icon-travel"></span>
                    </div>
                    <div className="text">
                      <h4>Professional and Certified</h4>
                      <p>Lorem ipsum is simply free text dolor sit but the majority have suffered amet,
                        consectetur notted.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-travel-map"></span>
                    </div>
                    <div className="text">
                      <h4>Get Instant Tour Bookings</h4>
                      <p>Lorem ipsum is simply free text dolor sit but the majority have suffered amet,
                        consectetur notted.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="news-one">
          <div className="container">
            <div className="news-one__top">
              <div className="row">
                <div className="col-xl-9 col-lg-9">
                  <div className="news-one__top-left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">From the blog post</span>
                      <h2 className="section-title__title">News & Articles</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="news-one__top-right">
                    <a href="news-details.html" className="news-one__btn thm-btn">View All posts</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-one__bottom">
              <div className="row">
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                  <div className="news-one__single">
                    <div className="news-one__img">
                      <img src={getUrl("assets/images/blog/news-one-img-1.jpg")} alt=""/>
                      <a href="news-details.html">
                        <span className="news-one__plus"></span>
                      </a>
                      <div className="news-one__date">
                        <p>28 <br/> <span>Aug</span></p>
                      </div>
                    </div>
                    <div className="news-one__content">
                      <ul className="list-unstyled news-one__meta">
                        <li><a href="news-details.html"><i className="far fa-user-circle"></i>Admin</a></li>
                        <li><a href="news-details.html"><i className="far fa-comments"></i>2 Comments</a>
                        </li>
                      </ul>
                      <h3 className="news-one__title">
                        <a href="news-details.html">Things to See and Do When Visiting Japan</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                  <div className="news-one__single">
                    <div className="news-one__img">
                      <img src={getUrl("assets/images/blog/news-one-img-2.jpg")} alt=""/>
                      <a href="news-details.html">
                        <span className="news-one__plus"></span>
                      </a>
                      <div className="news-one__date">
                        <p>28 <br/> <span>Aug</span></p>
                      </div>
                    </div>
                    <div className="news-one__content">
                      <ul className="list-unstyled news-one__meta">
                        <li><a href="news-details.html"><i className="far fa-user-circle"></i>Admin</a></li>
                        <li><a href="news-details.html"><i className="far fa-comments"></i>2 Comments</a>
                        </li>
                      </ul>
                      <h3 className="news-one__title">
                        <a href="news-details.html">Journeys are Best Measured in New Friends</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                  <div className="news-one__single">
                    <div className="news-one__img">
                      <img src={getUrl("assets/images/blog/news-one-img-3.jpg")} alt=""/>
                      <a href="news-details.html">
                        <span className="news-one__plus"></span>
                      </a>
                      <div className="news-one__date">
                        <p>28 <br/> <span>Aug</span></p>
                      </div>
                    </div>
                    <div className="news-one__content">
                      <ul className="list-unstyled news-one__meta">
                        <li><a href="news-details.html"><i className="far fa-user-circle"></i>Admin</a></li>
                        <li><a href="news-details.html"><i className="far fa-comments"></i>2 Comments</a>
                        </li>
                      </ul>
                      <h3 className="news-one__title">
                        <a href="news-details.html">Travel the Most Beautiful Places in the World</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="site-footer__top">
            <div className="container">
              <div className="site-footer__top-inner">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <Link href='/'>
                          <img
                            style={{ height: '45px', opacity: '.9' }}
                            src={getUrl("assets/images/logo/logo-footer-white.png")} alt="Logo"
                          />
                        </Link>
                      </div>
                      <p className="footer-widget__about-text">Welcome to our Trip and Tour Agency. Lorem
                        simply text amet cing elit.</p>
                      <ul className="footer-widget__about-contact list-unstyled">
                        <li>
                          <div className="icon">
                            <i className="fas fa-phone-square-alt"></i>
                          </div>
                          <div className="text">
                            <a href="tel:+84-935-797-550">+84 935 797 550</a>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fas fa-envelope"></i>
                          </div>
                          <div className="text">
                            <a href="mailto:easyridermotorbiketour@gmail.com">easyridermotorbiketour@gmail.com</a>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className="text">
                            <p>Alley 05-07 Nguyen Trung Truc st.</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className="text">
                            <p>Nha Trang City, Vietnam</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                    <div className="footer-widget__column footer-widget__company clearfix">
                      <h3 className="footer-widget__title">Company</h3>
                      <ul className="footer-widget__company-list list-unstyled">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="#">Community Blog</a></li>
                        <li><a href="#">Rewards</a></li>
                        <li><a href="#">Work with Us</a></li>
                        <li><a href="#">Meet the Team</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="footer-widget__column footer-widget__explore">
                      <h3 className="footer-widget__title">Explore</h3>
                      <ul className="list-unstyled footer-widget__explore-list">
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Affilitate Program</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                    <div className="footer-widget__column footer-widget__newsletter">
                      <h3 className="footer-widget__title">Newsletter</h3>
                      <form className="footer-widget__newsletter-form mc-form"
                            data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e">
                        <div className="footer-widget__newsletter-input-box">
                          <input type="email" placeholder="Email address" name="EMAIL"/>
                          <button type="submit"
                                  className="footer-widget__newsletter-btn">Subscribe
                          </button>
                        </div>
                      </form>
                      <div className="mc-form__response text-center"></div>
                      <div className="footer-widget__newsletter-bottom">
                        <div className="footer-widget__newsletter-bottom-icon">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="footer-widget__newsletter-bottom-text">
                          <p>I agree to all terms and policies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-footer__bottom-inner">
                    <div className="site-footer__bottom-left">
                      <div className="footer-widget__social">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                      </div>
                    </div>
                    <div className="site-footer__bottom-right">
                      <p>@ All Copyright {new Date().getFullYear()}</p>
                    </div>
                    <div className="site-footer__bottom-left-arrow">
                      <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><span
                        className="icon-right-arrow"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

          <div className="logo-box">
            <a href="index.html" aria-label="logo image"><img src={getUrl("assets/images/resources/logo-2.png")} width="155"
                                                              alt=""/></a>
          </div>
          <div className="mobile-nav__container"></div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:easyridermotorbiketour@gmail.com">easyridermotorbiketour@gmail.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+84-935-797-550">+84 935 797 550</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">search here</label>
            <input type="text" id="search" placeholder="Search Here..."/>
            <button type="submit" aria-label="search submit" className="thm-btn">
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      <Script src={getUrl("assets/vendors/jquery/jquery-3.6.0.min.js")} strategy="beforeInteractive" defer></Script>
      <Script src={getUrl("assets/vendors/bootstrap/js/bootstrap.bundle.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/jarallax/jarallax.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js")} strategy="beforeInteractive"></Script>
      <Script src={getUrl("assets/vendors/jquery-appear/jquery.appear.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/jquery-validate/jquery.validate.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/nouislider/nouislider.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/odometer/odometer.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/swiper/swiper.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/tiny-slider/tiny-slider.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/wnumb/wNumb.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/wow/wow.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/isotope/isotope.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/countdown/countdown.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/owl-carousel/owl.carousel.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/twentytwenty/twentytwenty.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/twentytwenty/jquery.event.move.js")} strategy="beforeInteractive"></Script>
      <Script src={getUrl("assets/vendors/bxslider/jquery.bxslider.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/bootstrap-select/js/bootstrap-select.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/vegas/vegas.min.js")} strategy="afterInteractive"></Script>
      <Script src={getUrl("assets/vendors/jquery-ui/jquery-ui.js")} strategy="beforeInteractive"></Script>
      <Script src={getUrl("assets/vendors/timepicker/timePicker.js")} strategy="beforeInteractive"></Script>

      <Script src={getUrl("assets/js/tevily.js")} strategy="afterInteractive"></Script>

      </div>
    </>
  );
}
