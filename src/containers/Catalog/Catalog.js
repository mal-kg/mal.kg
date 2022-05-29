import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAnimalsRequest} from "../../store/actions/animalsActions";
import {Container, Grid} from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import CardShowItem from "../../components/CardShowItem/CardShowItem";

const Catalog = () => {
    const dispatch = useDispatch();
    const animals = useSelector(state => state.animals.animals);
    console.log(animals)

    useEffect(()=>{
        dispatch(fetchAnimalsRequest())
    },[dispatch])

    return (
        <>
            <HeaderComponent/>
            <Container maxWidth="md">
                <Grid container>
                    {animals && animals.map(a=>(
                        <CardShowItem
                            key={a._id}
                            picture={a.image}
                            title={a.title}
                            animalId={a._id}
                            date={a.datetime}
                            price={a.price}
                        />
                    ))
                    }
                </Grid>


            </Container>
        </>

    );
};

export default Catalog;