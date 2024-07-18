import React, { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCoin from "../components/TrendingCoin";

const Trending = () => {
  const { trendData } = useContext(TrendingContext);
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative scrollbar-none">
      <div className="flex flex-wrap justify-evenly w-full min-h-[60vh] py-8 mt-9 border border-gray-100 rounded">
        {trendData &&
          trendData.map((coin) => (
            <TrendingCoin key={coin.item.coin_id} data={coin.item} />
          ))}
      </div>
    </section>
  );
};

export default Trending;
