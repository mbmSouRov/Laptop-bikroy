import Lottie from "lottie-react";
import React from "react";
import bannerLaptop from "../../../../assests/laptop.json";

const Banner = () => {
  return (
    <div className="hero bg-base-100 max-w-[1680px] mx-auto my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96">
          <Lottie animationData={bannerLaptop} loop={true} />
        </div>
        <div>
          <h1 className="text-6xl font-bold mt-10 lg:mt-0 text-secondary">
            <span className="text-7xl text-primary-content ">Sell/Buy</span>{" "}
            Used Laptop Here!
          </h1>
          <p className="py-6 text-xl">
            Laptop Bikroy is a online platform where you can buy or sell any
            kind of used laptops.There are currently three category for
            servicing our customers.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
