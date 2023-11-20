/* eslint-disable react/prop-types */
import { Divider } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

const Sidebar1 = ({ setSelectedMenu }) => {
  const [selectedMenu, setSelectedMenu1] = useState("pendingOrders");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setSelectedMenu1(menu);
  };

  return (
    <Sidebar>
      <Menu
        iconShape="square"
        style={{ border: "1px solid wheat", height: "77vh" }}
      >
        <MenuItem
          style={{
            backgroundColor: "#FF9F48",
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "18px",
            padding: "50px 0",
          }}
        >
          Admin Dashboard
        </MenuItem>
        <MenuItem
          style={{
            marginTop: "1px",
            fontFamily: "Roboto",
            fontSize: "18px",
            color: selectedMenu === "pendingOrders" ? "#fff" : "black",
            fontWeight: selectedMenu === "pendingOrders" ? "bold" : "",
            backgroundColor: selectedMenu === "pendingOrders" ? "#007A9B" : "",
            border: selectedMenu === "pendingOrders" ? "2px solid #FF9F48" : "",
          }}
          onClick={() => handleMenuClick("pendingOrders")}
          active={selectedMenu === "pendingOrders"}
        >
          Pending Orders
        </MenuItem>
        <Divider />
        <MenuItem
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: selectedMenu === "handleOrders" ? "#fff" : "black",
            fontWeight: selectedMenu === "handleOrders" ? "bold" : "",
            backgroundColor: selectedMenu === "handleOrders" ? "#007A9B" : "",
            border: selectedMenu === "handleOrders" ? "2px solid #FF9F48" : "",
          }}
          onClick={() => handleMenuClick("handleOrders")}
        >
          Manage Orders
        </MenuItem>
        <Divider />
        <MenuItem
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            color: selectedMenu === "handleUsers" ? "#fff" : "black",
            fontWeight: selectedMenu === "handleUsers" ? "bold" : "",
            backgroundColor: selectedMenu === "handleUsers" ? "#007A9B" : "",
            border: selectedMenu === "handleUsers" ? "2px solid #FF9F48" : "",
          }}
          onClick={() => handleMenuClick("handleUsers")}
        >
          Manage Users
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Sidebar1;
