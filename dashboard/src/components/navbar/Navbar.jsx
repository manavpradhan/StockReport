import React from "react";
import "./navbar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InboxIcon from "@mui/icons-material/Inbox";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ isActive, toggleActive }) => {
  return (
    <nav className={`${isActive ? "navbar-active" : "navbar"}`}>
      <div className="closeBtn">
        <CloseIcon fontSize="large" onClick={toggleActive} />
      </div>
      <div className="navLinks">
        <div className="link">
          <DashboardIcon />
          <span>Dashboard</span>
        </div>
        <div className="link active">
          <AssessmentIcon />
          <span>Reports</span>
        </div>
        <div className="link">
          <InboxIcon />
          <span>Inbox</span>
        </div>
        <div className="link">
          <NotificationsActiveIcon />
          <span>Notifications</span>
        </div>
        <div className="link">
          <QuizIcon />
          <span>FAQ's</span>
        </div>
      </div>
      <div className="logout">
        <LogoutIcon />
        <span>Logout</span>
      </div>
    </nav>
  );
};

export default Navbar;
