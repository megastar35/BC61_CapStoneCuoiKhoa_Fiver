import React, { useState, useEffect, useContext } from 'react';
import InputCustom from '../../Input/InputCustom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { controlUserServer } from '../../services/ControlUser';
import { AlertContext } from '../../App';
import { handleSetValueLocalStore } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { handleGetValue } from '../../redux/slice/userSlice';
const SignIn = ({ toggleModal, statusSignUp }) => {
  const context= useContext(AlertContext)
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [arrUser,setArrUser]=useState([]);
  const [errorSignIn,setErrorSignIn]=useState("");
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
    },
    onSubmit: (value,{resetForm}) => {
      console.log(value);
      // const  inforUser= arrUser.find(item=>item.email==value.email);
      controlUserServer.SignIn(value).then((res)=>{
        console.log(res.data.content);
        toggleModal();
        resetForm();
        context.handleAlert('success','Đăng nhập thành công')
        // navigate('/users/admin');
        handleSetValueLocalStore("dataUser",res.data.content);
        dispatch(handleGetValue(res.data.content));
        if(res.data.content.user.role=="ADMIN")navigate('/users/admin');
      }).catch((err)=>{
        resetForm();
        console.log(err);
        context.handleAlert('error',err.response.data.content)
      });
      // resetForm();
      // if(inforUser){
      //   if(inforUser.password==value.password){
      //     setErrorSignIn("");
      //   }else setErrorSignIn("Mật khẩu không đúng");
      // }else{
      //   setErrorSignIn("Không tồn tại tài khoản");
      // }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Vui lòng nhập đúng email')
        .required('Vui lòng không bỏ trống'),
      password: Yup.string()
        .required('Vui lòng không bỏ trống')
        .min(5, 'Nhập tối thiểu 5 ký tự'),
    }),
  });
  const switchModal=()=>{
    toggleModal()
    statusSignUp();
  }
  // useEffect(()=>{
  //   controlUserServer.SignIn().then((res)=>{
  //     setArrUser(res.data.content);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // },[]);

  return (
    <div
      id="authentication-modal"
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
              Sign in to our platform
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={toggleModal}
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
            {/* {errorSignIn!=""?<p className="text-black-500 p-[10px] bg-orange-400 text-center text-sm">{errorSignIn}</p>:''} */}
            <form
              onSubmit={formilk.handleSubmit}
              className="space-y-4"
              action="#"
            >
              <InputCustom
                label={'Your Email'}
                name={'email'}
                type={'email'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={"name@gmail.com"}
                error={formilk.errors.email}
                touched={formilk.touched.email}
              />
              <InputCustom
                label={'Your password'}
                name={'password'}
                type={'text'}
                handleChange={formilk.handleChange}
                handleBlur={formilk.handleBlur}
                placeholder={"••••••••"}
                error={formilk.errors.password}
                touched={formilk.touched.password}
              />
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                // onClick={toggleModal}
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{' '}
                <button
                  type='button'
                  onClick={()=>{switchModal()}}
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
