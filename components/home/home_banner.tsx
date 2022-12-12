import { formatDate } from '@/common/utils';
import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import {
  FaRegUserCircle,
  FaFacebookF,
  FaInstagram,
  FaLink,
} from 'react-icons/fa';
import Link from 'next/link';
import BlurImage from '../widgets/blur_image';

interface HomeBannerProps extends WithChildren {
  post?: Post;
}

const HomeBanner = ({ post }: HomeBannerProps) => {
  if (!post) {
    return null;
  }

  const dateStr = formatDate(post.published_at);

  return (
    <div className="slider-area bg-color-grey">
      <div className="axil-slide slider-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-activation axil-slick-arrow">
                <div className="content-block">
                  <div className="post-thumbnail">
                    <Link href={`/blog/${post.slug}`}>
                      {post.feature_image ? (
                        <BlurImage
                          src={post.feature_image}
                          alt={post.feature_image_alt ?? `Image_${post.id}`}
                          width={2880}
                          height={1440}
                        />
                      ) : (
                        <BlurImage
                          src="/images/post-images/gallery-post-01.jpg"
                          alt="Post Images"
                          width={2880}
                          height={1440}
                        />
                      )}
                    </Link>
                  </div>

                  <div className="post-content">
                    <div className="post-cat">
                      <div className="post-cat-list">
                        <a className="hover-flip-item-wrapper" href="#">
                          <span className="hover-flip-item">
                            <span data-text={post.primary_tag?.name}>
                              {post.primary_tag?.name}
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h2 className="title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="post-meta-wrapper with-button">
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
                            <li>{dateStr}</li>
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
                      <div className="read-more-button cerchio">
                        <Link
                          className="axil-button button-rounded hover-flip-item-wrapper"
                          href={`/blog/${post.slug}`}
                        >
                          <span className="hover-flip-item">
                            <span data-text="Xem ngay">Xem ngay</span>
                          </span>
                        </Link>
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
