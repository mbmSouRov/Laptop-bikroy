import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import useUser from "../hooks/useUser";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isUser] = useUser(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <Link
              className="text-secondary text-xl font-semibold text-center my-5"
              to="/dashboard"
            >
              <li>Dashboard</li>
            </Link>
            {isUser && (
              <>
                <li>
                  <Link
                    className="btn btn-secondary text-white"
                    to="/dashboard/myOrders"
                  >
                    My Orders
                  </Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link
                    className="btn btn-secondary text-white my-2"
                    to="/dashboard/addAProduct"
                  >
                    Add A Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-secondary text-white my-2"
                    to="/dashboard/myProducts"
                  >
                    My Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-secondary text-white my-2"
                    to="/dashboard/myBuyers"
                  >
                    My Buyers
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link
                    className="btn btn-secondary text-white my-2"
                    to="/dashboard/allSellers"
                  >
                    All Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-secondary text-white my-2"
                    to="/dashboard/allBuyers"
                  >
                    All Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-secondary text-white my-2"
                    to="/dashboard/reportedItems"
                  >
                    Reported Items
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
