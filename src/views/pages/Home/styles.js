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
        width: "200px",
        height: "45px",
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
        width: "200px",
        height: "45px",
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
        width: "100%",
        minHeight: "400px",
        marginTop: "1em"
    },
    moviesListWrapper: {
        marginTop: "3.5em",
        width: "100%",
        height: "auto",
        padding: 10
    },
    tabBtnBar: {
        height: "60px",
        width: "100%",
        textAlign: "center"
    },
    eachMovie: {
        border: "1px solid #f1f1f1",
        position: "relative"
    },
    customMovieName: {
        textTransform: "uppercase",
        fontSize: "0.8rem",
        color: "black",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "30px",
        width: "100%"
    },
    eachMovieContentWrapper: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        top: 0,
        left: 0,
        opacity: 0.8,
        display: "none",
    },
    eachMovieBorder: {
        width: "80%",
        height: "70%",
        border: "2px solid #1f568b",
        borderRadius: 15,
        position: "absolute",
        top: "10%",
        left: "10%"
    },
    eachMovieContentText: {
        width: "80%",
        height: "70%",
        marginTop: "10px",
        color: "white",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "0.8rem",
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
