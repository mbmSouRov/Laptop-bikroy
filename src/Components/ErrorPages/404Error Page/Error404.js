import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import errorBanner from "../../../assests/36395-lonely-404.json";
const Error404 = () => {
  return (
    <section className="flex flex-col items-center h-full p-10 dark:bg-secondary">
      <div className="container flex flex-col justify-center px-10 mx-auto">
        <div className="w-full lg:w-3/5 mx-auto sm:h-96">
          <Lottie animationData={errorBanner} loop={true} />
        </div>
      </div>
      <div className="text-center">
        <p className="text-6xl font-semibold my-2 text-white">Opps!</p>
        <p className="text-xl font-light my-2 text-white">
          The Page you are looking for might have removed or it is temporarily
          unavaiable!
        </p>
        <Link to={"/"} className="btn btn-primary uppercase my-2">
          go to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error404;
