import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function SideMenu({ loginMsg, isLoggedIn, user }) {
    let username = isLoggedIn ? `Logged in as: ${user.username}` : "";
  return (
    // Pass on our props
    <Menu>
          <NavLink className="menu-item" to="/">
          <span role="img" aria-label="star-wars">🏠</span>
            Home
          </NavLink>

          <NavLink className="menu-item" to="/harry-potter">
          <span role="img" aria-label="star-wars">⚡</span>
            Harry Potter
          </NavLink>

          <NavLink className="menu-item" to="/got">
          <span role="img" aria-label="star-wars">⚔️</span>
            Game of Thrones
          </NavLink>

          <NavLink className="menu-item" to="/starwars">
          <span role="img" aria-label="star-wars">🌠</span>
            Star Wars
          </NavLink>

          <NavLink className="menu-item" to="/login-out">
          <span role="img" aria-label="star-wars">🔒</span>
            {loginMsg}
          </NavLink>
          {isLoggedIn && (
          <>
            <span role="img" aria-label="user">👨{username}</span>
          </>
        )}
    </Menu>
  );
};