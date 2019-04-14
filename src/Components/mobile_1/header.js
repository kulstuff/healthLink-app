import React from "react";

function Header(props) {
  return (
    <div>
      <div className="Box">
        Health Link
        <div className="Namestyle">Aditya</div>
        <div className="Tagstyle">Marathon Master</div>
        <i class="fas fa-user iconStyle" />
        <div className="ProgBar1">
          <div className="ProgBar2" />
          <div
            className="ProgBar3"
            style={{ width: props.dailyCompletition * 0.75 + "%" }}
          />
        </div>
        <i class="fas fa-mobile-alt Devicestyle" />
        <div className="SyncDevices">Synced Devices</div>
        <div className="SyncName">Pixel 3, OnePlus 6</div>
      </div>
    </div>
  );
}

export default Header;
