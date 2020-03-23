import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './assets/bootstrap.min.css';
// import './styles/main.css';
// import './styles/appNavigation.css';
// import './styles/updatorStyle.css';
// import './styles/topFixedNav.css';
// import './styles/homeDashboard.css';
// import './styles/animate.css';

// import TopNavigation from './components/Navigation/TopNavigation/TopNavigation';
// import SideNavigation from './components/Navigation/SideNavigation/SideNavigation';
// import HelpContainer from './shared/HelpContainer/HelpContainer';

// // import Loading from './shared/Loading/Loading.js';
// import Alert from './shared/Alert/Alert.js'
// import NotFound from './components/NotFound/NotFound';

// // backDrop
// // import BackDrop from './shared/BackDrop/BackDrop.js';

// // containners
// import Dasboard from './containers/Dashboard/Dashbard';
// import AddIndicator from './containers/AddIndicator/AddIndicator';
// import AddPlan from './containers/AddPlan/AddPlan.js';
// import TargetMilleStone from './containers/TargetMilleStone/TargetMilleStone';
// import Complete from './containers/Complete/Complete'
// import Report from './containers/Report/Report'

import ContextTest from './test/Context';

class App extends Component  {

  render() {

  //   return (
  //     <Router>

  //     <React.Fragment>
  //       {/* <Loading/> */}
  //       {/* <BackDrop/> */}
  //       <Alert/>
  //       <TopNavigation />
  //       <SideNavigation />

  //         <div className="app-body-containner">
  //         <Switch>

  //         <Route exact path="/dashboard" component={Dasboard} />
  //         <Route exact path="/addindicator" component={AddIndicator} />
  //         <Route exact path="/addplan" component={AddPlan} />
  //         <Route exact path="/millestone" component={TargetMilleStone} />
  //         <Route exact path="/complete" component={Complete} />
  //         <Route exact path="/report" component={Report} />

  //         <Route component={NotFound} />
  //         </Switch>
  //         </div>
  //         {/* <NotFound /> */}
  //         <HelpContainer/>
  //     </React.Fragment>
  //     </Router>
  // );

  return (
    <ContextTest />
  )
}
}

export default App;
