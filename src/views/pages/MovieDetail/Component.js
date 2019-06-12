import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./styles";

// Images
import allAge from "./../../images/X.png";
import ageIconNumber1 from "./../../images/1.png";
import ageIconNumber3 from "./../../images/3.png";
import ageIconNumber6 from "./../../images/6.png";
import ageIconNumber8 from "./../../images/8.png";

// Component
import HeaderComponent from "./../../common/components/banner"
import SlideComponent from "./../../common/components/slide"
import FooterComponent from "./../../common/components/footer"

class MovieDetailComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TabMoviesList1: false,
        }
    }

    render() {
        const { TabMoviesList1 } = this.state;
        const { data } = this.props;
        const id = this.props.match.params.id;
        return (
            <div style={styles.container}>
                {/* Header */}
                <HeaderComponent />
                {/* Slide */}
                <SlideComponent
                    text="Phim HOT tại rạp" />
                <div style={styles.bodyWrapper}>
                    <div style={styles.contentWrapper}>
                        <div style={styles.contentLeft}>
                            <img style={styles.logoStyle}
                                src={data[id].image}
                                alt={data[id].name}
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
                                        Đặt vé
                            </button>
                                </Link>
                            </div>
                        </div>
                        <div style={styles.contentRight}>
                            <div style={styles.contentTitle}>{data[id].name}</div>
                            <div style={styles.eachContentTextWrapper}>
                                <div style={styles.contentBoldText}>Điểm xếp hạng:</div>
                                <div style={styles.contentText}>8.0</div>
                            </div>
                            <div style={styles.eachContentTextWrapper}>
                                <div style={styles.contentBoldText}>Ngày phát hành:</div>
                                <div style={styles.contentText}>{data[id].releaseDate}</div>
                            </div>
                            <div style={styles.eachContentTextWrapper}>
                                <div style={styles.contentBoldText}>Thời lượng:</div>
                                <div style={styles.contentText}>{data[id].duration}</div>
                            </div>
                            <div style={styles.eachContentTextWrapper}>
                                <div style={styles.contentBoldText}>Loại:</div>
                                <div style={styles.contentText}>{data[id].types} ({data[id].sub})</div>
                            </div>
                            <div style={styles.eachContentTextWrapper}>
                                <div style={styles.contentBoldText}>Giới hạn độ tuổi:</div>
                                {data[id].age === "0" && (<img style={styles.eachMovieAgeLimitedIcon}
                                    src={allAge}
                                    alt="Tuổi"
                                />)}
                                {data[id].age === "13" && (
                                    <div>
                                        <img style={styles.eachMovieAgeLimitedIcon}
                                            src={ageIconNumber1}
                                            alt="Tuổi"
                                        />
                                        <img style={styles.eachMovieAgeLimitedIcon}
                                            src={ageIconNumber3}
                                            alt="Tuổi"
                                        />
                                    </div>
                                )}
                                {data[id].age === "16" && (
                                    <div>
                                        <img style={styles.eachMovieAgeLimitedIcon}
                                            src={ageIconNumber1}
                                            alt="Tuổi"
                                        />
                                        <img style={styles.eachMovieAgeLimitedIcon}
                                            src={ageIconNumber6}
                                            alt="Tuổi"
                                        />
                                    </div>
                                )}
                                {data[id].age === "18" && (
                                    <div>
                                        <img style={styles.eachMovieAgeLimitedIcon}
                                            src={ageIconNumber1}
                                            alt="Tuổi"
                                        />
                                        <img style={styles.eachMovieAgeLimitedIcon}
                                            src={ageIconNumber8}
                                            alt="Tuổi"
                                        />
                                    </div>
                                )}
                            </div>
                            <div style={styles.eachContentTextWrapper}>
                                <div style={styles.contentBoldText}>Tóm tắt:</div>
                            </div>
                            <div style={styles.contentText}>{data[id].description}</div>
                        </div>
                    </div>
                </div>
                <div style={{ height: "200px", width: "100%", float: "left" }}></div>
                {/* Footer */}
                <FooterComponent />
            </div >
        );
    }
};

export default MovieDetailComponent;