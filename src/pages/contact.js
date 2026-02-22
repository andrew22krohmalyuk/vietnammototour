
export default function Contact() {
  return (
    <div>
      <div className="page-wrapper">
        <section className="page-header">
          <div className="page-header__top">
            <div className="page-header-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg.jpg)' }}>
            </div>
            <div className="page-header-bg-overly"></div>
            <div className="container">
              <div className="page-header__top-inner">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
          <div className="page-header__bottom">
            <div className="container">
              <div className="page-header__bottom-inner">
                <ul className="thm-breadcrumb list-unstyled">
                  <li><a href="index.html">Home</a></li>
                  <li><span>.</span></li>
                  <li className="active">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="contact-page__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Talk with our team</span>
                    <h2 className="section-title__title">Any Question? Feel Free to Contact</h2>
                  </div>
                  <div className="contact-page__social">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="contact-page__right">
                  <div className="comment-form">
                    <form action="inc/sendemail.php" className="comment-one__form contact-form-validated">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="comment-form__input-box">
                            <input type="text" placeholder="Your name" name="name"/>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="comment-form__input-box">
                            <input type="email" placeholder="Email address" name="email"/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box">
                            <textarea name="message" placeholder="Write Comment"></textarea>
                          </div>
                          <button type="submit" className="thm-btn comment-form__btn">Send a
                            message
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="result"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="information">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="information__single">
                  <div className="information__icon">
                    <span className="icon-place"></span>
                  </div>
                  <div className="information__text">
                    <p>88 Broklyn Street <br/> Road New York. USA</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="information__single">
                  <div className="information__icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="information__text">
                    <h4>
                      <a href="tel:+92-666-888-0000" className="information__number-1">+92 666 888 0000</a>
                      <br/>
                      <a href="tel:666-888-0000" className="information__number-2">666 888 0000</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="information__single">
                  <div className="information__icon">
                    <span className="icon-at"></span>
                  </div>
                  <div className="information__text">
                    <h4>
                      <a href="mailto:needhelp@tevily.com"
                         className="information__mail-1">needhelp@tevily.com</a> <br/>
                      <a href="mailto:info@tevily.com" className="information__mail-2">info@tevily.com</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-page-google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            className="contact-page-google-map__one" allowFullScreen></iframe>
        </section>
      </div>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

          <div className="logo-box">
            <a href="index.html" aria-label="logo image"><img src="assets/images/resources/logo-2.png" width="155"
                                                              alt=""/></a>
          </div>
          <div className="mobile-nav__container"></div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@packageName__.com">needhelp@tevily.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
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
    </div>
  );
}
