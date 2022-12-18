import React, { useState } from "react";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import "../Styles/Specialists/Specialists.css";
import Bilkg from "./Store";
import { observer } from "mobx-react-lite";

function Specialists() {
  const [value, setValue] = React.useState<Object | null>();
  const [inputValue, setInputValue] = React.useState("");

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option: specialistsOptionType) => option.title,
  });
  const filterRegions = createFilterOptions({
    matchFrom: "start",
    stringify: (option: regions): any => option.title,
  });

  return (
    <div className="main_search">
      <header onClick={() => Bilkg.get()}>Найти И забронировать</header>
      <div className="searchs">
        <Autocomplete
          onChange={(event: any, newValue: Object | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={region}
          getOptionLabel={(option) => option.title}
          filterOptions={filterRegions}
          renderInput={(params) => (
            <TextField {...params} label="choose region" />
          )}
        />
        <Autocomplete
          options={specialists}
          getOptionLabel={(option) => option.title}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField {...params} label="Искать специалиста" />
          )}
        />
      </div>
    </div>
  );
}

type regions = {
  title: string;
};

const region = [
  { title: "Ош" },
  { title: "Чуй" },
  { title: "Жала-Абад" },
  { title: "Ысык-Кол" },
  { title: "Баткен" },
  { title: "Нарын" },
  { title: "Талас" },
];

type specialistsOptionType = {
  title: string;
};

const specialists = [
  { title: "Dentist" },
  { title: "Front-end developer" },
  { title: "Back-end developer" },
  { title: "Юрист" },
  { title: "Адвокат" },
  { title: "Кожный" },
];

export default observer(Specialists);
