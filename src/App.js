import "./App.css";
import { matchPath, Route, Switch } from "react-router-dom";
import HomeProvider from "./Contexts/HomeContext";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import ToTop from "./Components/ToTop/ToTop";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <div className="App">
      <HomeProvider>
        <Header />
        <Switch>
          <Route path="/details/:id" component={Details} />
          <Route path="/" component={Home} />
        </Switch>
        <Sidebar />
        <ToTop />
      </HomeProvider>
    </div>
  );
}

export default App;
