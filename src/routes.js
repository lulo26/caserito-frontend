import React from "react";

// Admin Imports
//import MainDashboard from "views/admin/default";
import Home from "views/admin/home";
import Productos from "views/admin/productos";
import Ventas from "views/admin/ventas";
import Usuarios from "views/admin/usuarios";
import Crear from "views/admin/crear";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdLockOpen,
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
    name: "Crear",
    layout: "/auth",
    path: "crear",
    icon: <MdLockOpen className="h-6 w-6" />,
    component: <Crear />,
  },
  {
    name: "Cerrar sesión",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  }
];
export default routes;
