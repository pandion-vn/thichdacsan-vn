import { formatDate } from '@/common/utils';
import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import { FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa';
import Link from 'next/link';
// import BlurImage from '../widgets/blur_image';
import SideBar from '../widgets/sidebar';

interface HomePostListingProps extends WithChildren {
  posts: Post[];
}

const HomePostListing = ({ posts }: HomePostListingProps) => {
  return (
    <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-8">
            {/* <div className="axil-banner">
              <div className="thumbnail">
                <a href="#">
                  <img
                    className="w-100"
                    src="/images/add-banner/banner-01.png"
                    alt="Banner Images"
                  />
                </a>
              </div>
            </div> */}

            {posts.map((post, index) => (
              <div
                key={index}
                className="content-block post-list-view axil-control is-active mt--30"
              >
                <div className="post-thumbnail">
                  <Link href={`/blog/${post.slug}`}>
                    {post.feature_image ? (
                      <img
                        src={post.feature_image}
                        alt={post.feature_image_alt ?? `Image_${post.id}`}
                        // width={295}
                        // height={250}
                      />
                    ) : (
                      <img
                        src="/images/post-images/post-list-11.jpg"
                        alt="Post Images"
                        // width={295}
                        // height={250}
                      />
                    )}
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-cat">
                    <div className="post-cat-list">
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={post.primary_tag?.name}>
                            {post.primary_tag?.name}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <h4 className="title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <div className="post-meta-wrapper">
                    <div className="post-meta">
                      <div className="content">
                        <h6 className="post-author-name">
                          <p className="hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text="Thichdacsan">Thichdacsan</span>
                            </span>
                          </p>
                        </h6>
                        <ul className="post-meta-list">
                          <li>{formatDate(post.published_at)}</li>
                          {/* <li>3 min read</li> */}
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
            ))}
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePostListing;
