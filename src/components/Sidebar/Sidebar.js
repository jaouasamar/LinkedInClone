import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
const recentItem = (topic) => (
  <div className="sidebar_recentItem">
    <GroupSharpIcon className="sidebar_hash" />
    {/* <span className="sidebar_hash">#</span> */}
    <p>{topic}</p>
  </div>
);

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://th.bing.com/th/id/OIP.ICKa5ob_yGFcpkekZHP2DwHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7"
          alt="background"
        />
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-KR6edMPNgONwMmebV9VKjVxFmidDYu2Zg&usqp=CAU"
          className="sidebar_avatar"
        />
        <h2>Samar Jaoua</h2>
        <h4>Junior Full stack developper</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statNumber">126</p>
        </div>
        <div className="sidebar_stat">
          <p>Views of your post</p>
          <p className="sidebar_statNumber">67</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("programming")}
        {recentItem("jobs")}
        {recentItem("fintech")}
        {recentItem("spaceX")}
        {recentItem("MongoDB")}
        <h4>Followed Hastags</h4>
        {recentItem("nodejs")}
        {recentItem("reactjs")}
        {recentItem("developer")}
        {recentItem("business")}
        {recentItem("tech")}
      </div>
    </div>
  );
}

export default Sidebar;
