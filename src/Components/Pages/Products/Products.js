import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const datas = useLoaderData();

  return (
    <div>
      <p>This is products page</p>

      <p> {datas.length}</p>
    </div>
  );
};

export default Products;
