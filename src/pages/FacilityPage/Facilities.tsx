import React, { useState } from "react";
import { useGetAllFacilityQuery } from "../../redux/Api/FacilityApi/facilityApi";
import SectionHeder from "../../Component/common/SectionHeder";
import Card from "../../Component/common/Card";
import { Facility } from "./facility.interface";

const Facilities = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 4;
  // Fetch facilities from the API
  const { data } = useGetAllFacilityQuery({ page: currentPage, limit });

  // Define the state for search and price filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);

  // Handle changes in search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle changes in min price input
  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 0) {
      setMinPrice(value);
    }
  };

  // Handle changes in max price input
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 0) {
      setMaxPrice(value);
    }
  };

  // Filter the facilities based on search and price range
  const filteredData =
    data?.data.filter(
      (facility: Facility) =>
        facility.isDeleted === false &&
        (facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          facility.location
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        facility.pricePerHour >= minPrice &&
        facility.pricePerHour <= maxPrice
    ) || [];

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-4">
      <SectionHeder text="All Facilities" />

      {/* Search and filter controls */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search field */}
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name or location"
              value={searchQuery}
              onChange={handleSearchChange}
              className="input input-bordered w-full input-sm"
            />
          </div>

          {/* Price filter */}
          <div className="flex  gap-4">
            <div>
              <label
                htmlFor="minPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Min Price
              </label>
              <input
                id="minPrice"
                type="number"
                placeholder="Min Price"
                value={minPrice === 0 ? "" : minPrice}
                onChange={handleMinPriceChange}
                className="input input-bordered w-full input-sm"
                min="0"
              />
            </div>
            <div>
              <label
                htmlFor="maxPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Max Price
              </label>
              <input
                id="maxPrice"
                type="number"
                placeholder="Max Price"
                value={maxPrice === Infinity ? "" : maxPrice}
                onChange={handleMaxPriceChange}
                className="input input-bordered w-full input-sm"
                min="0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Display filtered facilities */}
      <div className="p-2 grid md:grid-cols-2 gap-10 justify-items-center lg:grid-cols-3 xl:grid-cols-4">
        {filteredData.map((item: Facility) => (
          <Card key={item._id} info={item} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-sm hover:text-white hover:bg-slate-900 bg-slate-950 border-none"
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {data?.meta?.totalPage}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === data?.meta?.totalPage}
          className="btn btn-sm hover:text-white hover:bg-slate-900 bg-slate-950 border-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Facilities;
