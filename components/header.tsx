const Header = () => {
  return (
    <header className="header axil-header  header-light header-sticky ">
      <div className="header-wrap">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
            <div className="logo">
              <a href="/">
                <img
                  className="dark-logo"
                  src="/images/thicdacsan-logo.svg"
                  alt="Blogar logo"
                />
                {/* <img
                  className="light-logo"
                  src="/images/logo/logo-white2.png"
                  alt="Blogar logo"
                /> */}
              </a>
            </div>
          </div>

          <div className="col-xl-6 d-none d-xl-block">
            <div className="mainmenu-wrapper">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li className="menu-item-has-children">
                    <a href="#">Home</a>
                    <ul className="axil-submenu">
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="index.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Home Default">Home Default</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="home-creative-blog.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Home Creative Blog">
                              Home Creative Blog
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="home-seo-blog.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Home SEO Blog">Home SEO Blog</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="home-tech-blog.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Home Tech Blog">
                              Home Tech Blog
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="home-lifestyle-blog.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Home Lifestyle Blog">
                              Home Lifestyle Blog
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">Posts</a>
                    <ul className="axil-submenu">
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-format-standard.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Format Standard">
                              Post Format Standard
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-format-video.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Format Video">
                              Post Format Video
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-format-gallery.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Format Gallery">
                              Post Format Gallery
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-format-text.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Format Text Only">
                              Post Format Text Only
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-layout-1.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Layout One">
                              Post Layout One
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-layout-2.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Layout Two">
                              Post Layout Two
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-layout-3.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Layout Three">
                              Post Layout Three
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-layout-4.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Layout Four">
                              Post Layout Four
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-layout-5.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Layout Five">
                              Post Layout Five
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children megamenu-wrapper">
                    <a href="#">Mega Menu</a>
                    <ul className="megamenu-sub-menu">
                      <li className="megamenu-item">
                        <div className="axil-vertical-nav">
                          <ul className="vertical-nav-menu">
                            <li className="vertical-nav-item active">
                              <a
                                className="hover-flip-item-wrapper"
                                href="#tab1"
                              >
                                <span className="hover-flip-item">
                                  <span data-text="Accessibility">
                                    Accessibility
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="vertical-nav-item">
                              <a
                                className="hover-flip-item-wrapper"
                                href="#tab2"
                              >
                                <span className="hover-flip-item">
                                  <span data-text="Android Dev">
                                    Android Dev
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="vertical-nav-item">
                              <a
                                className="hover-flip-item-wrapper"
                                href="#tab3"
                              >
                                <span className="hover-flip-item">
                                  <span data-text="Blockchain">Blockchain</span>
                                </span>
                              </a>
                            </li>
                            <li className="vertical-nav-item">
                              <a
                                className="hover-flip-item-wrapper"
                                href="#tab4"
                              >
                                <span className="hover-flip-item">
                                  <span data-text="Gadgets">Gadgets</span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="axil-vertical-nav-content">
                          <div
                            className="axil-vertical-inner tab-content"
                            id="tab1"
                            style={{ display: 'block' }}
                          >
                            <div className="axil-vertical-single">
                              <div className="row">
                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-01.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          India may require online shops to hand
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-02.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="CREATIVE">
                                                CREATIVE
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Lightweight, grippable, and ready to
                                          go.
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-03.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="TRAVEL">
                                                TRAVEL
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Bold new experience. Same Mac magic.
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-04.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="GADGETS">
                                                GADGETS
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Creative Game With The New DJI Mavic
                                          Air
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="axil-vertical-inner tab-content"
                            id="tab2"
                          >
                            <div className="axil-vertical-single">
                              <div className="row">
                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-04.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          India may require online shops to hand
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-03.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Lightweight, grippable, and ready to
                                          go.
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-02.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Bold new experience. Same Mac magic.
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-04.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Creative Game With The New DJI Mavic
                                          Air
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="axil-vertical-inner tab-content"
                            id="tab3"
                          >
                            <div className="axil-vertical-single">
                              <div className="row">
                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-04.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Creative Game With The New DJI Mavic
                                          Air
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-03.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Bold new experience. Same Mac magic.
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-02.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Lightweight, grippable, and ready to
                                          go.
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-04.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          India may require online shops to hand
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="axil-vertical-inner tab-content"
                            id="tab4"
                          >
                            <div className="axil-vertical-single">
                              <div className="row">
                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-01.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          India may require online shops to hand
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-04.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Lightweight, grippable, and ready to
                                          go.
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-03.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Bold new experience. Same Mac magic.
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3">
                                  <div className="content-block image-rounded">
                                    <div className="post-thumbnail mb--20">
                                      <a href="post-details.html">
                                        <img
                                          className="w-100"
                                          src="/images/others/mega-post-04.jpg"
                                          alt="Post Images"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-cat">
                                        <div className="post-cat-list">
                                          <a
                                            className="hover-flip-item-wrapper"
                                            href="#"
                                          >
                                            <span className="hover-flip-item">
                                              <span data-text="DESIGN">
                                                DESIGN
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <h5 className="title">
                                        <a href="post-details.html">
                                          Creative Game With The New DJI Mavic
                                          Air
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="axil-submenu">
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="post-list.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post List">Post List</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="archive.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Post Archive">Post Archive</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="author.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Author Page">Author Page</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="about.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="About Page">About Page</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="contact.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Contact Us">Contact Us</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="hover-flip-item-wrapper" href="404.html">
                          <span className="hover-flip-item">
                            <span data-text="404 Page">404 Page</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="maintenance.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Maintenance">Maintenance</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover-flip-item-wrapper"
                          href="privacy-policy.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Privacy Policy">
                              Privacy Policy
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="home-lifestyle-blog.html">Lifestyle</a>
                  </li>
                  <li>
                    <a href="home-tech-blog.html">Gadgets</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
            <div className="header-search text-end d-flex align-items-center">
              <form className="header-search-form d-sm-block d-none">
                <div className="axil-search form-group">
                  <button type="submit" className="search-button">
                    <i className="fal fa-search"></i>
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </form>
              <div className="mobile-search-wrapper d-sm-none d-block">
                <button className="search-button-toggle">
                  <i className="fal fa-search"></i>
                </button>
                <form className="header-search-form">
                  <div className="axil-search form-group">
                    <button type="submit" className="search-button">
                      <i className="fal fa-search"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              <ul className="metabar-block">
                <li className="icon">
                  <a href="#">
                    <i className="fas fa-bookmark"></i>
                  </a>
                </li>
                <li className="icon">
                  <a href="#">
                    <i className="fas fa-bell"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/others/author.png"
                      alt="Author Images"
                    />
                  </a>
                </li>
              </ul>

              <div className="hamburger-menu d-block d-xl-none">
                <div className="hamburger-inner">
                  <div className="icon">
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
