import React, { useEffect, useState } from "react";
import DashboardSide from "../components/DashboardSide";
import DashboardProfile from "../components/DashboardProfile";
import { useLocation } from "react-router-dom";
import DashboardAdd from "../components/DashboardAdd";
import DashboardOrder from "../components/DashboardOrder";
import DashboardList from "../components/DashboardList";
import DashboardSumm from "../components/DashboardSumm";
import DashAllorders from "../components/DashAllorders";

const Dashboard = () => {
  const [tab, setTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  });
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="sidebar w-full md:w-56">
          <DashboardSide />
        </div>
        {/* dashboard right part */}
        <div className="right w-full">
          {tab === "dash" && <DashboardSumm />}
          {tab === "profile" && <DashboardProfile />}
          {tab === "add-food" && <DashboardAdd />}
          {tab === "user-list" && <DashboardOrder />}
          {tab === "food-list" && <DashboardList />}
          {tab === "all-order" && <DashAllorders />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
