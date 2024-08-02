import { useState, useEffect, useRef, useContext } from 'react';
import home_logo from '../../assets/images/fiver_logo.svg';
import hireFreelancer from '../../assets/logo/hire-freelancer.svg';
import iamFreelancer from '../../assets/logo/iam-freelancer.svg';
import 'flowbite';
import './header.scss';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SearchForm from '../../components/SearchForm/SearchForm';
import LanguageModal from './LanguageModal/LanguageModal';
import { BannerHeightContext } from '../../templates/HomeTemplate/HomeTemplate';
import { useSearch } from '../../contexts/SearchProvider/SearchProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { path } from '../../common/path';
const Header = () => {
  const location = useLocation();
  // Danh sách đường dẫn cần thay đổi position
  // const pathWithRelativeHeader = [path.workList, path.detailWork];
  const pathWithFixedHeader = [path.trangChu];
  // pathname là một property của object location trả về tên của đường dẫn vd: localhost:5000//pathname
  const isFixedHeader = pathWithFixedHeader.includes(location.pathname);
  // State để theo dõi trạng thái của các dropdown
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const bannerHeight = useContext(BannerHeightContext);
  const { searchQuery, setSearchQuery, handleSearchSubmit } = useSearch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Hàm để toggle trạng thái của một dropdown cụ thể
  const toggleDropdown = dropdown => {
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
    const handleScroll = () => {
      if (window.scrollY > bannerHeight) {
        setShowSearchForm(true);
      } else {
        setShowSearchForm(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [bannerHeight]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSign, setIsOpenSign] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const statusSignUp = () => {
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
    <header className={`w-full ${isFixedHeader ? 'fixed' : 'relative'}`}>
      <nav className="bg-white border-gray-200  ">
        <div className="flex items-center h-20 max-width-container max-w-screen-xl">
          {/* logo */}
          <a href="/" className="flex items-center mr-8 min-w-20">
            <img src={home_logo} alt="Home Logo" />
          </a>
          {/* SearchForm */}

          <div
            className={`header_search w-full transition-opacity duration-500 ${
              showSearchForm || !isFixedHeader
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <SearchForm
              handleSubmit={e => handleSearchSubmit(e, navigate, dispatch)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          {/* <div className="header_search w-full">
            <SearchForm />
          </div> */}
          {/* Nav Right */}
          <nav className="nav_right flex items-center flex-1 justify-end ml-8">
            <ul className="flex items-center">
              <li>
                {/* dropdown btn PRO*/}
                <div className="nav_item" ref={dropdownRef1}>
                  <button
                    id="dropdownButton1"
                    data-dropdown-toggle="dropdown1"
                    className=" font-medium rounded-lg px-4 py-2 text-center inline-flex items-center"
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
                    id="dropdown1"
                    className="dropdown_box z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-96 "
                  >
                    <ul
                      className="dropdown_list fiver_pro py-2 text-gray-700 "
                      aria-labelledby="dropdownButton1"
                    >
                      {/* Hire Freelancer */}
                      <li className="py-2 px-4">
                        <div className="border-2 rounded-md">
                          <a
                            href="#"
                            className=" px-4 py-2 hover:bg-gray-100   "
                          >
                            <div className="flex items-center gap-4">
                              <img src={hireFreelancer} alt="" />
                              <div>
                                <h5>I'm looking to hire</h5>
                                <p>
                                  I'd like to work with Pro freelancers and
                                  agencies while using free business tool.
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      {/* Iam Freelancer */}
                      <li className="py-2 px-4">
                        <div className="border-2 rounded-md">
                          <a
                            href="#"
                            className=" px-4 py-2 hover:bg-gray-100   "
                          >
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
              </li>
              <li>
                {/* dropdown btn EXPLORE*/}
                <div className="nav_item" ref={dropdownRef2}>
                  <button
                    id="dropdownButton2"
                    data-dropdown-toggle="dropdown2"
                    className=" font-medium rounded-lg px-4 py-2 text-center inline-flex items-center"
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
                      className="dropdown_list explore py-2 text-gray-700 "
                      aria-labelledby="dropdownButton2"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          <span>Discover</span>
                          <span>Inspiring projects made on Fiver</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          <span>Community</span>
                          <span>Connect with Fiver's team and community</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          <span>Guides</span>
                          <span>In-depth guides covering business topics</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          <span>Podcast</span>
                          <span>Inside tips from top business minds</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          <span>Learn</span>
                          <span>
                            Professional online courses, led by experts
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          <span>Blog</span>
                          <span>News, information and community stories</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100  "
                        >
                          <span>Logo Maker</span>
                          <span>Create your logo instanly</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Language Modal*/}
              <li>
                <div className="nav_item">
                  <LanguageModal />
                </div>
              </li>
              <li>
                <div className="nav_item">
                  <button
                    onClick={toggleModal}
                    className="login_btn text-sm transition-all duration-200 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none "
                    type="button"
                  >
                    Join
                  </button>
                </div>
              </li>
            </ul>

            {isOpen && (
              <SignIn toggleModal={toggleModal} statusSignUp={statusSignUp} />
            )}
            {isOpenSign && <SignUp statusSignUp={statusSignUp} />}
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
