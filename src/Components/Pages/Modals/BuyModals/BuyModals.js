import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";

const BuyModals = ({ information, setInformation }) => {
  const { title, resale_price } = information;
  const { user } = useContext(AuthContext);

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => {
              setInformation(null);
            }}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form
            // onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="Title"
              type="text"
              defaultValue={title.slice(0, 15)}
              disabled
              placeholder="Product Title"
              className="input w-full input-bordered"
            />
            <input
              name="resale_price"
              type="text"
              defaultValue={resale_price}
              disabled
              placeholder="Resale Price"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meetup Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyModals;
