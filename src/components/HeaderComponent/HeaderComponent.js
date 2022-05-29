import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="js-sticky">
            <div className="fh5co-main-nav">
                <div className="container-fluid">
                    <div className="fh5co-menu-1">
                       <Link to={'/'} data-nav-section="home">Главная</Link>
                        {/*<a href="" data-nav-section="home">Главная </a>*/}
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
    );
};

export default HeaderComponent;