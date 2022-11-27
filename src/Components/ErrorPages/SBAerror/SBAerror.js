import React from "react";
import errorBanner from "../../../assests/err.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const SBAerror = () => {
  return (
    <section className="flex flex-col items-center h-full p-10 dark:bg-secondary">
      <div className="container flex flex-col justify-center px-10 mx-auto">
        <div className="w-full lg:w-2/5 mx-auto sm:h-96">
          <Lottie animationData={errorBanner} loop={true} />
        </div>
      </div>
      <div className="text-center">
        <p className="text-6xl font-semibold my-2 text-white">???</p>
        <p className="text-xl font-light my-2 text-white">
          You Are Not Allow To VISIT This Route
        </p>
        <Link to={"/"} className="btn btn-primary uppercase my-2">
          go to homepage
        </Link>
      </div>
    </section>
  );
};

export default SBAerror;
