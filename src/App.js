import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
