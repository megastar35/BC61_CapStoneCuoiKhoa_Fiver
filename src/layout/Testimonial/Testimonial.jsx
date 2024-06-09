import haefest from '../../assets/images/Testimonial/testimonial-video-still-haerfest-560.jpg';
import lavender from '../../assets/images/Testimonial/testimonial-video-still-lavender-560.jpg';
import naadam from '../../assets/images/Testimonial/testimonial-video-still-naadam-560.jpg';
import rooted from '../../assets/images/Testimonial/testimonial-video-still-rooted-560.jpg';
import haefestLogo from '../../assets/images/Testimonial/brands/haerfest-logo.png';
import rootedLogo from '../../assets/images/Testimonial/brands/rooted-logo.png';
import lavenderLogo from '../../assets/images/Testimonial/brands/lavender-logo.png';
import naadamLogo from '../../assets/images/Testimonial/brands/naadam-logo.png';

import './testimonial.scss';
import Slider from 'react-slick';

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial">
      <div className="container mb-24">
        <Slider {...settings}>
          <div>
            <div className="slide flex items-center">
              <div className="left basis-2/5 ">
                <img src={haefest} alt="" />
              </div>
              <div className="right text_content  basis-3/5 pl-16 pr-12">
                <h5>
                  Tim and Dan Joo, Co-Founders
                  <span>
                    <img src={haefestLogo} alt="" />
                  </span>
                </h5>
                <div className="quote merriweather-regular-italic ">
                  <em>
                    "When you want to create a business bigger than yourself,
                    you need a lot of help. That's what Fiverr does."
                  </em>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slide flex items-center">
              <div className="left basis-2/5 ">
                <img src={rooted} alt="" />
              </div>
              <div className="right text_content  basis-3/5 pl-16 pr-12">
                <h5>
                  Kay Kim, Co-Founder
                  <span>
                    <img src={rootedLogo} alt="" />
                  </span>
                </h5>
                <div className="quote merriweather-regular-italic ">
                  <em>
                    "It's extremely exciting that Fiverr has freelancers from
                    all over the world — it broadens the talent pool. One of the
                    best things about Fiverr is that while we're sleeping,
                    someone's working."
                  </em>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slide flex items-center">
              <div className="left basis-2/5 ">
                <img src={naadam} alt="" />
              </div>
              <div className="right text_content  basis-3/5 pl-16 pr-12">
                <h5>
                  Caitlin Tormey, Chief Commercial Officer
                  <span>
                    <img src={naadamLogo} alt="" />
                  </span>
                </h5>
                <div className="quote merriweather-regular-italic ">
                  <em>
                    "We've used Fiverr for Shopify web development, graphic
                    design, and backend web development. Working with Fiverr
                    makes my job a little easier every day."
                  </em>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slide flex items-center">
              <div className="left basis-2/5 ">
                <img src={lavender} alt="" />
              </div>
              <div className="right text_content  basis-3/5 pl-16 pr-12">
                <h5>
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                  <span>
                    <img src={lavenderLogo} alt="" />
                  </span>
                </h5>
                <div className="quote merriweather-regular-italic ">
                  <em>
                    "We used Fiverr for SEO, our logo, website, copy, animated
                    videos — literally everything. It was like working with a
                    human right next to you versus being across the world."
                  </em>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
