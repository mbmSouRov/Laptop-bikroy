import React from "react";
// location, resale price, original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button.
const Product = ({ data }) => {
  const {
    title,
    brand,
    img,
    location,
    resale_price,
    original_price,
    posted_time,
    seller_name,
  } = data;
  return (
    <div>
      <div className="card w-max card-side bg-base-100 shadow-xl mx-auto items-center px-6">
        <figure className="w-1/4 p-1">
          <img src={img} alt="Laptop_Img" />
        </figure>

        <div className="card-body flex flex-row p-5">
          <div>
            <p className="py-5 text-xl font-semibold">{title.slice(0, 20)}</p>
            <p>Original Price: {original_price} Bdt</p>
            <p>
              Selling Price:{" "}
              <span className="text-red-600">{resale_price}</span> Bdt
            </p>
            <p>Location: {location}</p>
            <p>Posted On , {posted_time}</p>
            <p>
              Seller Name: <span className="text-primary">{seller_name}</span>
            </p>
          </div>
        </div>

        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
