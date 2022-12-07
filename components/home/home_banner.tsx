import Link from 'next/link';

const HomeBanner = () => {
  return (
    <div className="slider-area bg-color-grey">
      <div className="axil-slide slider-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-activation axil-slick-arrow">
                <div className="content-block">
                  <div className="post-thumbnail">
                    <Link href="/blog/detail">
                      <img
                        src="/images/post-images/gallery-post-01.jpg"
                        alt="Post Images"
                      />
                    </Link>
                  </div>

                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="DESIGN">DESIGN</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h2 className="title">
                      <a href="post-details.html">
                        4 types of research methods all designers should know
                      </a>
                    </h2>
                    <div className="post-meta-wrapper with-button">
                      <div className="post-meta">
                        <div className="post-author-avatar border-rounded">
                          <img
                            src="/images/post-images/author/author-image-3.png"
                            alt="Author Images"
                          />
                        </div>
                        <div className="content">
                          <h6 className="post-author-name">
                            <a
                              className="hover-flip-item-wrapper"
                              href="author.html"
                            >
                              <span className="hover-flip-item">
                                <span data-text="Rahabi Khan">Rahabi Khan</span>
                              </span>
                            </a>
                          </h6>
                          <ul className="post-meta-list">
                            <li>Feb 17, 2019</li>
                            <li>300k Views</li>
                          </ul>
                        </div>
                      </div>
                      <ul className="social-share-transparent justify-content-end">
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
                            <i className="fas fa-link"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="read-more-button cerchio">
                        <a
                          className="axil-button button-rounded hover-flip-item-wrapper"
                          href="post-details.html"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Read Post">Read Post</span>
                          </span>
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
  );
};

export default HomeBanner;
