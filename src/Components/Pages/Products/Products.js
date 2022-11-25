import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BuyModals from "../Modals/BuyModals/BuyModals";
import Product from "./Product";

const Products = () => {
  const datas = useLoaderData();
  const [information, setInformation] = useState(null);
  console.log(information);
  return (
    <div className="my-10">
      <section className="grid grid-cols-1 gap-10">
        {datas.map((x) => (
          <Product
            key={x._id}
            data={x}
            setInformation={setInformation}
          ></Product>
        ))}
      </section>

      {information && (
        <BuyModals
          information={information}
          setInformation={setInformation}
        ></BuyModals>
      )}
    </div>
  );
};

export default Products;
