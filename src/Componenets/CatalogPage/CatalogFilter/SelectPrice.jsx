
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {changePrice} from "../../../redux/reducers/product";

  function SelectPrice() {
    const dispatch = useDispatch()
      const {filter} = useSelector((store) => store.product)
    const handleChange = (event) => {
        dispatch(changePrice(event.target.value))

    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Цена</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.price}
                    label="Цена"
                    onChange={handleChange}
                >
                    <MenuItem value={'asc'}>По возростанию</MenuItem>
                    <MenuItem value={'desc'}> По убыванию</MenuItem>
                    <MenuItem value={""}>Сброс</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
export default SelectPrice