import React from "react";
import ProductCatagoryItem from "./ProductCatagoryItem";

const ProductCatagory = () => {
  const catagoryItems = [
    {
      id: 1,
      title: "Apple Laptops",
      brand: "apple",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/MGN73/macbook-mgn73Zp-a-1-500x500.jpg",
    },
    {
      id: 2,
      title: "HP Laptops",
      brand: "hp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-fq2644tu/15s-fq2644tu-07-500x500.jpg",
    },
    {
      id: 3,
      title: "Other Laptops",
      brand: "others",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/mi-laptop/redmibook-pro-14/redmibook-pro-14-01-500x500.jpg",
    },
  ];
  return (
    <div className="max-w-[1680px] mx-auto">
      <div className="my-20">
        <p className="text-xl lg:text-3xl text-primary font-semibold text-center uppercase">
          Product Catagory
        </p>
        <p className="text-2xl lg:text-4xl text-center my-5">
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
