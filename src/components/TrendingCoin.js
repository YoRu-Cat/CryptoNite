import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();
  const getCoinDetails = (id) => {
    navigate(id);
  };
  return (
    <div
      className="lg:w-[40%] sm:w-[60%] w-[80%] bg-gray-200 md:mb-14 lg:mb-20 mb-12  
  last:mb-0 rounded-lg p-4 relative cursor-pointer
  hover:bg-gray-300 hover:bg-opacity-40
  "
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <h3 className="text-base flex items-center my-0.5">
            <span className="capitalize text-gray-100 ">name :&nbsp;</span>
            <span className="text-cyan">{data.name}</span>
            <img
              className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
              src={data.small}
              alt={data.name}
            />
          </h3>
          <h3 className="text-base flex items-center my-0.5">
            <span className="capitalize text-gray-100 ">
              market cap rank :&nbsp;
            </span>
            <span className="text-cyan">{data.market_cap_rank}</span>
          </h3>
          <h3 className="text-base flex items-center my-0.5">
            <span className="capitalize text-gray-100 ">
              price (in btc) :&nbsp;
            </span>
            <span className="text-cyan">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>
          <h3 className="text-base flex items-center my-0.5">
            <span className="capitalize text-gray-100 ">score :&nbsp;</span>
            <span className="text-cyan">{data.score}</span>
          </h3>
          <img
            className="absolute lg:top-2/4 top-4 lg:-right-12 -right-6 -translate-y-2/4 lg:w-[35%] w-[5rem] h-auto rounded-full"
            src={data.large}
            alt={data.name}
          />
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
            role="status"
          />
          <span className="ml-2">Please Wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
