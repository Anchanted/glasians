import React from 'react';
import './Home.scss';
import 'antd/dist/antd.css';
import PageStructure from '@/components/pagestructure/PageStructure';
import { Carousel } from 'antd';
import home_background from "@/assets/images/home_background.png";
import logo_horizontal from "@/assets/images/logo_horizontal.png";

const contentStyle = {
    height: '250px',
    color: '#fff',
    lineHeight: '250px',
    textAlign: 'center',
    background: '#364d79',
};

function Home() {
    return (
        <PageStructure>
            <div className="img-background" style={{backgroundImage: "url(" + home_background + ")"}}>
                <div className="carousel-wrapper">
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </div>
                <div className="logo-wrapper">
                    <img src={logo_horizontal} alt="logo_horizontal" />
                </div>
            </div>
        </PageStructure>
    );
}

export default Home;