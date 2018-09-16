import React from "react";
import { NavLink } from "react-router-dom";

class SideNav extends React.Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                exact
                to="/kusari-portal"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-home" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/kusari-portal/predictive-analyst"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-bullseye" /> Predictive Analyst
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/kusari-portal/marketing-analyst"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-briefcase" /> Marketing Analyst
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/kusari-portal/supply-chain"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-truck" /> Supply Chain
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/kusari-portal/data-engineer"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-database" /> Data Engineer
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideNav;
