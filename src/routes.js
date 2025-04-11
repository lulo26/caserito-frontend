import React from "react";

// Admin Imports
//import MainDashboard from "views/admin/default";
import Home from "views/admin/home";
import Productos from "views/admin/productos";
import Ventas from "views/admin/ventas";
import Usuarios from "views/admin/usuarios";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Página principal",
    layout: "/admin",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  {
    name: "Productos",
    layout: "/admin",
    path: "productos",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Productos />,
    secondary: true,
  },
  {
    name: "Usuarios",
    layout: "/admin",
    icon: <MdPerson className="h-6 w-6" />,
    path: "usuarios",
    component: <Usuarios />,
  },
  {
    name: "Ventas",
    layout: "/admin",
    path: "ventas",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <Ventas />,
  },
  {
    name: "Cerrar sesión",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
