import React from "react";
import WelcomeBanner from "@/components/sections/WelcomeBanner";
import BestServices from "@/components/sections/BestServices";
import PriceCardGrid from "@/components/sections/PriceCardsGrid";
import BestDeals from "@/components/sections/BestDeals";
import Download from "@/components/sections/Download";

const Homepage = () => {
  return (
    <div className="flex flex-col w-full items-center">
      
      <WelcomeBanner/>
      <BestServices/>
      <PriceCardGrid/>
      <BestDeals/>
      <Download/>

    </div>
  )
}

export default Homepage;