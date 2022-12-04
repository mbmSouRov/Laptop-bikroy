import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading/Loading";
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
        const res = await fetch(
          `https://laptop-bikroy-server.vercel.app/allAdvertisedProducts`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
            },
          }
        );
        const data = await res.json();

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
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
