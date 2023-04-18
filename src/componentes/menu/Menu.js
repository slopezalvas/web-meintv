import React from 'react';
import {NavLink} from "react-router-dom";
//import './Menu.css';

class Menu extends React.Component {

  render() {

  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

		    <NavLink to="/" className="navbar-brand">MeinTV</NavLink>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mx-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link">Home </NavLink>
			        </li>
					<li className="nav-item">
			          	<NavLink to="/servers" className="nav-link">Servers </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/team" className="nav-link">Team </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/donaciones" className="nav-link">Donaciones </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link">Contacto </NavLink>
			        </li>

			    </ul>

			    <form className="form-inline mt-2 mt-md-0">
			        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Buscar</button>
			    </form>
		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;