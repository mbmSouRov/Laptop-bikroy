import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import Product from "./Product";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://laptop-bikroy-server.vercel.app/allProducts/${user.email}`,
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
      {products.map((x) => (
        <Product key={x._id} data={x} refetch={refetch}></Product>
      ))}
    </div>
  );
};

export default MyProducts;
