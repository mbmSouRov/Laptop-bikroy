import React from "react";
import { useForm } from "react-hook-form";

const AddAProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleAddProduct = (data, e) => {
    console.log(data);
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
                  <option disabled defaultValue={"Select Category"}></option>
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
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is Required",
                  })}
                  className="input input-bordered justify-end max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
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
