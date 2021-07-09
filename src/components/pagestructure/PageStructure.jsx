import React, { Component } from 'react';
import logo from "/assets/images/logo.png";

class PageStructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="header-wrapper">
                <header>
                    <nav>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </nav>
                </header>
            </div>
        );
    }
}

export default PageStructure;