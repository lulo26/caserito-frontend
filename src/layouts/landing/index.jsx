import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";

//import "../../index.css"
import logo from "assets/img/layout/logo.jpg"

import {HomePage} from '../../views/landing'

export default function LandingLayout() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <Routes>
      {getRoutes(routes)}
        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />
      {/*<Route path="/home" component={HomePage} />*/}
    </Routes>

  );
}
