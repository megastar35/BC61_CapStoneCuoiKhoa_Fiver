import meta from '../../assets/logo/meta_logo.svg';
import google from '../../assets/logo/google_logo.svg';
import netflix from '../../assets/logo/netflix_logo.svg';
import pandg from '../../assets/logo/pandg_logo.svg';
import paypal from '../../assets/logo/paypal_logo.svg';

const TrustBy = () => {
  return (
    <div className="relative trusted_by">
      <div className="container flex items-center justify-center">
        <span className="pr-5 font-bold text-gray-400 text-sm">
          Trusted by:
        </span>
        <ul className="flex gap-16 px-6 h-24 items-center">
          <li>
            <img src={meta} alt="" />
          </li>
          <li>
            <img src={google} alt="" />
          </li>
          <li>
            <img src={netflix} alt="" />
          </li>
          <li>
            <img src={pandg} alt="" />
          </li>
          <li>
            <img src={paypal} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrustBy;
