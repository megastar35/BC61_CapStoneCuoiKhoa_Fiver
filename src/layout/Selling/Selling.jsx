import './selling.scss';
import SellingProposition1400 from '../../assets/images/selling-proposition/selling-proposition-still-1400.png';
import SellingProposition1200 from '../../assets/images/selling-proposition/selling-proposition-still-1200.png';
import SellingProposition900 from '../../assets/images/selling-proposition/selling-proposition-still-900.png';
import SellingProposition720 from '../../assets/images/selling-proposition/selling-proposition-still-720.png';
// import '../../../node_modules/video-react/dist/video-react.css';
const Selling = () => {
  return (
    <div className="selling py-24  bg-green-50 mb-24">
      <div className="container mx-auto">
        <div className=" md:block lg:flex  items-center">
          <div className="selling_text md:pr-16 lg:pr-30 ">
            <h2 className="pb-6 text-3xl font-bold">
              The best part? Everything.
            </h2>
            <ul>
              <li>
                <h4 className="flex pb-2 items-center">
                  <i className="fa-regular fa-circle-check fa-xl   mr-2 text-gray-500" />
                  <span className="">Stick to your budget</span>
                </h4>
                <p className="text-gray-500">
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing.
                </p>
              </li>
              <li>
                <h4 className="flex pb-2 items-center">
                  <i className="fa-regular fa-circle-check fa-xl mr-2 text-gray-500" />
                  <span className="">Get quality work done quickly</span>
                </h4>
                <p className="text-gray-500">
                  Hand your project over to a talented freelancer in minutes,
                  get long-lasting results.
                </p>
              </li>
              <li>
                <h4 className="flex pb-2 items-center">
                  <i className="fa-regular fa-circle-check fa-xl   mr-2 text-gray-500" />
                  <span className="">Pay when you're happy</span>
                </h4>
                <p className="text-gray-500">
                  Upfront quotes mean no surprises. Payments only get released
                  when you approve.
                </p>
              </li>
              <li>
                <h4 className="flex pb-2 items-center">
                  <i className="fa-regular fa-circle-check fa-xl   mr-2 text-gray-500" />
                  <span className="">Count on 24/7 support</span>
                </h4>
                <p className="text-gray-500">
                  Our round-the-clock support team is available to help anytime,
                  anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <picture className="flex px-4">
              <source
                media="(min-width:1160px)"
                type
                srcSet={SellingProposition1200}
              />
              <source
                media="(min-width:900)"
                type
                srcSet={SellingProposition900}
              />
              <img src={SellingProposition720} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selling;
