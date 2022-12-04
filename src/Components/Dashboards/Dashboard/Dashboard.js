import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-10 lg:p-20">
      <p className="text-3xl lg:text-7xl">Hello, {user.displayName}</p>
    </div>
  );
};

export default Dashboard;
