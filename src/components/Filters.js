import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";

const Filters = () => {
  let { setCurrency, setSortBy } = useContext(CryptoContext);
  const currencyRef = useRef(null);
  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };
  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      <Search />
      <div className="flex mr-7">
        <form
          className="relative flex items-center font-nunito mr-12"
          onSubmit={handleCurrencySubmit}
        >
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center mr-2 font-bold"
          >
            Currency :
          </label>
          <input
            type="text"
            name="currency"
            placeholder="usd"
            ref={currencyRef}
            className="w-16 rounded bg-gray-200 placeholder:text-gray-100
          pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
          />
          <button type="submit" className="ml=1 cursor-pointer">
            <img src={submitIcon} alt="submit" className="w-full h-auto " />
          </button>
        </form>
        <label className="relative flex justify-center items-center">
          <span className="font-bold mr-2">Sort by :</span>
          <select
            name="sortby"
            className="rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize
            focus:outline-0 "
            onClick={handleSort}
          >
            ,gecko_desc,gecko_asc,market_cap_asc,market_cap_desc,volume_asc,volume_desc,id_asc,id_desc
            <option value="market_cap_desc">Market Cap Desc</option>
            <option value="market_cap_asc">Market Cap Asc</option>
            <option value="gecko_desc">Gecko Desc</option>
            <option value="gecko_asc">Gecko Asc</option>
            <option value="volume_desc">Volume Desc</option>
            <option value="volume_asc">Volume Asc</option>
            <option value="id_desc">ID Desc</option>
            <option value="id_asc">ID Asc</option>
          </select>
          {/* <img
            src={dropDownIcon}
            alt="submit"
            className="w-[1rem] h-auto absolute right-0.5 top-2 pointer-events-none hover:disabled"
          /> */}
        </label>
      </div>
    </div>
  );
};

export default Filters;
