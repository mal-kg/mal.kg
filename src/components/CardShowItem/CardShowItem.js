import {Card, CardMedia, Grid,} from "@mui/material";
import {Link} from "react-router-dom";
import {apiURL} from "../../config";
import dayjs from "dayjs";
import theme from "../../theme";

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    card: {
        height: '100%',
        textAlign: "center",
        margin: '10px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    btn:{
        border: "2px solid darkgrey",
        padding: "5px 15px",
        backgroundColor: "white"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        maxWidth: "80%",
    },
    img:{
        maxWidth: "700px",
        height: "100%",
    }
})

const CardShowItem = ({title, picture, animalId, date, price}) => {
    const classes = useStyles();
    const img=apiURL+'/'+ picture;


    return (
        <Grid item xs={8} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
                <CardMedia
                    image={img}
                    className={classes.media}
                    title={title}
                />
                <Link to={'/catalog/' + animalId} className={classes.btn}>{title}</Link>
                <p>Цена: <b>{price}</b></p>
                <span>{dayjs(date).format('DD/MM/YYYY')}</span>
            </Card>
        </Grid>
    );
};


export default CardShowItem;