import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function SideMenu({ loginMsg, isLoggedIn, user }) {
    let username = isLoggedIn ? `Logged in as: ${user.username}` : "";
  return (
    // Pass on our props
    <Menu>
          <NavLink className="menu-item" to="/">
            Home
          </NavLink>

          <NavLink className="menu-item" to="/harry-potter">
            Harry Potter
          </NavLink>

          <NavLink className="menu-item" to="/got">
            Game of Thrones
          </NavLink>

          <NavLink className="menu-item" to="/starwars">
            Star Wars
          </NavLink>

          <NavLink className="menu-item" to="/login-out">
            {loginMsg}
          </NavLink>
          {isLoggedIn && (
          <>
            <span role="img" aria-label="user">&#x1f4e9; {username}</span>
          </>
        )}
    </Menu>
  );
};