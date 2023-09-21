import React from "react";
import { NavLink } from "react-router-dom";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      {/* Menú de navegación */}
      <ul className={styleNav.menu}>
        <li>
          {/* Enlace al inicio */}
          <NavLink to="/" exact>
            <img src={logoHenry} alt="logo-henry" />
          </NavLink>
        </li>
        <li>
          {/* Título de la aplicación */}
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            {/* Enlace a la página de navieras */}
            <NavLink
              to="/shipping"
              className={({ isActive }) =>
                isActive ? styleNav.active : styleNav.disable
              }
            >
              <span>Navieras</span>
            </NavLink>
          </li>
          <li>
            {/* Enlace a la página de promociones */}
            <NavLink
              to="/discounts"
              className={({ isActive }) =>
                isActive ? styleNav.active : styleNav.disable
              }
            >
              <span>Promociones</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
