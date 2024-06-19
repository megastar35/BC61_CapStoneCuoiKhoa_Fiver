import React from 'react';

const SearchForm = () => {
  return (
    <form className="max-w" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute flex items-center pointer-events-none"></div>
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
          className="btn_search text-white absolute end-0 bottom-0 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-inherit rounded-r-md text-md px-4 py-2"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
