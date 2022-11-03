import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Signin from "./Signin";
import { aboutus, home, signin } from "./routerConst";
import Layout from "./Layout";

const Routing = () => {
  return (
    <Layout>
      <Routes>
        <Route path={home} index element={<Home />} exact />
        <Route path={aboutus} element={<Aboutus />} />
        <Route path={signin} element={<Signin />} />
      </Routes>
    </Layout>
  );
};

export default Routing;
