import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import ReportedItem from "./ReportedItem";

const ReportedProduct = () => {
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
          `https://laptop-bikroy-server.vercel.app/reportedProducts`,
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
    <div className="p-10">
      {products.map(
        (x) => refetch() && <ReportedItem key={x._id} data={x}></ReportedItem>
      )}
    </div>
  );
};

export default ReportedProduct;
