import React, {useEffect, useRef, useState} from 'react';
import {Button, CardMedia, Container, Grid, Rating, Typography} from "@mui/material";
import FormElement from "../../components/FormElement/FormElement";
import {apiURL} from "../../config";
import {useParams} from "react-router-dom";
import {fetchOneAnimalRequest} from "../../store/actions/animalsActions";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";


const useStyles = makeStyles(() => ({

    box: {
        borderBottom: '2px solid grey',
        marginBottom: '40px',
    },

    card: {
        height: '100%',
        textAlign: "center"
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },

    mainImage: {
        margin: '20px 0',
        maxWidth: '500px',
        height: 'auto',
    },
    addBox: {
        margin: "50px",
        width: '70%',
        backgroundColor: 'whitesmoke',
        padding: '20px',
        border: '1px dashed midnightBlue'
    },

    itemBox:{
        width: '30%',
        padding: '20px',
        border: "1px solid midnightBlue",
        backgroundColor: 'whitesmoke'
    },

    cardAnimalInfo:{
        fontSize: '20px',
    },
    infoBox:{
        border: "1px solid lightGrey",
        width: '50%',
        padding: '10px',
    }
}));


const SingleAnimal = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const animal = useSelector(state => state.animals.animal);

    const {id} = useParams();

    const [review, setReview] = useState({
        rating: 0,
    })


    const messagesEndRef = useRef(null);

    useEffect(() => {
        dispatch(fetchOneAnimalRequest(id));
    }, [dispatch, id]);



    const submitFormHandler = e => {
        e.preventDefault();
        console.log('submit')
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setReview(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <>
            <HeaderComponent/>
            <Container maxWidth="lg" ref={messagesEndRef}>
                {animal && (
                    <>
                        <Grid container className={classes.box} justifyContent={"space-between"}>
                            <Grid item className={classes.infoBox}>
                                <Typography variant={"h2"}>Название:{animal.title}</Typography>
                                <Typography className={classes.cardAnimalInfo} > <b>Описание: </b> {animal.description}</Typography>
                                <Typography className={classes.cardAnimalInfo}> <b>Вес: </b>{animal.weight}</Typography>
                                <Typography className={classes.cardAnimalInfo}> <b>Возраст: </b>{animal.age}</Typography>
                                <Typography className={classes.cardAnimalInfo}> <b>Данные о прививке: </b> {animal.vaccine}</Typography>
                                <Typography className={classes.cardAnimalInfo}> <b>Паспорт: </b> {animal.passport}</Typography>
                                <Typography className={classes.cardAnimalInfo}> <b>Цена:</b>{animal.price} </Typography>
                            </Grid>
                            <Grid item>
                                <img src={apiURL + '/' + animal.image} alt="mainpic" className={classes.mainImage}/>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            direction="column"
                            spacing={2}
                            component="form"
                            autoComplete="off"
                            onSubmit={submitFormHandler}
                            noValidate
                            className={classes.addBox}
                        >
                            <Grid item>
                                <Typography variant={'h4'}>Оценить и написать коммент</Typography>
                            </Grid>

                            <FormElement
                                required
                                label="Comment"
                                name="comment"
                                value={review.description}
                                onChange={inputChangeHandler}
                            />
                            <Grid container direction={"column"} spacing={2}>
                                <Grid item container xs={12} sm={8} md={9} lg={4.5}>
                                    <Typography>Оценка</Typography>
                                    <Rating
                                        name="rating"
                                        value={Number(review.rating)}
                                        onChange={inputChangeHandler}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button>Отправить</Button>
                            </Grid>

                        </Grid>

                    </>
                )}
            </Container>

        </>

    );
};

export default SingleAnimal;