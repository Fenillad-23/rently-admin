import React, { useState } from "react";
import "../component.css";
function UserServicesInfo({ title, data }) {
  return (
    <div className="service-info-container">
      {
        <>
          <div>
          
            <div  className="service-info-inner">
            <h2>{title}</h2>
                <div>Resolved:</div>
                <strong>{data?.["Resolved"]}</strong>
            </div>
            <div className="service-info-inner">
            
                <div>Pending:</div>
                <strong>{data?.["Pending"]}</strong>     
            </div>
          </div>
        </>
      }
      <div className="service-info-inner-count">
             <p>{data?.["Total Count"]}</p> 
          </div>
    </div>
  );
}
export default UserServicesInfo;
