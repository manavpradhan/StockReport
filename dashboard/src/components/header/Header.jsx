import React from "react";
import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>StockX</h1>
      </div>
      <div className="userInfo">
        <h3>Hi, John</h3>
        <AccountCircleIcon fontSize={"large"} zzz />
      </div>
    </header>
  );
};

export default Header;
