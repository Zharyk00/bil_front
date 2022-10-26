import React, { useState } from "react";
import "../Styles/Search/Search.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import { Box } from "@mui/system";

function Search() {
  const [region, setRegion] = useState<string>("10");

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };
  return (
    <div className="main_search">
      <div className="image">
        <div className="search_form">
          <Box>
            <Select
              style={{
                width: "200px",
                height: "39px",
              }}
              value={region}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {/* <FormHelperText>Chose your region</FormHelperText> */}
          </Box>
          <Autocomplete
            className="input"
            disablePortal
            size="small"
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Find someone" />
            )}
          />
        </div>
      </div>
    </div>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

export default Search;
