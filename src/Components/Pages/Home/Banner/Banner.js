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
          <h1 className="text-5xl font-bold mt-10 lg:mt-0 text-secondary">
            Box Office News!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
