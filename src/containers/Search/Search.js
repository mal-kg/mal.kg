import React from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneAnimalRequest} from "../../store/actions/animalsActions";
import {Link} from "react-router-dom";

const Search = () => {
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animals.animals)
    const [value, setValue] = React.useState({});
    const [inputValue, setInputValue] = React.useState('');


    return (
        <Grid container>
            <Autocomplete
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                name={'title'}
                disablePortal
                id="combo-box-demo"
                options={animals}
                getOptionLabel={(option)=>(option.title)}
                renderInput={(params) => <TextField {...params} label="Название скота" />}
                fullWidth
            />
          <Link to={'/catalog/' +value._id}>
              <Button xs={{width:'50px'}}>Поиск</Button>
          </Link>
        </Grid>
    );
};

export default Search;