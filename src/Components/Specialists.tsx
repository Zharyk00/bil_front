import React from "react";
<<<<<<< HEAD

function Specialists() {
  return <div>Specialists</div>;
}

export default Specialists;
=======
import { Autocomplete, Box, createFilterOptions, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import "../Styles/Specialists/Specialists.css"


function Specialists() {

    const [region, setRegion] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRegion(event.target.value as string);
    }

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option: specialistsOptionType) => option.title,
    });

    return (
        <div>
            <div className="main_search">
                <div className="searchs">
                    <h2>Найти И забронировать</h2>
                    <Box>
                        <FormControl>
                            <InputLabel id="region">Ваш область</InputLabel>
                            <Select
                                className="select"
                                labelId="region"
                                id="region"
                                label="Ваш область"
                                value={region}
                                onChange={handleChange}>
                                {regions.map(item => (
                                    <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Autocomplete
                            options={specialists}
                            getOptionLabel={(option) => option.title}
                            filterOptions={filterOptions}
                            renderInput={(params) => <TextField {...params} label="Искать специалиста" />} />
                    </Box>
                </div>

            </div>
        </div>
    )
}

const regions = [
    { title: "Ош", value: 1 },
    { title: "Чуй", value: 2 },
    { title: "Жала-Абад", value: 3 },
    { title: "Ысык-Кол", value: 4 },
    { title: "Баткен", value: 5 },
    { title: "Нарын", value: 6 },
    { title: "Талас", value: 7 },
]

interface specialistsOptionType {
    title: string;
}

const specialists = [
    { title: "Dentist" },
    { title: "Front-end developer" },
    { title: "Back-end developer" },
    { title: "Юрист" },
    { title: "Адвокат" },
    { title: "Кожный" },
]



export default Specialists;
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
