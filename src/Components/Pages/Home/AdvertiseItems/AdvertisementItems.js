import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseItem from "./AdvertiseItem";

const AdvertisementItems = () => {
  const {
    data: allProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/allAdvertisedProducts`, {
          headers: {
            authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
          },
        });
        const data = await res.json();

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div className="max-w-[1680px] mx-auto">
      <p className="text-center text-4xl mb-5">Advertise Items</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {refetch() &&
          allProducts
            .slice(0, 3)
            .map((x) => <AdvertiseItem key={x._id} data={x}></AdvertiseItem>)}
      </div>
    </div>
  );
};

export default AdvertisementItems;
