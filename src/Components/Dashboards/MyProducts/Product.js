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
    fetch(`http://localhost:5000/allProducts/${user.email}/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product ${product_name} deleted successfully`);
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
            <p className="text-xl my-1">Description :{product_description}</p>
            <p className="text-xl my-1">Selling Price: {selling_Price}</p>
            <p className="text-xl my-1">Selling Status: {status}</p>
          </div>
          <div className="flex flex-col gap-5">
            <button className="btn btn-primary">Advertise</button>
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
