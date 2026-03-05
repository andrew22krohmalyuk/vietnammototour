import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { HeaderMobile } from '../components/header-mobile/index';
import { getUrl } from "../utils/index";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outBrave = localFont({
  src: [
    {
      path: "../../public/assets/fonts/outbrave.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/outbrave.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-outbrave",
  display: "swap",
});

export default function Home() {
  const bannerVideoRef = useRef(null);

  useEffect(() => {
    bannerVideoRef.current.playbackRate = 0.8;
  }, []);

  return (
    <>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable} ${outBrave.variable}`}
      >
      <div className="page-wrapper">

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
                <div className="video-layer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '1', overflow: 'hidden' }}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    ref={bannerVideoRef}
                  >
                    <source src={getUrl('assets/videos/banner-0.MOV')} type="video/mp4" />
                  </video>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
                </div>
                <div className="image-layer-overlay"></div>
                <div className="container">
                  <div className="swiper-slide-inner">
                    <div className="row">
                      <div className="col-xl-12">
                        <h2>Travel & Adventures</h2>
                        <p>Your Next Adventure Starts Here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="swiper-slide">*/}
              {/*  <div className="image-layer"*/}
              {/*       style={{ backgroundImage: `url('${getUrl('assets/images/banner/banner.jpg')}');`, zIndex: '1' }}></div>*/}
              {/*  <div className="image-layer-overlay"></div>*/}
              {/*  <div className="container">*/}
              {/*    <div className="swiper-slide-inner">*/}
              {/*      <div className="row">*/}
              {/*        <div className="col-xl-12">*/}
              {/*          <h2> Travel & Adventures</h2>*/}
              {/*          <p>Where Would You Like To Go?</p>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>

            <div className="main-slider-nav">
              <div className="main-slider-button-prev"><span className="icon-right-arrow"></span></div>
              <div className="main-slider-button-next"><span className="icon-right-arrow"></span></div>
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
                    <picture style={{ display: 'block', width: '285px', height: '285px', overflow: 'hidden' }}>
                      <source srcSet="https://www.agoda.com/wp-content/uploads/2024/02/Nha-Trang-Cable-Vietnam-1244x700.jpg" type="image/webp" />
                      <img
                        src="https://www.agoda.com/wp-content/uploads/2024/02/Nha-Trang-Cable-Vietnam-1244x700.jpg"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.4)' }} />
                    </picture>
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title"><a href="destinations-details.html">Nha Trang</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">12 tours</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <picture style={{ display: 'block', width: '580px', height: '285px', overflow: 'hidden' }}>
                      <source srcSet="https://localvietnam.de/wp-content/uploads/2023/09/tuyen-lam-see-1-1024x683.jpg" type="image/webp" />
                      <img
                        src="https://localvietnam.de/wp-content/uploads/2023/09/tuyen-lam-see-1-1024x683.jpg"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.4)' }} />
                    </picture>
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title"><a href="destinations-details.html">Dalat</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">5 tours</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <picture style={{ display: 'block', width: '285px', height: '285px', overflow: 'hidden' }}>
                      <source srcSet="https://images.ctfassets.net/wv75stsetqy3/6gzFoj0ORIEj3yIGsB1Q08/5797e277832264a11c9bae10fb2f7772/Retire_in_Mui_Ne.jpg?q=60&fit=fill&fm=webp" type="image/webp" />
                      <img
                        src="https://images.ctfassets.net/wv75stsetqy3/6gzFoj0ORIEj3yIGsB1Q08/5797e277832264a11c9bae10fb2f7772/Retire_in_Mui_Ne.jpg?q=60&fit=fill&fm=webp"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.4)' }} />
                    </picture>
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title"><a href="destinations-details.html">Mui Ne</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">12 tours</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <picture style={{ display: 'block', width: '580px', height: '285px', overflow: 'hidden' }}>
                      <source srcSet="https://cdnen.thesaigontimes.vn/wp-content/uploads/2024/07/Mot-thoang-Ho-Ba-Be_Thong-Lam.jpg" type="image/webp" />
                      <img
                        src="https://cdnen.thesaigontimes.vn/wp-content/uploads/2024/07/Mot-thoang-Ho-Ba-Be_Thong-Lam.jpg"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.4)' }} />
                    </picture>
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title"><a href="destinations-details.html">Sai Gon</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">12 tours</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <picture style={{ display: 'block', width: '580px', height: '285px', overflow: 'hidden' }}>
                      <source srcSet="https://cdn.kimkim.com/files/a/content_articles/featured_photos/5022fa3d9e45c25486f8bcc9adcfdb44a09ded12/big-94f2b85fd88b035fb52518c04d9cfd63.jpg" type="image/webp" />
                      <img
                        src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/5022fa3d9e45c25486f8bcc9adcfdb44a09ded12/big-94f2b85fd88b035fb52518c04d9cfd63.jpg"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.4)' }} />
                    </picture>
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title"><a href="destinations-details.html">Hoi An</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#">12 tours</a>
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
                    <div className="about-one__img destinations-one__img">
                      <picture style={{ display: 'block', width: '624px', height: '579px', overflow: 'hidden' }}>
                        <source srcSet="https://i0.wp.com/jolandblog.com/wp-content/uploads/2015/11/ninh-binh-vietname.jpg?fit=1000%2C667&ssl=1" type="image/webp" />
                        <img
                          src="https://i0.wp.com/jolandblog.com/wp-content/uploads/2015/11/ninh-binh-vietname.jpg?fit=1000%2C667&ssl=1"
                          alt=""
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.2)' }} />
                      </picture>
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
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Get to know us</span>
                    <h2 className="section-title__title">Plan Your Trip with Us</h2>
                  </div>
                  <p className="about-one__right-text">We are leading day tour and multi-day tour on organizer in Nha Trang, Vietnam</p>
                  <ul className="list-unstyled about-one__points">
                    <li>
                      <div className="icon">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="text">
                        <p>Motorbike and car tour</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="text">
                        <p>Friendly team and expert local guide</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="text">
                        <p>Experience in truly remarkable land</p>
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
                      <h3 className="popular-tours__title"><a href="tour-details.html">Nha Trang to Da Lat Tour</a></h3>
                      <p className="popular-tours__rate"><span>$70</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">1 Day</a></li>
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
                      <h3 className="popular-tours__title"><a href="tour-details.html">Explore Dalat</a></h3>
                      <p className="popular-tours__rate"><span>$130</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">1 Day</a></li>
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
                      <h3 className="popular-tours__title"><a href="tour-details.html">Baho Waterfall</a></h3>
                      <p className="popular-tours__rate"><span>$70</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">1 Day</a></li>
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
                      <h3 className="popular-tours__title"><a href="tour-details.html">Full Day Dalat</a></h3>
                      <p className="popular-tours__rate"><span>$80</span> / Per Person</p>
                      <ul className="popular-tours__meta list-unstyled">
                        <li><a href="tour-details.html">1 Day</a></li>
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
                   style={{ backgroundImage: "url(https://static.vinwonders.com/production/vietnam-nature-2.jpeg)" }}></div>
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

      </div>

        <HeaderMobile />

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
