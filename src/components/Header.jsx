import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <ul className="nav header">
      <h2>Clicky Game</h2>
      <span>
        Score:<span style={{ color: "green" }}>{props.curScore}</span>{" "}
        --------------------------- Top Score:{" "}
        <span style={{ color: "red" }}>{props.topScore}</span>
      </span>
    </ul>
  </div>
);

export default Header;
