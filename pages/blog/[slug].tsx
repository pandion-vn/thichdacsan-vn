import { Meta } from '@/types/seo';
import { WithChildren } from '@/types/shared';
import { Post } from '@/types/post';
import { PostsOrPages } from '@tryghost/content-api';
import { formatDate } from '@/common/utils';
import { getAllPosts, getPostBySlug } from '@/common/ghost';
import MoreStories from '@/components/widgets/more_stories';
import Layout from '@/components/layout';
import Banner from '@/components/widgets/banner';
import SideBar from '@/components/widgets/sidebar';

interface BlogDetailProps extends WithChildren {
  post: Post;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  const meta = {
    title: post.title ?? 'Thichdacsan.vn',
    description: post.excerpt ?? 'Any thing with food and travel',
    keywords: post.primary_tag ?? 'Blog food, blog travel',
  } as Meta;

  return (
    <Layout meta={meta}>
      <Banner
        featureImage={post.feature_image}
        title={post.title}
        tag={post.primary_tag?.name ?? ''}
        time={formatDate(post.published_at)}
        key={0}
      />
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="axil-post-details">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.html,
                  }}
                />

                {/* End detail */}
                {/* <div className="tagcloud">
                  <a href="#">Design</a>
                  <a href="#">Life Style</a>
                  <a href="#">Web Design</a>
                  <a href="#">Development</a>
                  <a href="#">Design</a>
                  <a href="#">Life Style</a>
                </div>

                <div className="social-share-block">
                  <div className="post-like">
                    <a href="#">
                      <i className="fal fa-thumbs-up"></i>
                      <span>2.2k Like</span>
                    </a>
                  </div>
                  <ul className="social-icon icon-rounded-transparent md-size">
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
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="about-author">
                  <div className="media">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src="/images/post-images/author/author-b1.png"
                          alt="Author Images"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <div className="author-info">
                        <h5 className="title">
                          <a className="hover-flip-item-wrapper" href="#">
                            <span className="hover-flip-item">
                              <span data-text="Rahabi Ahmed Khan">
                                Rahabi Ahmed Khan
                              </span>
                            </span>
                          </a>
                        </h5>
                        <span className="b3 subtitle">Sr. UX Designer</span>
                      </div>
                      <div className="content">
                        <p className="b1 description">
                          At 29 years old, my favorite compliment is being told
                          that I look like my mom. Seeing myself in her image,
                          like this daughter up top, makes me so proud of how
                          far I’ve come, and so thankful for where I come from.
                        </p>
                        <ul className="social-share-transparent size-md">
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
                              <i className="far fa-envelope"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="axil-comment-area">
                  <div className="axil-total-comment-post">
                    <div className="title">
                      <h4 className="mb--0">30+ Comments</h4>
                    </div>
                    <div className="add-comment-button cerchio">
                      <a
                        className="axil-button button-rounded"
                        href="post-details.html"
                        tabIndex={0}
                      >
                        <span>Add Your Comment</span>
                      </a>
                    </div>
                  </div>

                  <div className="comment-respond">
                    <h4 className="title">Post a comment</h4>
                    <form action="#">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>{' '}
                        Required fields are marked{' '}
                        <span className="required">*</span>
                      </p>
                      <div className="row row--10">
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="form-group">
                            <label>Your Name</label>
                            <input id="name" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="form-group">
                            <label>Your Email</label>
                            <input id="email" type="email" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="form-group">
                            <label>Your Website</label>
                            <input id="website" type="text" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label>Leave a Reply</label>
                            <textarea name="message"></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <p className="comment-form-cookies-consent">
                            <input
                              id="wp-comment-cookies-consent"
                              name="wp-comment-cookies-consent"
                              type="checkbox"
                              value="yes"
                            />
                            <label className="wp-comment-cookies-consent">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </p>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-submit cerchio">
                            <input
                              name="submit"
                              type="submit"
                              id="submit"
                              className="axil-button button-rounded"
                              value="Post Comment"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="axil-comment-area">
                    <h4 className="title">2 comments</h4>
                    <ul className="comment-list">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <img
                                src="/images/post-images/author/author-b2.png"
                                alt="Author Images"
                              />
                            </div>
                            <div className="comment-inner">
                              <h6 className="commenter">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="Cameron Williamson">
                                      Cameron Williamson
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <div className="comment-meta">
                                <div className="time-spent">
                                  Nov 23, 2018 at 12:23 pm
                                </div>
                                <div className="reply-edit">
                                  <div className="reply">
                                    <a
                                      className="comment-reply-link hover-flip-item-wrapper"
                                      href="#"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Reply">Reply</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-text">
                                <p className="b2">
                                  Duis hendrerit velit scelerisque felis tempus,
                                  id porta libero venenatis. Nulla facilisi.
                                  Phasellus viverra magna commodo dui lacinia
                                  tempus. Donec malesuada nunc non dui posuere,
                                  fringilla vestibulum urna mollis. Integer
                                  condimentum ac sapien quis maximus.{' '}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="comment-body">
                              <div className="single-comment">
                                <div className="comment-img">
                                  <img
                                    src="/images/post-images/author/author-b3.png"
                                    alt="Author Images"
                                  />
                                </div>
                                <div className="comment-inner">
                                  <h6 className="commenter">
                                    <a
                                      className="hover-flip-item-wrapper"
                                      href="#"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Rahabi Khan">
                                          Rahabi Khan
                                        </span>
                                      </span>
                                    </a>
                                  </h6>
                                  <div className="comment-meta">
                                    <div className="time-spent">
                                      Nov 23, 2018 at 12:23 pm
                                    </div>
                                    <div className="reply-edit">
                                      <div className="reply">
                                        <a
                                          className="comment-reply-link hover-flip-item-wrapper"
                                          href="#"
                                        >
                                          <span className="hover-flip-item">
                                            <span data-text="Reply">Reply</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="comment-text">
                                    <p className="b2">
                                      Pellentesque habitant morbi tristique
                                      senectus et netus et malesuada fames ac
                                      turpis egestas. Suspendisse lobortis
                                      cursus lacinia. Vestibulum vitae leo id
                                      diam pellentesque ornare.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li className="comment">
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <img
                                src="/images/post-images/author/author-b2.png"
                                alt="Author Images"
                              />
                            </div>
                            <div className="comment-inner">
                              <h6 className="commenter">
                                <a className="hover-flip-item-wrapper" href="#">
                                  <span className="hover-flip-item">
                                    <span data-text="Rahabi Khan">
                                      Rahabi Khan
                                    </span>
                                  </span>
                                </a>
                              </h6>
                              <div className="comment-meta">
                                <div className="time-spent">
                                  Nov 23, 2018 at 12:23 pm
                                </div>
                                <div className="reply-edit">
                                  <div className="reply">
                                    <a
                                      className="comment-reply-link hover-flip-item-wrapper"
                                      href="#"
                                    >
                                      <span className="hover-flip-item">
                                        <span data-text="Reply">Reply</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-text">
                                <p className="b2">
                                  Duis hendrerit velit scelerisque felis tempus,
                                  id porta libero venenatis. Nulla facilisi.
                                  Phasellus viverra magna commodo dui lacinia
                                  tempus. Donec malesuada nunc non dui posuere,
                                  fringilla vestibulum urna mollis. Integer
                                  condimentum ac sapien quis maximus.{' '}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      <MoreStories />
    </Layout>
  );
};

export default BlogDetail;

export async function getStaticPaths() {
  const posts = (await getAllPosts({})) as PostsOrPages;
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return { props: { post } };
}
