import React from "react";
import toast from "react-hot-toast";

const ReportedItem = ({ data }) => {
  const { product_name, product_image, seller_name } = data;
  const setDeletingProduct = (name) => {
    fetch(`http://localhost:5000/reportedProducts/${name}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          fetch(`http://localhost:5000/laptops/${name}`, {
            method: "DELETE",
            headers: {
              authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                fetch(`http://localhost:5000/allProducts/${name}`, {
                  method: "DELETE",
                  headers: {
                    authorization: `bearer ${localStorage.getItem(
                      `accesstoken`
                    )}`,
                  },
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.deletedCount > 0) {
                      toast.success(`Deleted ${name} successfully`);
                    }
                  });
              }
            });
        }
      });
  };
  return (
    <div className="card card-side bg-base-300 shadow-xl m-5">
      <figure>
        <img className="w-60 h-60 p-10" src={product_image} alt="Movie" />
      </figure>

      <div className="card-body">
        <h2 className="text-3xl font-semibold">{product_name}</h2>
        <div className="flex justify-between">
          <div className="mt-5">
            <p className="text-xl my-1">Seller Name :{seller_name}</p>
          </div>
          <div className="flex flex-col gap-5">
            <label
              className="btn btn-error"
              onClick={() => {
                setDeletingProduct(product_name);
              }}
              htmlFor="confirmation-modal"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedItem;
