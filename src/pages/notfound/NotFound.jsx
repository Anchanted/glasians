import React from 'react';
import './NotFound.scss';
import PageStructure from '@/components/pagestructure/PageStructure';
import logo_background from "@/assets/images/logo_background.jpg";

function NotFound(props) {

    function onClickButton() {
        props.history.push("/")
    }

    return (
        <PageStructure>
            <div className="notfound" style={{backgroundImage: "url(" + logo_background + ")"}}>
                <span className="notfound-status">404</span>
                <span className="notfound-text">Page not found</span>
                <span className="notfound-explain">We are sorry. The page you requested does not exist.</span>
                <button onClick={onClickButton}>Back to Homepage</button>
            </div>
        </PageStructure>
    );
}

export default NotFound;