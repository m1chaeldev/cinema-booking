import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

// Styles
import styles from "./styles";

// Constants
const slideImages = [
    {
        name: "Trùm, cớm và ác quỷ",
        image: require("./../../..//images/slide1.jpg")
    },
    {
        name: "Vua khủng long",
        image: require("./../../../images/slide2.jpg")
    },
    {
        name: "Phim hay tháng 6",
        image: require("./../../../images/slide3.jpg")
    }
];

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

class SlideComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Row>
                <Col md={24}>
                    <div style={styles.hotMovieBackground}>
                        <Link style={{ textDecoration: "none" }} to="/home">
                            <div style={styles.hotMovie}>
                                {this.props.text}
                            </div>
                        </Link>
                    </div>
                </Col>
                <Col md={24}>
                    <Slide {...properties}>
                        {slideImages.map((img, index) => (
                            <div key={index}>
                                <img
                                    style={styles.eachSlide}
                                    src={img.image}
                                    alt={img.name} />
                            </div>
                        ))}
                    </Slide>
                </Col>
            </Row >
        );
    }
};

export default SlideComponent;