import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/bootstrap.min.css";
import "./styles/main.css";
import "./styles/appNavigation.css";
import "./styles/updatorStyle.css";
import "./styles/topFixedNav.css";
import "./styles/homeDashboard.css";
import "./styles/animate.css";
import "./styles/fontawesome-free-5.12.1-web/css/font-awesome.min.css";

import TopNavigation from "./components/Navigation/TopNavigation/TopNavigation";
import SideNavigation from "./components/Navigation/SideNavigation/SideNavigation";
import HelpContainer from "./shared/HelpContainer/HelpContainer";
import MainLoading from "./components/MainLoading/MainLoading";
import Confirm from "./components/Confirm/Confirm";

// import Loading from './shared/Loading/Loading.js';
import Alert from "./shared/Alert/Alert.js";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./shared/PrivateRoute/PrivateRoute";
// backDrop
// import BackDrop from './shared/BackDrop/BackDrop.js';

// containners
import Dasboard from "./containers/Dashboard/Dashbard";
import AddIndicator from "./containers/AddIndicator/AddIndicator";
import AddPlan from "./containers/AddPlan/AddPlan.js";
import TargetMilleStone from "./containers/TargetMilleStone/TargetMilleStone";
import Complete from "./containers/Complete/Complete";
import Report from "./containers/Report/Report";
import Login from "./containers/Login/Login";
import CompleteProfile from "./components/CompleteProfile/CompleteProfile";
import Plans from "./containers/Plans/Plans";
import Outputs from "./containers/Outputs/Outputs";
import Indicators from "./containers/Indicators/Indicators";
// Redux
import { Provider } from "react-redux";
import store from "./store";

// user authentication
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

class App extends Component {
  componentDidMount = () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <MainLoading />

            <Confirm />

            <Alert />
            <TopNavigation />
            <SideNavigation />

            <div className="app-body-containner">
              <Switch>
                <Route exact path="/login" component={Login} />
                {/* <Route exact path="/dashboard" component={Dasboard} /> */}
                <PrivateRoute path="/dashboard" component={Dasboard} />

                <PrivateRoute
                  exact
                  path="/complete-profile"
                  component={CompleteProfile}
                />
                <PrivateRoute
                  exact
                  path="/add-indicator/:outputId"
                  component={AddIndicator}
                />
                <PrivateRoute exact path="/addplan" component={AddPlan} />
                <PrivateRoute
                  exact
                  path="/millestone"
                  component={TargetMilleStone}
                />
                <PrivateRoute exact path="/indicators" component={Indicators} />

                <PrivateRoute exact path="/complete" component={Complete} />
                <PrivateRoute exact path="/report" component={Report} />
                <PrivateRoute exact path="/plans" component={Plans} />
                <PrivateRoute exact path="/outputs" component={Outputs} />
                <Route component={NotFound} />
              </Switch>
            </div>
            {/* <NotFound /> */}
            <HelpContainer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
