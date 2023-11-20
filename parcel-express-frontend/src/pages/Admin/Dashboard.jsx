import React, { useState } from "react";
import Sidebar1 from "../../components/Sidebar";
import HandleOrders from "./HandleOrders";
import HandleUsers from "./HandleUsers";
import PendingOrders from "./PendingOrders";
const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("pendingOrders");

  const renderComponent = () => {
    switch (selectedMenu) {
      case "pendingOrders":
        return <PendingOrders />;
      case "handleOrders":
        return <HandleOrders />;
      case "handleUsers":
        return <HandleUsers />;
      default:
        return null;
    }
  };
  return (
    <div style={{ minHeight: "80vh", backgroundColor: "#ECFBFE" }}>
      <div style={{ display: "flex" }}>
        <Sidebar1 setSelectedMenu={setSelectedMenu} />
        <div style={{ marginLeft: "80px", padding: "20px", width: "80%" }}>
          {renderComponent()}
          {/* <PendingOrders /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
