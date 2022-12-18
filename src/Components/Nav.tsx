import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../Styles/Nav/Nav.css";

function Nav() {
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
<<<<<<< HEAD
=======
=======
    return (
        <nav className="main_header">
            <h2>bilkg</h2>
            <section>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/specialists"}>specialists</NavLink>
                <NavLink to={"/meeting"}>Meeting</NavLink>
                <NavLink to={"/contacts"}>contacts</NavLink>
                <NavLink to={"/about"}>about</NavLink>
            </section>

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
        </nav>
    );
}

export default Nav;
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
>>>>>>> Kadyrbek00-main
