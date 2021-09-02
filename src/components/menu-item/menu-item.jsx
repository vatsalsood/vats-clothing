import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <div className="subtitle">Jackets</div>
    </div>
  </div>
);

export default MenuItem;
