import React from "react";
import { Link } from "react-router-dom";

var Home = {
  color: "white",
  textAlign: "center",
  display: "inline-block",
  padding: "5px 5px 5px 0px",
  fontSize: "30px",
  width: "33%",
  boxSizing: "border-box"
};

function BottomNav(props) {
  return (
    <div className="test">
      <Link to="/home">
        <i class="fas fa-home" style={Home} />
      </Link>
      <Link to="/guild">
        <i class="fas fa-user-friends" style={Home} />
      </Link>
      <Link to="/stats">
        <i class="fas fa-chart-area" style={Home} />
      </Link>
    </div>
  );
}

export default BottomNav;
