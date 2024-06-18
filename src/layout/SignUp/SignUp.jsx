import React, { useState, useEffect } from 'react';
import { Formik, useFormik } from 'formik';
import InputCustom from '../../Input/InputCustom';
import * as Yup from 'yup';
import { controlUserServer } from '../../services/ControlUser';
const SignUp = ({ statusSignUp }) => {
  const styleImg = {
    backgroundImage:
      'url("https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png"',
    width: '40%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '30px',
  };
  const formilk = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    },
    onSubmit:(value,{resetForm}) => {
      console.log(value);
      controlUserServer.SignUp(value).then((res)=>{
        console.log(res.data.content);
        statusSignUp();
        resetForm();
      }).catch((err)=>{
        console.log(err);
      })
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Vui lòng nhập đúng email')
        .required('Vui lòng không bỏ trống'),
      password: Yup.string()
        .required('Vui lòng không bỏ trống')
        .min(5, 'Nhập tối thiểu 5 ký tự'),
      name: Yup.string().required("Vui lòng không bỏ trống").matches(/^[a-zA-Z ]+$/,'Vui lòng nhập lại tên'),
      confirmPassword: Yup.string()
        .required('Vui lòng không bỏ trống')
        .min(5, 'Nhập tối thiểu 5 ký tự').oneOf([Yup.ref('password'), null], 'Không khớp với mật khẩu trên')
    }),
  });
  return (
    <div
      id="SignUp-modal"
      tabIndex={-1}
      className="focus:ring focus:ring-violet-300 focus:outline-none overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="flex flex-row relative left-[400px] p-4 w-full max-w-screen-md	max-h-full">
        <div className="rounded-l-lg" style={styleImg}>
          <h1 className="text-xl mb-3">Success starts here</h1>
          <ul className="">
            <li className="flex pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Over 600 categories
            </li>
            <li className="flex pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Pay per project, not per hour
            </li>
            <li className="flex pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
                style={{ width: '40px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Access to talent and businesses across the globe
            </li>
          </ul>
        </div>
        <div className="relative bg-white rounded-r-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Sign Up to our platform
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="SignUp-modal"
              onClick={statusSignUp}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form
              onSubmit={formilk.handleSubmit}
              className="space-y-4"
              action="#"
            >
              <InputCustom
                label={'Your name'}
                name={'name'}
                type={'text'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={'••••••••'}
                error={formilk.errors.name}
                touched={formilk.touched.name}
              />
              <InputCustom
                label={'Your Email'}
                name={'email'}
                type={'email'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={'name@gmail.com'}
                error={formilk.errors.email}
                touched={formilk.touched.email}
              />
              <InputCustom
                label={'Your password'}
                name={'password'}
                type={'text'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={'••••••••'}
                error={formilk.errors.password}
                touched={formilk.touched.password}
              />
              <InputCustom
                label={'Confirm your password'}
                name={'confirmPassword'}
                type={'text'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={'••••••••'}
                error={formilk.errors.confirmPassword}
                touched={formilk.touched.confirmPassword}
              />
              <button
                // onClick={toggleModal}
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
