import { Switch, Route } from "react-router";
import Cart from "../../views/Cart";
import Home from "../../views/Home";
import ProductDetail from "../../views/ProductDetail";
import ProductsList from "../../views/ProductsList.jsx";
import SearchResults from "../../views/SearchResults";

const RouterSwitch = () => {
    return (
        <Switch>
          <Route path="/search/:searchTerm" component={SearchResults} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/products/:page" component={ProductsList} />
          <Route path="/products" component={ProductsList} />
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
    );
};

export default RouterSwitch;