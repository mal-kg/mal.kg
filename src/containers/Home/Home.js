import React from 'react';
import './Home.css';
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div id="fh5co-container">
                <div id="fh5co-home" className="js-fullheight" data-section="home">
                    <div className="flexslider">
                        <div className="fh5co-overlay" />
                        <div className="fh5co-text">
                            <div >
                                <Grid container className="container">
                                    <Grid item  className='box' >
                                        <Link to="/catalog" className="main-btn">Хочу купить</Link>
                                    </Grid>
                                    <Grid item className='box'>
                                        <Link to="/new" className="main-btn">Хочу продать</Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <ul className="slides">
                            <li style={{backgroundImage: 'url(images/bull.jpg)'}} data-stellar-background-ratio="0.5" />
                            <li style={{backgroundImage: 'url(images/lamb.jpg)'}} data-stellar-background-ratio="0.5" />
                            <li style={{backgroundImage: 'url(images/sheep.jpg)'}} data-stellar-background-ratio="0.5" />
                        </ul>
                    </div>
                    <div className='logo-box'>
                        <img src="images/logo.png" alt="logo" className='logo-img'/>
                    </div>
                </div>
                <div className="js-sticky">
                    <div className="fh5co-main-nav">
                        <div className="container-fluid">
                            <div className="fh5co-menu-1">
                                <a href="#" data-nav-section="home">Главная </a>
                                <a href="#" data-nav-section="about">Про онлайн-рынок </a>
                            </div>
                            <div className="fh5co-logo">
                                <a href="index.html">Mal.kg</a>
                                {/*<img src="images/logo.jpeg" alt="logo" className='logo-img'/>*/}
                            </div>
                            {/*<div className="fh5co-menu-2">*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div id="fh5co-about" data-section="about">
                    <div className="fh5co-2col fh5co-bg to-animate-2" style={{backgroundImage: 'url(images/baran.jpg)'}} />
                    <div className="fh5co-2col fh5co-text">
                        <h2 className="heading to-animate">Про онлайн-рынок</h2>
                        <p className="to-animate"><span className="firstcharacter">В</span>ам больше не придется ездить по базарам и искать подходящего скота. Здесь вы найдете то что вам нужно и в нужных количествах. Первый в Кыргызстане онлайн-скотный рынок </p>
                        <p className="text-center to-animate"><a href="#" className="btn btn-primary btn-outline">Искать</a></p>
                    </div>
                </div>

            </div>
            <div id="fh5co-footer">
                <div className="container">
                    <div className="row row-padded">
                        <div className="col-md-12 text-center">
                            <p className="to-animate">© 2016 Foodee Free HTML5 Template. <br /> Designed by <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> Demo Images: <a href="http://pexels.com/" target="_blank">Pexels</a> <br /> Tasty Icons Free <a href="http://handdrawngoods.com/store/tasty-icons-free-food-icons/" target="_blank">handdrawngoods</a>
                            </p>
                            <p className="text-center to-animate"><a href="#" className="js-gotop">Go To Top</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="fh5co-social">
                                <li className="to-animate-2"><a href="#"><i className="icon-facebook" /></a></li>
                                <li className="to-animate-2"><a href="#"><i className="icon-twitter" /></a></li>
                                <li className="to-animate-2"><a href="#"><i className="icon-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;