import { Switch, Route } from "react-router";
import Home from "../../views/Home";
import ProductDetail from "../../views/ProductDetail";
import ProductsList from "../../views/ProductsList.jsx";

const RouterSwitch = () => {
    return (
        <Switch>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
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