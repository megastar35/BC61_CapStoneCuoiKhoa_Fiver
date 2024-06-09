import GraphicDesign from '../../assets/images/categories/graphics-design.svg';
import DigitalMK from '../../assets/images/categories/online-marketing.svg';
import Writing from '../../assets/images/categories/writing-translation.svg';
import VideoAnimate from '../../assets/images/categories/video-animation.svg';
import Music from '../../assets/images/categories/music-audio.svg';
import Programming from '../../assets/images/categories/programming.svg';
import Business from '../../assets/images/categories/business.svg';
import Lifestyle from '../../assets/images/categories/lifestyle.svg';
import Data from '../../assets/images/categories/data.svg';
import Photograph from '../../assets/images/categories/photography.svg';
import './categories.scss';
const Categories = () => {
  return (
    <div className="categories mb-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10">You need it, we've got it</h2>
        <ul className="categories_list grid grid-cols-5 align-middle justify-center">
          <li>
            <a href="">
              <img src={GraphicDesign} alt="" />
              Graphics & Design
            </a>
          </li>
          <li>
            <a href="">
              <img src={DigitalMK} alt="" />
              Digital Marketing
            </a>
          </li>
          <li>
            <a href="">
              <img src={Writing} alt="" />
              Writing & Translation
            </a>
          </li>
          <li>
            <a href="">
              <img src={VideoAnimate} alt="" />
              Video & Animation
            </a>
          </li>
          <li>
            <a href="">
              <img src={Music} alt="" />
              Music & Audio
            </a>
          </li>
          <li>
            <a href="">
              <img src={Programming} alt="" />
              Programming & Tech
            </a>
          </li>
          <li>
            <a href="">
              <img src={Business} alt="" />
              Business
            </a>
          </li>
          <li>
            <a href="">
              <img src={Lifestyle} alt="" />
              Lifestyle
            </a>
          </li>
          <li>
            <a href="">
              <img src={Data} alt="" />
              Data
            </a>
          </li>{' '}
          <li>
            <a href="">
              <img src={Photograph} alt="" />
              Photography
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
