import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import ToTop from "./Components/ToTop";
import Details from "./Pages/Details/Details";
import HomeProvider from "./Contexts/HomeContext";
import Sidebar from "./Components/Sidebar";
import { Wrapper } from "./Utilities/Utilities";

const Div = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.2px;
`;

function App() {
  return (
    <Div>
      <HomeProvider>
        <AnimatePresence>
          <Wrapper>
            <Header />
          </Wrapper>
          <Switch>
            <Route path="/details/:id" component={Details} />
            <Route path="/" component={Home} />
          </Switch>
          <Sidebar />
          <ToTop />
        </AnimatePresence>
      </HomeProvider>
    </Div>
  );
}

export default App;
