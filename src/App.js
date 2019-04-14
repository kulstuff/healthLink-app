import React, { Component } from "react"; // React and Frameworks
//import "./styles/sass/main.scss"; // Stylesheet (Import only Static Stylesheets here)
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./Components/Home";
//import DashBoard from "./Components/DashBoard.js";
// import Chart from "./Components/generateHealthReport/Graph";
//import SimpleSelect from "./Components/generateHealthReport/Menu";
// Apollo Setup
//import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "react-apollo";
// import Box from "./Components/dashboard/Stats";
// import BottomNav from "./Components/mobile_1/bottomnav";
// import Header from "./Components/mobile_1/header";
// import GuildButton from "./Components/mobile_1/cardio";
import "./Components/mobile_1/style.scss";
// import SideBar from "./Components/mobile_1/sidebar";
// import Dashboard from "./Components/mobile_1/dash";
// import SimpleExpansionPanel from "./Components/mobile_1/guild/accordian";
// import SelectMenu from "./Components/generateHealthReport/Menu";
// import FoodIntake from "./Components/mobile_1/foodConsumption/foodIntake";
import FoodEnter from "./Components/mobile_1/mob_2/enterFood";
import Login from "./Components/mobile_1/login";
import ControlledExpansionPanel from "./Components/mobile_1/guild/accordian";
// import Gname from "./Components/guildname";
// import SideMat from "./Components/mobile_1/sidemat";
// Apollo Setup ( GraphQL Client )
// const client = new ApolloClient({
//   uri: "http://localhost:5050/graphql"
// });

// import './Styles/materialize.min.scss'  // Stylesheet (Import only Static Stylesheets here)
import MobileHome from "./Components/mobileHome";
const testStyle = {
  // width: "80%",
  // position: "absolute",
  // left: "50%",
  // top: "50%",
  // transform: "translate(-50%,-50%)"
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="main-content">
          <Switch>
            <Route exact path="/home" component={MobileHome} />
            <Route exact path="/" component={Login} />
            <Route exact path="/guild" component={ControlledExpansionPanel} />
            <Route exact path="/stats" component={FoodEnter} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
