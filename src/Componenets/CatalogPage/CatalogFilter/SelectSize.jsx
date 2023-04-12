
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useContext} from "react";
import {CustomContext} from "../../../Context";

function SelectSize() {
    const {size,setSize,category} = useContext(CustomContext)

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Размер</InputLabel>

                {
                    category === "Shoes" || category === 'Pants' ?
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="Размер"
                            onChange={handleChange}
                        >
                            <MenuItem value={34}>34</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={38}>38</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={''}>Сбросить</MenuItem>

                        </Select> :
                        category === "T-short" ?
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={size}
                                label="Цена"
                                onChange={handleChange}
                            >
                                <MenuItem value={'s'}>{"s"}</MenuItem>
                                <MenuItem value={'m'}> {"m"}</MenuItem>
                                <MenuItem value={'xl'}>{"xl"}</MenuItem>
                                <MenuItem value={'xxl'}>{"xxl"}</MenuItem>
                                <MenuItem value={''}>Сбросить</MenuItem>

                            </Select> : ''
                }

            </FormControl>
        </Box>
    );
}
export default SelectSize