import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Signin from "./Signin";
import Contactus from "./Contactus";

import { aboutus, contactus, home, signin, withimage } from "./routerConst";
import Layout from "./Layout";
import Withimage from "./Withimage";

const Routing = () => {
  return (
    <Layout>
      <Routes>
        <Route path={home} index element={<Home />} exact />
        <Route path={aboutus} element={<Aboutus />} />
        <Route path={signin} element={<Signin />} />
        <Route path={contactus} element={<Contactus />}/>
        <Route path={withimage} element={<Withimage />}/>
      </Routes>
    </Layout>
  );
};

export default Routing;
