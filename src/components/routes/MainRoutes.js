import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
  Redirect,
} from "react-router-dom";
import Home from "../pages/public/home";
import Subscription from "../pages/public/Subscription";
import { connect } from "react-redux";
import Payment from "../pages/public/Payment";


const ScrollToTop = () => {
    const history = useHistory();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [history.location.pathname]);
  
    return null;
};
  
const ResetScroll = withRouter(ScrollToTop);

const MainRoutes = ({ user }) => {

return (
    <Router>
    <ResetScroll />
    <Switch>
        <Route exact path="/">
        <Redirect to={`/home`} />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/subscription" component={Subscription} />
        <Route exact path="/payment" component={Payment} />
        <Route path="*">
        </Route>
    </Switch>
    </Router>
);
};

export default connect()(MainRoutes);
  