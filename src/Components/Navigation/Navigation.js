import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../UI/Grid';
import NavigationList from './NavigationList';
import logo from "./tmdb.svg";
import "./Nav.css";

const Navigation = props => (
  <div className='nav-custom'>
    <div className='container container-custom '>
      <div className='NavLogo'>
        <Link to='/'>
          <a href="/" className="nav-logo">
            <img src={logo} alt="logo" width="154" height="20" />
          </a></Link>
      </div>
      <NavigationList />
      <div className="nav-list-container">
        <ul>
          <li>
            <a href="/">
              <i className="material-icons">add</i>
            </a>
          </li>

          <li>
            <a href="/">
              <div className="box-visible">EN</div>
            </a>
          </li>

          <li>
            <a href="/">Login</a>
          </li>

          <li>
            <a href="/">Join TMDb</a>
          </li>

          <li>
            <a href="/">
              <i className="material-icons" style={{ color: "#64b5f6" }}>
                search
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navigation;
