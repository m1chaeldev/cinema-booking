import React, { Component } from "react";

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
            <div>
                <div style={styles.footerWrapper}>
                    <div style={styles.footerContent}>Copyright &copy; Thai Nguyen - all rights reserved</div>
                </div>
            </div>
        );
    }

};

export default FooterComponent;