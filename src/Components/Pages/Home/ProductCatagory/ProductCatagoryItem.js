import React from "react";
import { Link } from "react-router-dom";

const ProductCatagoryItem = ({ data }) => {
  const { title, img, brand } = data;
  return (
    <Link to={`/products/${brand}`}>
      <div className="card w-60 mx-auto md:w-80 lg:w-80 bg-base-200 shadow-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-base-100 dark:hover:bg-base-200 transition-colors duration-300 cursor-pointer">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCatagoryItem;
