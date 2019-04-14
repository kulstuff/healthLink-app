import React from "react";

var GnameStyle = {
  color: "#ff033f",
  fontFamily: "Roboto",
  fontSize: "13px",
  boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.161)",
  padding: "5px",
  borderRadius: "15px",
  fontWeight: "500"
};

function Gname(props) {
  return <div style={GnameStyle}>{props.guildname}</div>;
}

export default Gname;
