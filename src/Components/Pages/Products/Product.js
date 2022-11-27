import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
// location, resale price, original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button.
const Product = ({ data, setInformation }) => {
  const { user } = useContext(AuthContext);
  const {
    product_name,
    posted_time,
    product_image,
    location,
    mobile_number,
    selling_Price,
    original_price,
    seller_name,
    year_of_uses,
  } = data;
  return (
    <div>
      <div className="card w-1/2 card-side bg-base-100 shadow-xl mx-auto items-center px-6">
        <figure className="w-2/4 p-1">
          <img src={product_image} alt="Laptop_Img" />
        </figure>

        <div className="card-body flex flex-row p-5">
          <div>
            <p className="py-5 text-xl font-semibold">
              {product_name.slice(0, 20)}
            </p>
            <p>Original Price: {original_price} Bdt</p>
            <p>
              Selling Price:{" "}
              <span className="text-red-600">{selling_Price}</span> Bdt
            </p>
            <p>Location: {location}</p>
            <p>Used For , {year_of_uses} years</p>
            <p>
              Seller Name: <span className="text-primary">{seller_name}</span>
            </p>
            <p>
              Seller Phone:{" "}
              <span className="text-primary">{mobile_number}</span>
            </p>
            <p>Posted On , {posted_time}</p>
          </div>
        </div>

        <label
          className="btn btn-primary"
          htmlFor="booking-modal"
          onClick={() => setInformation(data)}
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default Product;
