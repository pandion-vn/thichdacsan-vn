import Link from 'next/link';

const Header = () => {
  return (
    <header className="header axil-header  header-light header-sticky ">
      <div className="header-wrap">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
            <div className="logo">
              <Link href="/">
                <img
                  className="dark-logo"
                  src="/images/thicdacsan-logo.svg"
                  alt="thichdacsan logo"
                />
              </Link>
            </div>
          </div>

          <div className="col-xl-6 d-none d-xl-block">
            <div className="mainmenu-wrapper">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li>
                    <Link href="#">Trang chủ</Link>
                  </li>
                  <li>
                    <Link href="#">Travel</Link>
                  </li>
                  <li>
                    <Link href="#">Food</Link>
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
                    placeholder="Tìm kiếm ..."
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
                      placeholder="Tìm kiếm ..."
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
                {/* <li className="icon">
                  <a href="#">
                    <i className="fas fa-bell"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/others/author.png" alt="Author Images" />
                  </a>
                </li> */}
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
