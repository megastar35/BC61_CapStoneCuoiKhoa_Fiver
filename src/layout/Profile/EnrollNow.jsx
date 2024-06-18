import React from 'react';

const EnrollNow = () => {
  return (
    <div className="mt-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="p-10">
        <div className="">
            <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg" alt="" />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/fiverr_learn/enroll-icon.69b770f.svg"
            alt=""
          />
          <h3 className='my-3 text-[20px]'>Earn badges and stand out</h3>
        </div>
        <div className="px-5 pb-5 flex flex-col items-center">
          <h3 className='text-center pb-[20px]'>Boost your sales, by boosting your expertise.</h3>
         <button className='rounded py-[12px] px-[24px] bg-green-500 text-white'>Enroll now</button>
        </div>
      </div>
    </div>
  );
};

export default EnrollNow;
