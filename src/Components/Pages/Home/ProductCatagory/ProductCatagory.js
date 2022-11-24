import React from "react";
import ProductCatagoryItem from "./ProductCatagoryItem";

const ProductCatagory = () => {
  const catagoryItems = [
    {
      id: 1,
      title: "High Price Range",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: "https://static-01.daraz.com.bd/p/4f6151930517fbad281ed03293eb3d84.jpg",
    },
    {
      id: 2,
      title: "Midium Price Range",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: "https://static-01.daraz.com.bd/p/4f6151930517fbad281ed03293eb3d84.jpg",
    },
    {
      id: 3,
      title: "Low Price Range",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: "https://static-01.daraz.com.bd/p/4f6151930517fbad281ed03293eb3d84.jpg",
    },
  ];
  return (
    <div className="max-w-[1680px] mx-auto">
      <div className="my-20">
        <p className="text-3xl text-primary font-semibold text-center uppercase">
          Product Catagory
        </p>
        <p className="text-4xl text-center my-5">
          We Provide These type of catagory
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 mt-5 lg:my-10 gap-2">
        {catagoryItems.map((x) => (
          <ProductCatagoryItem key={x.id} data={x}></ProductCatagoryItem>
        ))}
      </div>
    </div>
  );
};

export default ProductCatagory;
