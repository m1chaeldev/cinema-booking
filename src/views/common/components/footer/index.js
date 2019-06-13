import React, { Component } from "react";
import { Row, Col } from "antd";

// Styles
import styles from "./styles";

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Row>
                <Col md={24}>
                    <div style={styles.footerWrapper}>
                        <div style={styles.footerContent}>Copyright &copy; Thai Nguyen - all rights reserved</div>
                    </div>
                </Col>
            </Row>
        );
    }

};

export default FooterComponent;