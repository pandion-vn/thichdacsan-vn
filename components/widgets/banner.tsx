const Banner = () => {
  return (
    <div className="banner banner-single-post post-formate post-standard alignwide">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-block">
              <div className="post-thumbnail">
                <img
                  src="/images/post-single/post-single-01.jpg"
                  alt="Post Images"
                />
              </div>

              <div className="post-content">
                <div className="post-cat">
                  <div className="post-cat-list">
                    <a className="hover-flip-item-wrapper" href="#">
                      <span className="hover-flip-item">
                        <span data-text="FEATURED POST">FEATURED POST</span>
                      </span>
                    </a>
                  </div>
                </div>
                <h1 className="title">
                  Apple honors eight developers with annual Apple Design Awards
                </h1>

                <div className="post-meta-wrapper">
                  <div className="post-meta">
                    <div className="post-author-avatar border-rounded">
                      <img
                        src="/images/post-images/author/author-image-3.png"
                        alt="Author Images"
                      />
                    </div>
                    <div className="content">
                      <h6 className="post-author-name">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text="Ismat Jahan">Ismat Jahan</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
