import React from "react";
import AdvertisementItems from "./AdvertiseItems/AdvertisementItems";
import Banner from "./Banner/Banner";
import ProductCatagory from "./ProductCatagory/ProductCatagory";
import SubscribeSection from "./SubscribeSection/SubscribeSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisementItems></AdvertisementItems>
      <ProductCatagory></ProductCatagory>
      <SubscribeSection></SubscribeSection>
    </div>
  );
};

export default Home;
