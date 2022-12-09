import { ButtonGroup, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Nav/Nav.css";

function Nav() {
<<<<<<< HEAD
  return (
    <div className="main_header">
      <h2>bilkg</h2>
      <ul>
        <NavLink to={"home"}>Home</NavLink>
        <NavLink to={"specialists"}>specialist</NavLink>
        <NavLink to={"meeting"}>Meeting</NavLink>
        <NavLink to={"contacts"}>contacts</NavLink>
        <NavLink to={"about"}>about</NavLink>
      </ul>

      <ButtonGroup
        variant="outlined"
        className="buttongroup"
        color={"error"}
        disableElevation={true}
        aria-label="outlined primary button group"
      >
        <Button>Login</Button>
        <Button>LogOut</Button>
      </ButtonGroup>
    </div>
  );
}

export default Nav;
=======
    return (
        <div className="main_header">
            <h2>bilkg</h2>
            <ul>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/specialists"}>specialists</NavLink>
                <NavLink to={"/meeting"}>Meeting</NavLink>
                <NavLink to={"/contacts"}>contacts</NavLink>
                <NavLink to={"/about"}>about</NavLink>
            </ul>

            <ButtonGroup
                variant="outlined"
                className="buttongroup"
                color={"error"}
                disableElevation={true}
                aria-label="outlined primary button group"
            >
                <Button>Login</Button>
                <Button>LogOut</Button>
            </ButtonGroup>
        </div>
    );
}

export default Nav;
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
