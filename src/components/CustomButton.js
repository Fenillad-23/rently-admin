import React, { useState } from "react";

function CustomButton({   type="button" , className = "" ,onClick,children,}) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
export default CustomButton;