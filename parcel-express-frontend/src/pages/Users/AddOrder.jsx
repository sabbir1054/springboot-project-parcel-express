import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderForm from "../../components/OrderFrom";
import { notification } from "../../utils/notification";

const AddOrder = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const navigate = useNavigate();

  const postData = (data) => {
    fetch(
      `http://localhost:8080/api/submitOrder?userNumber=${user?.number}&userName=${user?.name}&pickUpAddress=${data?.pickUpAddress}&deliveryAddress=${data?.deliveryAddress}&productName=${data?.productName}&productPrice=${data?.productPrice}&productQuantity=${data?.productQuantity}&customer_name=${data?.customer_name}&customerContact=${data?.customerContact}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data?.message === "order submitted successfully") {
          notification("Something went wrong ! ", "", "error");
        } else {
          navigate("/new-order/payment");
        }
      });
  };

  const handleOrderSubmit = (data) => {
    // Handle the order submission logic here
    console.log("Submitted Order:", data);
    postData(data);
  };
  return (
    <div style={{ minHeight: "70vh", backgroundColor: "#ECFBFE" }}>
      <div style={{ padding: "10vh 0" }}>
        <OrderForm onSubmit={handleOrderSubmit} />
      </div>
    </div>
  );
};

export default AddOrder;
