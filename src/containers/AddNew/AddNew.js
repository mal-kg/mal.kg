import React, {useState} from 'react';
import {Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import FormElement from "../../components/FormElement/FormElement";
import './AddNew.css';
import FileInput from "../../components/FileInput/FileInput";
import {useDispatch, useSelector} from "react-redux";
import {addAnimalRequest} from "../../store/actions/animalsActions";
import {Link, useNavigate} from "react-router-dom";

const AddNew = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.animals.createLoading);
    const error = useSelector(state => state.animals.createError);

    const [animal, setAnimal] = useState({
        description: "",
        title: "",
        image: null,
        vaccine: "",
        weight:"",
        age:"",
        passport:"",
        price:"",
    });

    console.log(animal);


    const submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(animal).forEach(key => {
            formData.append(key, animal[key]);
        });

        dispatch(addAnimalRequest(formData));
        history('/catalog')
        // setAnimal({
        //     description: "",
        //     title: "",
        //     image: null,
        //     vaccine: "",
        //     weight:"",
        //     age:"",
        // })
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setAnimal(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setAnimal(prevState => {
            return {...prevState, [name]: file};
        });
    };


    return (
        <>
            <div className="js-sticky">
                <div className="fh5co-main-nav">
                    <div className="container-fluid">
                        <div className="fh5co-menu-1">
                            {/*<a href="#" data-nav-section="home">?????????????? </a>*/}
                            <Link to={'/'} data-nav-section="home">?????????????? </Link>
                            <a href="#" data-nav-section="about">?????? ????????????-?????????? </a>
                        </div>
                        <div className="fh5co-logo">
                            <a href="#">Mal.kg</a>
                            {/*<img src="images/logo.jpeg" alt="logo" className='logo-img'/>*/}
                        </div>
                        {/*<div className="fh5co-menu-2">*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <Container className='container-box'>
                <Typography variant={'h3'} className='title'>???????????????????? ?? ?????????? ??????????????</Typography>
                <Grid container direction={"column"} className='form-container'>
                    <FormElement
                        label="????????????????"
                        name='title'
                        fullWidth
                        xs={6}
                        md={7}
                        lg={10}
                        onChange={inputChangeHandler}
                    />
                    <FormElement
                        label="????????????????"
                        name='description'
                        fullWidth
                        xs={6}
                        md={7}
                        lg={10}
                        onChange={inputChangeHandler}
                    />
                    <FormElement
                        label="???????????? ?? ????????????????"
                        name={'vaccine'}
                        fullWidth
                        xs={6}
                        md={7}
                        lg={10}
                        onChange={inputChangeHandler}
                    />
                    <FormElement
                        label="???????????????????? ????????????"
                        name={'passport'}
                        fullWidth
                        xs={6}
                        md={7}
                        lg={10}
                        onChange={inputChangeHandler}
                    />
                    <Grid item container spacing={2} direction={"row"}>
                        <FormElement
                            label="??????"
                            name='weight'
                            type='text'
                            onChange={inputChangeHandler}
                        />
                        <FormElement
                            name='age'
                            label="??????????????"
                            type='text'
                            onChange={inputChangeHandler}
                        />
                        <FormElement
                            name='price'
                            label="????????"
                            type='text'
                            onChange={inputChangeHandler}
                        />
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-controlled-open-select-label">??????????????????</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                label="??????????????????"
                                name="category"
                                required
                                onChange={inputChangeHandler}
                            >
                                <MenuItem value={'cattle'}>?????????????? ?????????????? ????????</MenuItem>
                                <MenuItem value={'small-cattle'}>???????????? ?????????????? ????????</MenuItem>
                                <MenuItem value={'pet'}>?????????????? ?????? ????????????????</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid
                            item
                            xs={12} sm={8} md={7} lg={7}
                        >
                                <FileInput
                                    name="image"
                                    type="file"
                                    fullWidth
                                    onChange={fileChangeHandler}
                                />

                        </Grid>

                    </Grid>
                    <button onClick={submitFormHandler} className='submit-btn'>????????????????????????</button>
                </Grid>
            </Container>
        </>
    )
        ;
};

export default AddNew;