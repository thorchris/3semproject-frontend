import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink } from "react-router-dom";

const Menu = ({ open, loginMsg, isLoggedIn, user, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <NavLink tabIndex={tabIndex} to="/harry-potter">
      <span aria-hidden="true">💁🏻‍♂️</span>
      Harry Potter
      </NavLink>
      <NavLink tabIndex={tabIndex} to="/got">
      <span aria-hidden="true">💁🏻‍♂️</span>
      Game of Thrones
      </NavLink>
      <NavLink tabIndex={tabIndex} to="/starwars">
      <span aria-hidden="true">💁🏻‍♂️</span>
      Star Wars
      </NavLink>
      <NavLink tabIndex={tabIndex} to="/login-out">
      <span aria-hidden="true">💁🏻‍♂️</span>
      Login
      {loginMsg}
      </NavLink>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;