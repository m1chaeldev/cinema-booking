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
        width: "228px",
        height: "50px",
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
        width: "228px",
        height: "50px",
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
    bodyWrapper: {
        marginTop: "3.5em",
        width: "100%",
        height: "auto",
        float: "left"
    },
    logoStyle: {
        width: "228px",
        height: "335px"
    },
    customBtn: {
        marginTop: "5px"
    },
    contentWrapper: {
        width: "50%",
        margin: "auto"
    },
    contentLeft: {
        width: "40%",
        height: "auto",
        float: "left"
    },
    contentRight: {
        width: "60%",
        height: "auto",
        float: "left"
    },
    contentTitle: {
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontFamily: "'Roboto', sans-serif",
        marginBottom: "10px"
    },
    contentBoldText: {
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "'Roboto', sans-serif",
        float: "left",
        width: "33%"
    },
    contentText: {
        color: "black",
        float: "left",
        fontFamily: "'Roboto', sans-serif",
    },
    eachContentTextWrapper: {
        width: "100%",
        height: "40px",
        lineHeight: "40px",
        float: "left"
    },
    eachMovieAgeLimitedIcon: {
        width: "25px",
        height: "25px",
        marginTop: "3px",
        color: "white",
        marginRight: "3px"
    },
};

export default styles;
