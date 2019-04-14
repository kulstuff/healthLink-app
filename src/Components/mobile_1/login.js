import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div>
      <div className="BackC">
        <div className="Login">Login</div>
      </div>
      <div className=" InfoText" style={{ top: "34%", left: "23%" }}>
        Username :{props.uname}
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your email id"
            style={{
              border: "0"
            }}
          />
        </form>
      </div>
      <div className=" InfoText" style={{ top: "45%", left: "23%" }}>
        Password :{props.uname}
        <form>
          <input
            type="password"
            name="pass"
            style={{ border: "0" }}
            placeholder="Your password"
          />
        </form>
      </div>
      <button
        style={{
          position: "absolute",
          top: "58%",
          left: "29%",
          borderRadius: "15px",
          backgroundImage: "linear-gradient(60deg, #ee7690 50%, #f14e95)",
          border: "0",
          boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.161)",
          padding: "5px 50px",
          fontFamily: "Roboto",
          fontSize: "110%",
          color: "white"
        }}
      >
        <Link to="/home">Submit</Link>
      </button>
    </div>
  );
}

export default Login;
