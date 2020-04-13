import React from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
  return (
  <div>
   <header>
        <div class="jumbroton">
        <h1>My To Do List</h1>
        </div>
        <nav>
<center>
 <ul className="navs">
 <li className="nav"><Link to="/">Home</Link></li>
</ul>
</center>
</nav>
	</header>
  </div>
  );
}

export default Nav;