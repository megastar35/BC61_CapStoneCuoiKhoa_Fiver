import { Carousel } from 'antd';
import './banner.scss';
import Search from 'antd/es/transfer/search';

const Banner = () => {
  return (
    <div className=" relative">
      <Carousel autoplay className="carousel" effect="fade" dots={false}>
        <div className="colin-background hero-background"></div>
        <div className="jenny-background hero-background"></div>
        <div className="scarlett-background hero-background"></div>
      </Carousel>
      <div className="  flex items-center banner-content mx-auto absolute top-0 left-0 bottom-0 right-0 ">
        <div className="content">
          <h1 className=" text-5xl font-bold text-white">
            Find the right <em className="font-normal">freelancer</em> service,
            right away
          </h1>
          
          {/* Search */}
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
