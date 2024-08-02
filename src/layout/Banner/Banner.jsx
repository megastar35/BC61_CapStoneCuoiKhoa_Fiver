import './banner.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchForm from '../../components/SearchForm/SearchForm';
import TrustBy from '../TrustBy/TrustBy';
import { useSearch } from '../../contexts/SearchProvider/SearchProvider';
const Banner = () => {
  const { searchQuery, setSearchQuery, handleSearchSubmit } = useSearch();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bannerRef = useRef(null);

  return (
    <div className="relative" ref={bannerRef}>
      <div className="max-width-container banner-content mb-10  ">
        <div className="content flex items-center justify-center flex-col ">
          <div className="top_content relative">
            <h1 className=" font-medium text-white mb-10 text-center">
              Find the right{' '}
              <em className="font-normal text-green-400">freelancer</em>{' '}
              service, right away
            </h1>
            {/* Search */}
            <SearchForm
              handleSubmit={e => handleSearchSubmit(e, navigate, dispatch)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <TrustBy />
        </div>
      </div>
    </div>
  );
};

export default Banner;
