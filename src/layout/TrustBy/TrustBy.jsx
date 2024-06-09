import React from 'react';
import meta from '../../assets/logo/meta_logo.png';
import google from '../../assets/logo/google_logo.png';
import netflix from '../../assets/logo/netflix_logo.png';
import pandg from '../../assets/logo/pandg_logo.png';
import paypal from '../../assets/logo/paypal_logo.png';

const TrustBy = () => {
  return (
    <div className="trusted_by mb-24 bg-gray-100">
      <div className="container flex items-center justify-center">
        <span className="pr-5 font-bold text-gray-400">Trusted by:</span>
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
