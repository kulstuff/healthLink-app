import React from "react";
import BottomNav from "../bottomnav";

function FoodEnter(props) {
  const steps = 1000;

  return (
    <div>
      <div className="CalBox">Know Your Stats!</div>
      <div className="FoodText">Steps traversed : {steps} </div>

      <i
        class="fas fa-shoe-prints"
        style={{
          position: "absolute",
          top: "22.5%",
          left: "85%",
          fontSize: "20px"
        }}
      />
      <div className="FoodText">Calories burnt : {steps * 0.04}</div>

      <i
        class="fas fa-utensils"
        style={{
          position: "absolute",
          top: "29.5%",
          left: "85%",
          fontSize: "20px"
        }}
      />
      <div className="FoodText">Water consumed : 7 glasses </div>

      <i
        class="fas fa-glass-whiskey"
        style={{
          position: "absolute",
          top: "36.5%",
          left: "85%",
          fontSize: "20px"
        }}
      />
      <div className="FoodText">Hours slept : 1 Hour</div>

      <i
        class="fas fa-bed"
        style={{
          position: "absolute",
          top: "43.5%",
          left: "85%",
          fontSize: "20px"
        }}
      />
      <div className="FoodText">Kiosk visits : 2 </div>

      <i
        class="fas fa-walking"
        style={{
          position: "absolute",
          top: "50.5%",
          left: "85%",
          fontSize: "20px"
        }}
      />
      <BottomNav />
    </div>
  );
}

export default FoodEnter;
