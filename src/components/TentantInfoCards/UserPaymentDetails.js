import "../component.css";
import React, { useState, useEffect } from "react";
function UserPaymentDetails({ title, data }) {
  const [color, setColor] = useState("");
  const date = new Date();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentYear = date.getFullYear();
  useEffect(() => {
    if (data?.["Payment Status"] === "Payment Done") {
      setColor("#CFF7D3");
    } else {
      setColor("#FFF1C2");
    }
  }, [data]);
  return (
    <div className="user-rent-detail">
      <h2>{title}</h2>
      <div  className="user-rent-detail_inner">
      <p>
        <strong>Rent:</strong> {data?.["Rent Due"]}
      </p>
      <p>{currentMonth+""+currentYear}</p>
      </div>
      
      <div  className="payment-status">
        <p>
          <strong>Due Date:</strong> {data?.["Due Date"]}
        </p>
        <p
          style={{
            backgroundColor: color,
            color: "black",
            width: "auto",
            height:"auto",
            fontSize:10,
            borderRadius: "30px",
            padding: "4px",
          }}
        >
          {" "}
          {data?.["Payment Status"]}
        </p>
      </div>
    </div>
  );
}

export default UserPaymentDetails;
