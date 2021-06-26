import React from 'react';
import MainBody from '../MainBody/MainBody';
import Service from '../Services/Services';
import Header from '../Header/Header';
import Commitments from '../Commitments/Commitments';
import Comments from '../Comments/Comments';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MainBody></MainBody>
            <Service></Service>
            <Commitments></Commitments>
            <Comments></Comments>
            <Footer></Footer>
        </div>
    );
};

export default Home;