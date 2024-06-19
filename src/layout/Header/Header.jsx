import { useState, useEffect, useRef } from 'react';
import hireFreelancer from '../../assets/logo/hire-freelancer.svg';
import iamFreelancer from '../../assets/logo/iam-freelancer.svg';
import 'flowbite';
import './header.scss';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
const Header = () => {
  // State để theo dõi trạng thái của các dropdown
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  // Hàm để toggle trạng thái của một dropdown cụ thể
  const toggleDropdown = dropdown => {
    console.log(dropdown);
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = event => {
    if (
      dropdownRef1.current &&
      !dropdownRef1.current.contains(event.target) &&
      dropdownRef2.current &&
      !dropdownRef2.current.contains(event.target)
    ) {
      setOpenDropdown(null);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSign,setIsOpenSign]=useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const statusSignUp=()=>{
    setIsOpenSign(!isOpenSign);
  };
  useEffect(() => {
    // Ensure Flowbite initializes the modals
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <header className="w-full">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Fiver
            </span>
          </a>
          <div className="nav_left flex items-center">
            {/* dropdown btn PRO*/}
            <div className="nav_item" ref={dropdownRef1}>
              <button
                id="dropdownButton1"
                data-dropdown-toggle="dropdown"
                className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={() => toggleDropdown('dropdown1')}
              >
                <span>Fiver Pro</span>
                <i
                  className={`fa-solid ${
                    openDropdown === 'dropdown1'
                      ? 'fa-angle-up'
                      : 'fa-angle-down'
                  }`}
                />
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdown"
                className="dropdown_box z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-96 "
              >
                <ul
                  className="dropdown_list py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownButton1"
                >
                  {/* Hire Freelancer */}
                  <li className="py-2 px-4">
                    <div className="border-2 rounded-md">
                      <a href="#" className=" px-4 py-2 hover:bg-gray-100   ">
                        <div className="flex items-center gap-4">
                          <img src={hireFreelancer} alt="" />
                          <div>
                            <h5>I'm looking to hire</h5>
                            <p>
                              I'd like to work with Pro freelancers and agencies
                              while using free business tools.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  {/* Iam Freelancer */}
                  <li className="py-2 px-4">
                    <div className="border-2 rounded-md">
                      <a href="#" className=" px-4 py-2 hover:bg-gray-100   ">
                        <div className="flex items-center gap-4">
                          <img src={iamFreelancer} alt="" />
                          <div>
                            <h5>I want to offer Pro services</h5>
                            <p>
                              I’d like to work on business projects as a Pro
                              freelancer or agency.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* dropdown btn EXPLORE*/}
            <div className="nav_item" ref={dropdownRef2}>
              <button
                id="dropdownButton2"
                data-dropdown-toggle="dropdown2"
                className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={() => toggleDropdown('dropdown2')}
              >
                <span>Explore</span>{' '}
                <i
                  className={`fa-solid ${
                    openDropdown === 'dropdown2'
                      ? 'fa-angle-up'
                      : 'fa-angle-down'
                  }`}
                />
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdown2"
                className="dropdown_box z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-96 "
              >
                <ul
                  className="dropdown_list py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownButton2"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      <span>Discover</span>
                      <span>Inspiring projects made on Fiver</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      <span>Community</span>
                      <span>Connect with Fiver's team and community</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      <span>Guides</span>
                      <span>In-depth guides covering business topics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      <span>Podcast</span>
                      <span>Inside tips from top business minds</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      <span>Learn</span>
                      <span>Professional online courses, led by experts</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      <span>Blog</span>
                      <span>News, information and community stories</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      <span>Logo Maker</span>
                      <span>Create your logo instanly</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={toggleModal}
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              type="button"
            >
              Login
            </button>
            {isOpen && (<SignIn toggleModal={toggleModal} statusSignUp={statusSignUp}/>)}
            {isOpenSign&&<SignUp statusSignUp={statusSignUp}/>}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
