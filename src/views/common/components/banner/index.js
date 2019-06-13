import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

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
            <Row>
                <Col md={6}></Col>
                <Col md={12}>
                    <Link to="/home">
                        <img
                            style={styles.bannerImgStyle}
                            src={bannerImg}
                            alt="Cinema" />
                    </Link>
                </Col>
                <Col md={6}></Col>
            </Row>
        );
    }

};

export default HeaderComponent;