import React from "react";
import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>StatsX</h1>
      </div>
      <div className="userInfo">
        <h4>Hi, John</h4>
        <AccountCircleIcon fontSize={"large"} />
      </div>
    </header>
  );
};

export default Header;
