// import Link from 'next/link';
// import BlurImage from './blur_image';

const SideBar = () => {
  return (
    <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
      <div className="sidebar-inner">
        <div className="axil-single-widget widget widget_postlist mb--30">
          <h5 className="widget-title">Popular on Blogar</h5>
          <div className="post-medium-block">
            <div className="content-block post-medium mb--20">
              <div className="post-thumbnail">
                <a href="post-details.html">
                  <img
                    src="/images/small-images/blog-sm-01.jpg"
                    alt="Post Images"
                  />
                </a>
              </div>
              <div className="post-content">
                <h6 className="title">
                  <a href="post-details.html">
                    The underrated design book that transformed the way I work{' '}
                  </a>
                </h6>
                <div className="post-meta">
                  <ul className="post-meta-list">
                    <li>Feb 17, 2019</li>
                    <li>300k Views</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-block post-medium mb--20">
              <div className="post-thumbnail">
                <a href="post-details.html">
                  <img
                    src="/images/small-images/blog-sm-02.jpg"
                    alt="Post Images"
                  />
                </a>
              </div>
              <div className="post-content">
                <h6 className="title">
                  <a href="post-details.html">
                    Here’s what you should (and shouldn’t) do when
                  </a>
                </h6>
                <div className="post-meta">
                  <ul className="post-meta-list">
                    <li>Feb 17, 2019</li>
                    <li>300k Views</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-block post-medium mb--20">
              <div className="post-thumbnail">
                <a href="post-details.html">
                  <img
                    src="/images/small-images/blog-sm-03.jpg"
                    alt="Post Images"
                  />
                </a>
              </div>
              <div className="post-content">
                <h6 className="title">
                  <a href="post-details.html">
                    How a developer and designer duo at Deutsche Bank keep
                    remote
                  </a>
                </h6>
                <div className="post-meta">
                  <ul className="post-meta-list">
                    <li>Feb 17, 2019</li>
                    <li>300k Views</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="axil-single-widget widget widget_social mb--30">
          <h5 className="widget-title">Stay In Touch</h5>
          <ul className="social-icon md-size justify-content-center">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-slack"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="axil-single-widget widget widget_instagram mb--30">
          <h5 className="widget-title">Instagram</h5>
          <ul className="instagram-post-list-wrapper">
            <li className="instagram-post-list">
              <a href="#">
                <img
                  src="/images/small-images/instagram-01.jpg"
                  alt="Instagram Images"
                />
              </a>
            </li>
            <li className="instagram-post-list">
              <a href="#">
                <img
                  src="/images/small-images/instagram-02.jpg"
                  alt="Instagram Images"
                />
              </a>
            </li>
            <li className="instagram-post-list">
              <a href="#">
                <img
                  src="/images/small-images/instagram-03.jpg"
                  alt="Instagram Images"
                />
              </a>
            </li>
            <li className="instagram-post-list">
              <a href="#">
                <img
                  src="/images/small-images/instagram-04.jpg"
                  alt="Instagram Images"
                />
              </a>
            </li>
            <li className="instagram-post-list">
              <a href="#">
                <img
                  src="/images/small-images/instagram-05.jpg"
                  alt="Instagram Images"
                />
              </a>
            </li>
            <li className="instagram-post-list">
              <a href="#">
                <img
                  src="/images/small-images/instagram-06.jpg"
                  alt="Instagram Images"
                />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
