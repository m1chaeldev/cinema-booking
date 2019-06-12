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
        width: "100%",
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
        width: "100%",
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
    bodyWrapper: {
        marginTop: "3.5em",
        width: "100%",
        height: "auto",
        float: "left",
        fontFamily: "'Roboto', sans-serif"
    },
    contentWrapper: {
        width: "30%",
        margin: "auto"
    },
    logoStyle: {
        width: "400px",
        height: "400px",
        marginTop: "100px"
    },
    customBtn: {
        width: "30%",
        height: "50px",
        margin: "auto",
        clear: "both"
    },
    screenStyle: {
        width: "100%",
        height: "50px",
        backgroundColor: "#f1f1f1",
        color: "black",
        textAlign: "center",
        lineHeight: "50px",
        fontSize: 20
    },
    seatWrapper: {
        marginTop: 20,
        width: "100%",
        backgroundColor: "#f1f1f1",
        color: "black",
        float: "left",
        clear: "both"
    },
    allSeat: {
        width: "90%",
        color: "black",
        margin: "auto",
        paddingTop: "10px"
    },
    seatBtn: {
        color: "white",
        backgroundColor: "#1f568b",
        width: "70%",
        height: "30px",
        border: "none",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        cursor: "pointer"
    },
    formInput: {
        height: "40px",
        width: "90%",
        borderRadius: "45px",
        border: "1px solid #1f568b",
        outline: "none",
        paddingLeft: "20px",
        paddingRight: "20px",
        float: "left"
    },
    formLabel: {
        fontWeight: "bold",
        float: "left",
        width: "40%",
        height: "40px",
        lineHeight: "40px",
        marginLeft: "20px"
    },
    columnRow: {
        width: "20px",
        height: "40px",
        lineHeight: "40px",
        textAlign: "center",
        marginTop: 6
    },
    resetBtn: {
        backgroundColor: "#ffffff",
        border: "1px solid #1f568b",
        outline: "none",
        color: "#1f568b",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "45px"
    }
};

export default styles;
