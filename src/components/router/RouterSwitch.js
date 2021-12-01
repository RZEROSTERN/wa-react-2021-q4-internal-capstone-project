import { Switch, Route } from "react-router";
import Home from "../../views/Home";
import ProductsList from "../../views/ProductsList";

const RouterSwitch = () => {
    return (
        <Switch>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    );
};

export default RouterSwitch;