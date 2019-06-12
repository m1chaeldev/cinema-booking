import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./styles";

// Component
import HeaderComponent from "./../../common/components/banner"
import SlideComponent from "./../../common/components/slide"
import FooterComponent from "./../../common/components/footer"

// Images
import allAge from "./../../images/X.png";
import ageIconNumber1 from "./../../images/1.png";
import ageIconNumber3 from "./../../images/3.png";
import ageIconNumber6 from "./../../images/6.png";
import ageIconNumber8 from "./../../images/8.png";

class HomePageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TabMoviesList1: true,
            TabMoviesList2: false,
            TabSelecting: 1,
            moviesData: []
        }
    }

    selectTabMoviesList1 = () => {
        const { TabSelecting } = this.state;
        if (TabSelecting !== 1) {
            this.setState({ TabSelecting: 1, TabMoviesList1: true, TabMoviesList2: false })
        }
    }

    selectTabMoviesList2 = () => {
        const { TabSelecting } = this.state;
        if (TabSelecting !== 2) {
            this.setState({ TabSelecting: 2, TabMoviesList1: false, TabMoviesList2: true })
        }
    }

    render() {
        const { TabMoviesList1, TabMoviesList2, TabSelecting } = this.state;
        let { moviesData } = this.state;
        moviesData = TabSelecting === 1 ? this.props.movies.data : this.props.movies.comingSoon;
        return (
            <div style={styles.container}>
                {/* Header */}
                <HeaderComponent />
                {/* Slide */}
                <SlideComponent
                    text="Phim HOT tại rạp" />
                {/* Movies list */}
                <div style={styles.moviesListWrapper}>
                    <div style={styles.tabBtnBar}>
                        <button
                            style={TabMoviesList1 ? styles.TabMoviesListBtnHovered : styles.TabMoviesListBtn}
                            onMouseEnter={() => {
                                if (TabSelecting !== 1) {
                                    this.setState({ TabMoviesList1: !this.state.TabMoviesList1 })
                                }
                            }}
                            onMouseLeave={() => {
                                if (TabSelecting !== 1) {
                                    this.setState({ TabMoviesList1: !this.state.TabMoviesList1 })
                                }
                            }}
                            onClick={this.selectTabMoviesList1}
                        >
                            Phim đang chiếu
                        </button>
                        <button
                            style={TabMoviesList2 ? { ...styles.TabMoviesListBtnHovered, marginLeft: "1em" } : { ...styles.TabMoviesListBtn, marginLeft: "1em" }}
                            onMouseEnter={() => {
                                if (TabSelecting !== 2) {
                                    this.setState({ TabMoviesList2: !this.state.TabMoviesList2 })
                                }
                            }}
                            onMouseLeave={() => {
                                if (TabSelecting !== 2) {
                                    this.setState({ TabMoviesList2: !this.state.TabMoviesList1 })
                                }
                            }}
                            onClick={this.selectTabMoviesList2}
                        >
                            Phim sắp chiếu
                        </button>
                    </div>
                    {/* List movies */}
                    <div style={styles.listMoviesContainer}>
                        {moviesData.map((movie, index) => (
                            <div
                                key={index}
                                style={styles.eachMovieWrapper}
                            >
                                <Link style={{ textDecoration: "none" }} to={TabSelecting === 1 ? `movie/${index}` : `movie/comingsoon/${index}`}>
                                    <div
                                        onClick={() => {
                                            let newData = [...moviesData];
                                            newData[index].isHovered = false;
                                            this.setState({ moviesData: newData });
                                        }}
                                        style={styles.eachMovie}
                                        onMouseEnter={() => {
                                            let newData = [...moviesData];
                                            newData[index].isHovered = true;
                                            this.setState({ moviesData: newData });
                                        }}
                                        onMouseLeave={() => {
                                            let newData = [...moviesData];
                                            newData[index].isHovered = false;
                                            this.setState({ moviesData: newData });
                                        }}
                                    >
                                        <img style={{ borderBottom: "1px solid #f1f1f1" }}
                                            src={movie.image}
                                            alt={movie.name}
                                        />
                                        <div
                                            style={{
                                                ...styles.eachMovieContentWrapper,
                                                display: movie.isHovered ? "block" : "none",
                                            }}
                                        >
                                            <div style={styles.eachMovieBorder}>
                                                <div style={styles.eachMovieContentText}>
                                                    Thời lượng: {movie.duration}<br></br>
                                                    Ngày phát hành: {movie.releaseDate}<br></br>
                                                    Loại: {movie.types} <br></br>
                                                    ({movie.sub})<br></br>
                                                    Giới hạn độ tuổi:<br></br>
                                                    <div style={{ width: "100%", textAlign: "center" }}>
                                                        {movie.age === "0" && (<img style={styles.eachMovieAgeLimitedIcon}
                                                            src={allAge}
                                                            alt="Tuổi"
                                                        />)}
                                                        {movie.age === "13" && (
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
                                                        {movie.age === "16" && (
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
                                                        {movie.age === "18" && (
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
                                                </div>
                                                <div style={styles.detailBtn}>Chi tiết</div>
                                            </div>
                                        </div>
                                        <div style={styles.customMovieName}>{movie.name.length >= 21 ? movie.name.substr(0, 21) + "..." : movie.name}</div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Footer */}
                <FooterComponent />
            </div >
        );
    }
};

export default HomePageComponent;