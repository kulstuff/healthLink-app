import React, { Component } from "react";
import Dashboard from "./mobile_1/dash";
import SideBar from "./mobile_1/sidebar";
import BottomNav from "./mobile_1/bottomnav";
import Header from "./mobile_1/header";
import GuildButton from "./mobile_1/cardio";
import SideMat from "./mobile_1/sidemat";
import { Link } from "react-dom";
class MobileHome extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ position: "absolute", top: "22%", left: "38%" }}>
          <Dashboard />;
        </div>
        <div>
          <SideBar />;
        </div>
        <div>
          <SideMat style={{ position: "absolute", top: "33%", left: "7%" }} />
        </div>
        <div style={{ position: "absolute", top: "69%", left: "7%" }}>
          <GuildButton />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default MobileHome;
