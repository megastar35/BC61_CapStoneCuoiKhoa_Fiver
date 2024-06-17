import './footer.scss';
const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-100">
      <div className="container pt-16 ">
        <div className="footer_content  ">
          <div className="grid grid-cols-5">
            <div className="footer_column">
              <h6>Categories</h6>
              <div>
                <ul>
                  <li>
                    <a href="">Graphics & Design</a>
                  </li>
                  <li>
                    <a href="">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="">Writing & Translation</a>
                  </li>
                  <li>
                    <a href="">Video & Animation</a>
                  </li>
                  <li>
                    <a href="">Music & Audio</a>
                  </li>
                  <li>
                    <a href="">Fiver Logo Maker</a>
                  </li>
                  <li>
                    <a href="">Programming & Tech</a>
                  </li>
                  <li>
                    <a href="">Data</a>
                  </li>
                  <li>
                    <a href="">Business</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_column">
              <h6>About</h6>
              <div>
                <ul>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Press & News</a>
                  </li>
                  <li>
                    <a href="">Partnerships</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms of Service</a>
                  </li>
                  <li>
                    <a href="">Intellectual Property Claim</a>
                  </li>
                  <li>
                    <a href="">Investor Relations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_column">
              <h6>Support and Education</h6>
              <div>
                <ul>
                  <li>
                    <a href="">Help & Support</a>
                  </li>
                  <li>
                    <a href="">Trust & Safety</a>
                  </li>
                  <li>
                    <a href="">Selling on Fiver</a>
                  </li>
                  <li>
                    <a href="">Buying on Fiver</a>
                  </li>
                  <li>
                    <a href="">Fiver Guides</a>
                  </li>
                  <li>
                    <a href="">
                      Learn <p>Online Courses</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_column">
              <h6>Community</h6>
              <div>
                <ul>
                  <li>
                    <a href="">Customer Success Stories</a>
                  </li>
                  <li>
                    <a href="">Community Hub</a>
                  </li>
                  <li>
                    <a href="">Forum</a>
                  </li>
                  <li>
                    <a href="">Events</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Creators</a>
                  </li>
                  <li>
                    <a href="">Affiliates</a>
                  </li>
                  <li>
                    <a href="">Podcast</a>
                  </li>
                  <li>
                    <a href="">Invite a Friend</a>
                  </li>
                  <li>
                    <a href="">Become a Seller</a>
                  </li>
                  <li>
                    <a href="">Community Standards</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_column">
              <h6>Business Solutions</h6>
              <div>
                <ul>
                  <li>
                    <a href="">About Business Solutions</a>
                  </li>
                  <li>
                    <a href="">Fiver Pro</a>
                  </li>
                  <li>
                    <a href="">Fiver Certified</a>
                  </li>
                  <li>
                    <a href="">Become an Agency</a>
                  </li>
                  <li>
                    <a href="">Fiver Enterprise</a>
                  </li>
                  <li>
                    <a href="">
                      ClearVoice
                      <p>Content Marketing</p>
                    </a>
                  </li>
                  <li>
                    <a href="">Working Not Working</a>
                  </li>
                  <li>
                    <a href="">Contact Sales</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex justify-between items-center">
          <div className="left pt-4">
            <p>
              fiver <span>© Fiver International Ltd. 2024</span>
            </p>
          </div>
          <div className="right flex items-center pt-6">
            <ul className="social flex">
              <li>
                <a href>
                  <i className="fa-brands fa-tiktok" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa-brands fa-pinterest" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
            </ul>
            <button>
              <i className="fa-solid fa-globe pr-2" />
              <span>English</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
