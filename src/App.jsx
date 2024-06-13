
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Success from "./components/Success";
import "./components/Component.css"
import "./App.css"

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orderForm">
          <OrderForm />
        </Route>
        <Route path="/orderSuccess">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
