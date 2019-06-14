import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

// Styles
import styles from "./styles";

// Images
import bannerImg from "./../../../images/banner.jpg";
import homeIcon from "./../../../images/home.png";
import historyIcon from "./../../../images/history.png";

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
                <Col style={{
                    height: 50,
                    marginTop: 5,
                    textAlign: "center"
                }} span={24}>
                    <Link to="/home">
                        <img style={{ height: 50, width: 50 }}
                            src={homeIcon}
                            alt="Home"
                        />
                    </Link>
                    <Link to="/history">
                        <img style={{ marginLeft: 30, height: 50, width: 50 }}
                            src={historyIcon}
                            alt="History"
                        />
                    </Link>
                </Col>
            </Row>
        );
    }

};

export default HeaderComponent;