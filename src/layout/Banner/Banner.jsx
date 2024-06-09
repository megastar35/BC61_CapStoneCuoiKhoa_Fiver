import { Carousel } from 'antd';
import './banner.scss';
import Search from 'antd/es/transfer/search';
import { useEffect, useState } from 'react';
import { quanLyCongViec } from '../../services/quanLyCongViec';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Chuyển hướng đến trang kết quả tìm kiếm với query là từ khóa tìm kiếm
    navigate(`/worklist/${searchQuery}`);
  };
  useEffect(() => {
    console.log('searchQuery', searchQuery);
    quanLyCongViec
      .layDanhSachCongViecTheoTen(searchQuery)
      .then(res => {
        console.log('api data', res.data.content);
        setResults(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  }, [searchQuery]);

  return (
    <div className="relative ">
      <Carousel autoplay className="carousel" effect="fade" dots={false}>
        <div className="colin-background hero-background"></div>
        <div className="jenny-background hero-background"></div>
        <div className="scarlett-background hero-background"></div>
      </Carousel>
      <div className="container flex items-center banner-content absolute top-0 left-0 bottom-0 right-0 ">
        <div className="content ">
          <h1 className=" text-5xl font-bold text-white mb-10">
            Find the right <em className="font-normal">freelancer</em> service,
            right away
          </h1>
          {/* Search */}
          <form className="max-w" onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute  flex items-center pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-4 text-md text-gray-900 border border-gray-300 rounded-md bg-white focus:border-inherit"
                placeholder="Search for any service..."
                required
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="btn_search text-white absolute end-0 bottom-0 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-inherit  rounded-r-md text-md px-4 py-2"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
