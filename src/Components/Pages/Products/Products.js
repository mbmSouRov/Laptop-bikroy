import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const datas = useLoaderData();

  return (
    <div className="my-10">
      <section className="grid grid-cols-1 gap-10">
        {datas.map((x) => (
          <Product key={x._id} data={x}></Product>
        ))}
      </section>
    </div>
  );
};

export default Products;
