import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="subtitle">{title}</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
