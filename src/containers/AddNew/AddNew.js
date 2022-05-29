import React from 'react';
import {Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import FormElement from "../../components/FormElement/FormElement";
import './AddNew.css';
import FileInput from "../../components/FileInput/FileInput";

const AddNew = () => {
    return (
        <>
            <div className="js-sticky">
                <div className="fh5co-main-nav">
                    <div className="container-fluid">
                        <div className="fh5co-menu-1">
                            <a href="#" data-nav-section="home">Главная </a>
                            <a href="#" data-nav-section="about">Про онлайн-рынок </a>
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
                <Typography variant={'h3'} className='title'>Информация о вашей скотине</Typography>
                <Grid container direction={"column"} className='form-container'>
                    <FormElement
                        label="Название"
                        fullWidth="fullWidth"
                        xs={6}
                        md={7}
                        lg={10}
                    />
                    <FormElement
                        label="Описание"
                        fullWidth="fullWidth"
                        xs={6}
                        md={7}
                        lg={10}
                    />
                    <FormElement
                        label="Данные о прививке"
                        fullWidth="fullWidth"
                        xs={6}
                        md={7}
                        lg={10}
                    />
                    <Grid item container spacing={2} direction={"row"}>
                        <FormElement
                            label="Вес"
                            type='number'
                        />
                        <FormElement
                            label="Возраст"
                            type='number'
                        />
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-controlled-open-select-label">Категория</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                label="Категория"
                                name="category"
                                required
                                // onChange={inputChangeHandler}
                            >
                                <MenuItem value={'cattle'}>Крупный рогатый скот</MenuItem>
                                <MenuItem value={'small-cattle'}>Мелкий рогатый скот</MenuItem>
                                <MenuItem value={'pet'}>Питомцы для квартиры</MenuItem>
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
                                    // onChange={fileChangeAvatarHandler}
                                />

                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
        ;
};

export default AddNew;