import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import OrderdItems from "./OrderdItems";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://laptop-bikroy-server.vercel.app/booking/${user.email}`,
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
    <div className="p-2 lg:p-10">
      <p>This is my order page</p>

      {products.map((x) => (
        <OrderdItems key={x._id} data={x}></OrderdItems>
      ))}
    </div>
  );
};

export default MyOrders;
