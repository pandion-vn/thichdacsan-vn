import { WithChildren } from '@/types/shared';
import {
  FaRegUserCircle,
  FaFacebookF,
  FaInstagram,
  FaLink,
} from 'react-icons/fa';
import BlurImage from './blur_image';

interface BannerProps extends WithChildren {
  featureImage: string;
  title: string;
  tag: string;
  time: string;
}

const Banner = ({ featureImage, title, tag, time }: BannerProps) => {
  return (
    <div className="banner banner-single-post post-formate post-standard alignwide">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-block">
              <div className="post-thumbnail">
                <BlurImage
                  src={featureImage}
                  alt="banner"
                  width={1440}
                  height={720}
                />
              </div>

              <div className="post-content">
                <div className="post-cat">
                  <div className="post-cat-list">
                    <a className="hover-flip-item-wrapper" href="#">
                      <span className="hover-flip-item">
                        <span data-text={tag}>{tag}</span>
                      </span>
                    </a>
                  </div>
                </div>
                <h1 className="title">{title}</h1>

                <div className="post-meta-wrapper">
                  <div className="post-meta">
                    <div className="post-author-avatar border-rounded">
                      <FaRegUserCircle size={35} />
                    </div>
                    <div className="content">
                      <h6 className="post-author-name">
                        <p className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">
                            <span data-text="Thichdacsan">Thichdacsan</span>
                          </span>
                        </p>
                      </h6>
                      <ul className="post-meta-list">
                        <li>{time}</li>
                        {/* <li>300k Views</li> */}
                      </ul>
                    </div>
                  </div>
                  <ul className="social-share-transparent justify-content-end">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLink />
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
