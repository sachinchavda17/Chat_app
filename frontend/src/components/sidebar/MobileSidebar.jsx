import React from "react";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
const MobileSidebar = () => {
  return (
    <div className="">
      <div className="drawer  z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <GiHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <Sidebar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
