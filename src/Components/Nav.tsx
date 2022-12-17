import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../Styles/Nav/Nav.css";

function Nav() {
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