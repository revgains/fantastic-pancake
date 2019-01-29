import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cabins from "./Cabins";
import Contact from "./Contact";
import NotFound from "./NotFound";

const Routing = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cabins" exact component={Cabins} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routing;
