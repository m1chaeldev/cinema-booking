import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./styles";

// Images
import bannerImg from "./../../../images/banner.jpg";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div style={styles.banner}>
                    <Link to="/home">
                        <img
                            style={styles.bannerImgStyle}
                            src={bannerImg}
                            alt="Cinema" />
                    </Link>
                </div>
            </div>
        );
    }

};

export default HeaderComponent;