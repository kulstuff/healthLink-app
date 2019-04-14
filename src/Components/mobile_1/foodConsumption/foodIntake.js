import React from "react";

var Outbox = {
  background: "linear-gradient(168.44deg, #FF033f 64.39%, #ee7690 141.5%)",
  //   backgroundColor: "#ff033f",
  position: "absolute",
  right: "0%",
  width: "20%",
  height: "100%",
  display: "inline-block"
};

var Title = {
  color: "white",
  textAlign: "center",
  padding: "5px",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "18px"
};

var List = {
  color: "white",
  fontWeight: "300",
  fontFamily: "Roboto",
  fontSize: "15px",
  textAlign: "left",
  padding: "20px 5px 5px 5px"
};

function FoodIntake(props) {
  return (
    <div style={Outbox}>
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "50%",
          transform: "translate(0,-50%)",
          padding: "5px"
        }}
      >
        <div style={Title}>Recommended Food Intake</div>
        <hr
          style={{
            display: "block",
            marginTop: "3px",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            borderStyle: "inset",
            borderWidth: "1px"
          }}
        />
        <div style={List}>
          Calorie Intake
          <div
            style={{
              color: "white",
              height: "20px",
              width: "60px",
              textAlign: "center",
              top: "26%",
              left: "66%",
              position: "absolute"
            }}
          >
            {props.calo} g
          </div>
        </div>
        <div style={List}>
          Fat Intake
          <div
            style={{
              color: "white",
              height: "20px",
              width: "60px",
              textAlign: "center",
              top: "47%",
              left: "66%",
              position: "absolute"
            }}
          >
            {props.fat} g
          </div>
        </div>
        <div style={List}>
          Carbohydrates Intake
          <div
            style={{
              color: "white",
              height: "20px",
              width: "60px",
              textAlign: "center",
              top: "67%",
              left: "66%",
              position: "absolute"
            }}
          >
            {props.carbo} g
          </div>
        </div>
        <div style={List}>
          Fibre Intake
          <div
            style={{
              color: "white",
              height: "20px",
              width: "60px",
              textAlign: "center",
              top: "88%",
              left: "66%",
              position: "absolute"
            }}
          >
            {props.fib} g
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodIntake;
