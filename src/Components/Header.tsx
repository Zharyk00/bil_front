import { ButtonGroup, Button } from "@mui/material";
import React from "react";
import "../Styles/Header/Header.css";

function Header() {
  return (
    <div className="main_header">
      <h2>bilkg</h2>
      <ul>
        <li>find doctors</li>
        <li>specialist</li>
        <li>video consult</li>
        <li>contacts</li>
        <li>about</li>
      </ul>

      <ButtonGroup
        variant="outlined"
        style={{ display: "block" }}
        size="small"
        disableElevation={true}
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </div>
  );
}

export default Header;
