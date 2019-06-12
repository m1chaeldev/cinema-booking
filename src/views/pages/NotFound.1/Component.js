import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "./../../images/404.png"

// Styles
import styles from "./styles";

// Component
import HeaderComponent from "./../../common/components/banner"
import SlideComponent from "./../../common/components/slide"
import FooterComponent from "./../../common/components/footer"

class NotFoundPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TabMoviesList1: false,
        }
    }

    render() {
        const { TabMoviesList1 } = this.state;
        return (
            <div style={styles.container}>
                {/* Header */}
                <HeaderComponent />
                {/* Slide */}
                <SlideComponent
                    text="Phim HOT tại rạp" />
                <div style={styles.contentWrapper}>
                    <img style={styles.logoStyle}
                        src={icon}
                        alt="404 Not Found"
                    />
                    <div style={styles.customBtn}>
                        <Link to="/home">
                            <button
                                style={TabMoviesList1 ? styles.TabMoviesListBtnHovered : styles.TabMoviesListBtn}
                                onMouseEnter={() => {
                                    this.setState({ TabMoviesList1: true })
                                }}
                                onMouseLeave={() => {
                                    this.setState({ TabMoviesList1: false })
                                }}
                                onClick={this.selectTabMoviesList1}
                            >
                                Quay về trang chủ
                    </button>
                        </Link>
                    </div>
                </div>
                {/* Footer */}
                <FooterComponent />
            </div >
        );
    }
};

export default NotFoundPage;