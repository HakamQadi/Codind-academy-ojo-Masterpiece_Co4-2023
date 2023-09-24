import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <ul
        style={{ backgroundColor: "#244459" }}
        className="navbar-nav sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-2">
            Speed
            <span style={{ color: "#fc2f70" }}>X</span> Admin
          </div>
        </a>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-users"></i>
            <span className="mx-2">Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/adduser">
            <i className="fas fa-fw fa-user-plus"></i>
            <span className="mx-2">Add Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view-orders">
            <i className="fas fa-fw fa-list"></i>
            <span className="mx-2">View Orders</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideNav;
