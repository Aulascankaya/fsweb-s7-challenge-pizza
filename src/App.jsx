
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Success from "./components/Success";
import "./components/Component.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
      <Footer />
    </BrowserRouter>
  );
}
//commit test
let test;
export default App;
