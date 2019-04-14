import React from "react";
import { Link } from "react-router-dom";
function GuildButton(props) {
  return (
    <div>
      <Link to="/guild">
        <div className="guildButton">
          {/* {props.guildName} */}
          CardioCRUX
          <img
            src="./src/Components/mobile_1/guild.jpg"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "120px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
        </div>
      </Link>
    </div>
  );
}

export default GuildButton;
