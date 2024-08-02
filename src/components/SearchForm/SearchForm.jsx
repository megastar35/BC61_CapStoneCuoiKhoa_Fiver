const SearchForm = ({ setSearchQuery, handleSubmit, searchQuery }) => {
  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };
  return (
    <form className="w-full flex" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      {/* <div className="absolute flex items-center pointer-events-none"></div> */}
      <input
        type="search"
        id="default-search"
        className="block w-full p-2 ps-2 text-md text-gray-600 border border-gray-300 rounded-md bg-white focus:border-inherit focus:outline-none focus:ring-0 focus:border-black"
        placeholder="Search for any service..."
        required
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="btn_search text-white  bg-green-900 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-inherit rounded-md text-md px-4 py-2"
      >
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  );
};

export default SearchForm;
