import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import ConfirmationModal from "./ConfimationModal";

const Product = ({ data, refetch }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    product_name,
    product_description,
    selling_Price,
    product_image,
    status,
  } = data;
  const [deletingProduct, setDeletingProduct] = useState(null);
  const closeModal = () => {
    setDeletingProduct(null);
  };
  const handleDeleteProduct = (product) => {
    fetch(
      `https://laptop-bikroy-server.vercel.app/allProducts/${user.email}/${_id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product ${product_name} deleted successfully`);

          fetch(
            `https://laptop-bikroy-server.vercel.app/allAdvertisedProducts/${product_name}`,
            {
              method: "DELETE",
              headers: {
                authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log("Also Deleted From Advertisement");
              }
            });
        }
      });
  };
  const HandleAdvertiseBtn = () => {
    console.log("ggwp");
    fetch(`https://laptop-bikroy-server.vercel.app/allAdvertisedProducts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        fetch(
          `https://laptop-bikroy-server.vercel.app/allProducts/${user.email}/${_id}`,
          {
            method: "PUT",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              toast.success("Product Advertised");
              refetch();
            }
          });
      });
  };

  // .................................
  return (
    <div className="card card-side bg-base-300 shadow-xl m-5 flex flex-col lg:flex-row">
      <figure>
        <img className="w-60 h-60 p-10" src={product_image} alt="Movie" />
      </figure>

      <div className="card-body">
        <h2 className="text-3xl font-semibold">{product_name}</h2>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="mt-5">
            <p className="text-xl my-1">Description :{product_description}</p>
            <p className="text-xl my-1">Selling Price: {selling_Price}</p>
            <p className="text-xl my-1">Selling Status: {status}</p>
          </div>
          <div className="flex flex-col gap-5">
            {status === `available` && (
              <button className="btn btn-primary" onClick={HandleAdvertiseBtn}>
                Advertise
              </button>
            )}
            {status === `advertised` && (
              <button className="btn btn-bg-primary-content disabled">
                Advertised
              </button>
            )}
            <label
              className="btn btn-error"
              onClick={() => {
                setDeletingProduct(data);
              }}
              htmlFor="confirmation-modal"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          key={_id}
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingProduct.product_name}. It cannot be undone.`}
          successAction={handleDeleteProduct}
          successButtonName="Delete"
          modalData={deletingProduct}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Product;
