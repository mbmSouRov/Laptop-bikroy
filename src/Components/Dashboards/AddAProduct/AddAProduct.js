import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddAProduct = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const handleAddProduct = (data, e) => {
    const productImg = data.Image[0];

    const formData = new FormData();

    formData.append("image", productImg);

    const url = `https://api.imgbb.com/1/upload?expiration=60000&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData) {
          const product = {
            seller_name: user.displayName,
            seller_email: user.email,
            product_name: data.ProductName,
            selling_Price: data.SellingPrice,
            mobile_number: data.MobileNumber,
            product_condition: data.ProductCondition,
            location: data.Location,
            product_description: data.ProductDescription,
            original_price: data.OriginalPrice,
            product_category: data.ProductCategory,
            product_image: imgData.data.url,
            year_of_purchase: format(startDate, "PP"),
            year_of_uses: parseInt(
              parseInt(format(new Date(), "y")) -
                parseInt(format(startDate, "y"))
            ),
            posted_time: format(new Date(), "PP"),
            status: "available",
          };

          fetch(`http://localhost:5000/allProducts`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              e.target.reset();
              toast.success("Product Added Successfully");
              fetch(`http://localhost:5000/laptops`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  authorization: `bearer ${localStorage.getItem(
                    `accessToken`
                  )}`,
                },
                body: JSON.stringify(product),
              })
                .then((res) => res.json())
                .then((data) => console.log(data));
              navigate("/dashboard/myProducts");
            });
        }
      });
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="flex justify-around">
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Product Name: </span>
                <input
                  type="text"
                  {...register("ProductName", {
                    required: "Name is Required",
                  })}
                  className="input input-bordered justify-end max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text pr-5">Selling Price: </span>
                <input
                  type="text"
                  {...register("SellingPrice", {
                    required: "Name is Required",
                  })}
                  className="input input-bordered justify-end max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Mobile Number: </span>
                <input
                  type="text"
                  {...register("MobileNumber", {
                    required: "Name is Required",
                  })}
                  className="input input-bordered justify-end max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Condition-Type: </span>
                <select
                  className="select select-bordered max-w-xs"
                  defaultValue={"Select Conditions"}
                  {...register("ProductCondition", {})}
                >
                  <option disabled defaultValue={"Select Conditions"}>
                    Select Conditions
                  </option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Upload-Image: </span>
                <input
                  type="file"
                  {...register("Image", {
                    required: "Image is Required",
                  })}
                  className="file-input file-input-bordered file-input-ghost justify-end w-28"
                />
              </label>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Location: </span>
                <input
                  type="text"
                  {...register("Location", {
                    required: "Name is Required",
                  })}
                  className="input input-bordered justify-end max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Description: </span>
                <input
                  type="text"
                  {...register("ProductDescription", {
                    required: "Name is Required",
                  })}
                  className="input input-bordered justify-end max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Original Price: </span>
                <input
                  type="text"
                  {...register("OriginalPrice", {
                    required: "Name is Required",
                  })}
                  className="input input-bordered justify-end max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Product Category: </span>
                <select
                  className="select select-bordered  max-w-xs"
                  defaultValue={"Select Category"}
                  {...register("ProductCategory", {})}
                >
                  <option disabled defaultValue={"Select Category"}>
                    Select Category
                  </option>
                  <option>apple</option>
                  <option>hp</option>
                  <option>others</option>
                </select>
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Year Of Purchase: </span>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </label>
            </div>
          </div>
        </div>
        <input
          className="btn btn-primary w-full max-w-xs mt-4 flex mx-auto"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
