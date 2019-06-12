const styles = {
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        float: "left"
    },
    TabMoviesListBtn: {
        width: "15%",
        height: "100%",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "2.5px",
        fontWeight: "500",
        color: "#ffffff",
        backgroundColor: "#1f568b",
        border: "none",
        borderRadius: "45px",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease 0s",
        cursor: "pointer",
        outline: "none"

    },
    TabMoviesListBtnHovered: {
        width: "15%",
        height: "100%",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "2.5px",
        fontWeight: "500",
        border: "none",
        borderRadius: "45px",
        transition: "all 0.3s ease 0s",
        cursor: "pointer",
        outline: "none",
        backgroundColor: "#ffffff",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        color: "#000",
        transform: "translateY(-7px)"
    },
    listMoviesContainer: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "431px",
        marginTop: "1em"
    },
    moviesListWrapper: {
        marginTop: "3.5em",
        width: "100%",
        height: "auto",
        float: "left"
    },
    tabBtnBar: {
        height: "50px",
        width: "100%",
        textAlign: "center"
    },
    eachMovieWrapper: {
        width: "25%",
        height: "400px",
        float: "left"
    },
    eachMovie: {
        width: "228px",
        height: "370px",
        border: "1px solid #f1f1f1",
        position: "relative"
    },
    customMovieName: {
        textTransform: "uppercase",
        fontSize: "14px",
        color: "black",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "30px"
    },
    eachMovieContentWrapper: {
        position: "absolute",
        float: "left",
        width: "228px",
        height: "335px",
        backgroundColor: "black",
        top: 0,
        left: 0,
        opacity: 0.8,
        display: "none",
    },
    eachMovieBorder: {
        width: "80%",
        height: "60%",
        border: "2px solid #1f568b",
        borderRadius: 15,
        position: "absolute",
        top: "20%",
        left: "10%"
    },
    eachMovieContentText: {
        width: "80%",
        height: "65%",
        marginTop: "30px",
        color: "white",
        fontFamily: "'Roboto', sans-serif",
        fontSize: 14,
        marginLeft: "20px"
    },
    eachMovieAgeLimitedIcon: {
        width: "25px",
        height: "25px",
        marginTop: "3px",
        color: "white",
        marginRight: "3px"
    },
    detailBtn: {
        textTransform: "uppercase",
        fontFamily: "'Roboto', sans-serif",
        color: "white",
        border: "1px solid #1f568b",
        backgroundColor: "black",
        width: "60%",
        height: "30px",
        fontSize: "10px",
        lineHeight: "30px",
        textAlign: "center",
        borderRadius: "45px",
        marginLeft: "auto",
        marginRight: "auto"
    }
};

export default styles;
