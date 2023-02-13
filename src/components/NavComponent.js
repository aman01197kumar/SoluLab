import React from "react";
import zigzag from "../assets/zigzag.png";
function NavComponent() {
  return (
    <div className="navBarContent">
      <img src={zigzag} alt="" className="zigzagBox" />
      <i class="fa fa-plus" id="iconContent">
        <span className="iconText">New</span>
      </i>
      <i class="fas fa-user-alt" id="iconContent">
        <span className="iconText">Patient</span>
      </i>
      <i class="fa fa-folder" id="iconContent">
        <span className="iconText">Folder</span>
      </i>
      <i class="fa fa-upload" id="iconContent">
        <span className="iconText">Upload</span>
      </i>
      <i class="fa fa-files-o" id="iconContent">
        <span className="iconText">Report</span>
      </i>
      <i class="fa fa-gear" id="iconContent">
        <span className="iconText">Settings</span>
      </i>
      <i class="fa fa-power-off" id="iconContent">
        <span className="iconText">Logout</span>
      </i>
    </div>
  );
}

export default NavComponent;
