import Slider from 'react-slick';
import AIAritst from '../../assets/images/pplService-ai-artist.webp';
import LogoDesign from '../../assets/images/pplService-logo-desgin.webp';
import WordPress from '../../assets/images/pplService-wordpress.webp';
import VoiceOver from '../../assets/images/voice-over.png';
import Explainer from '../../assets/images/animated-explainer.png';
import SocialMedia from '../../assets/images/social.png';
import SEO from '../../assets/images/seo.png';
import Illustration from '../../assets/images/illustration.png';
import Traslation from '../../assets/images/translation.png';
import DataEntry from '../../assets/images/data-entry.png';
import BookCover from '../../assets/images/book-covers.png';

import '../PopularService/popularService.scss';

const PopularService = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: true,
    centerPadding: '20px',
  };
  return (
    <div className="popular_sevices container ">
      <div className="mb-20">
        <h2 className="text-4xl pb-6 font-bold text-gray-600">
          Popular services
        </h2>
        <Slider {...settings}>
          <div className="slide">
            <a href="">
              <h4>
                <span>Add talent to AI</span>
                AI Artists
              </h4>
              <img src={AIAritst} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Build your brand</span>
                Logo Design
              </h4>
              <img src={LogoDesign} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Customize your site</span>
                WordPress
              </h4>
              <img src={WordPress} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Share your message</span>
                Voice Over
              </h4>
              <img src={VoiceOver} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Engage your audience</span>
                Video Explainer
              </h4>
              <img src={Explainer} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Reach more customers</span>
                Social Medio
              </h4>
              <img src={SocialMedia} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Unlock growth online</span>
                SEO
              </h4>
              <img src={SEO} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Color your dreams</span>
                Illustration
              </h4>
              <img src={Illustration} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Go global</span>
                Translation
              </h4>
              <img src={Traslation} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Learn your business</span>
                Data entry
              </h4>
              <img src={DataEntry} alt="" />
            </a>
          </div>
          <div className="slide">
            <a href="">
              <h4>
                <span>Showcase your story</span>
                Book Covers
              </h4>
              <img src={BookCover} alt="" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PopularService;
