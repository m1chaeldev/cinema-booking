import React, { Component } from "react";
import { Row, Col } from "antd";

// Images
import deleteIcon from "./../../images/X.png"

// Styles
import styles from "./styles";

// Component
import HeaderComponent from "./../../common/components/banner"
import SlideComponent from "./../../common/components/slide"
import FooterComponent from "./../../common/components/footer"

class HistoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    onDeleteTicket = (index) => {
        let newData = [...this.props.data];
        newData.splice(index, 1);
        localStorage.setItem('movieBooking', JSON.stringify(newData));
        this.props.deleteTicket(index);
    }

    render() {
        let data = this.props.data;
        const movie = this.props.movie.data;
        const comingSoon = this.props.movie.comingSoon;
        return (
            <div style={styles.container}>
                {/* Header */}
                <HeaderComponent />
                {/* Slide */}
                <SlideComponent
                    text="Phim HOT tại rạp" />
                <Row style={{ marginTop: "1.5em", fontFamily: "'Roboto', sans-serif" }}>
                    <Col xs={1} sm={4} md={4} lg={4} xl={8}></Col>
                    <Col xs={22} sm={16} md={16} lg={16} xl={8} style={styles.orderStyle}>
                        {data.length < 1 ? "Không có thông tin" : ""}
                        {
                            data.map((i, index) => (
                                <div key={index} style={{ backgroundColor: "#f1f1f1", paddingBottom: 5, width: "100%", height: "auto", float: "left" }}>
                                    <div style={{ backgroundColor: "white", float: "left" }}>
                                        <img style={styles.logoStyle}
                                            src={i.category === "1" ? movie[i.movieIndex].image : comingSoon[i.movieIndex].image}
                                            alt={movie.name}
                                        />
                                        <div style={styles.eachItem}>
                                            <div style={styles.contentWrapper}>
                                                <div className="fixTextSize" style={{ ...styles.contentTextLeft, width: "35%" }}>Mã vé:</div>
                                                <div className="fixTextSize" style={{ ...styles.contentTextRight, width: "65%" }}>{i.orderID}</div>
                                            </div>
                                            <div style={styles.contentWrapper}>
                                                <div className="fixTextSize" style={{ ...styles.contentTextLeft, width: "35%", }}>Ngày đặt vé:</div>
                                                <div className="fixTextSize" style={{ ...styles.contentTextRight, width: "65%" }}>{i.date}</div>
                                            </div>
                                            <div style={styles.contentWrapper}>
                                                <div className="fixTextSize" style={{ ...styles.contentTextLeft, width: "35%", }}>Trạng thái:</div>
                                                <div className="fixTextSize"
                                                    style={{
                                                        ...styles.contentTextRight,
                                                        width: "65%",
                                                        color: i.status ? "green" : "red"
                                                    }}>{i.status ? "Hoàn thành" : "Chưa hoàn thành"}</div>
                                            </div>
                                            <div style={styles.contentWrapper}>
                                                <div className="fixTextSize" style={{ ...styles.contentTextLeft, width: "35%", }}>Tên phim:</div>
                                                <div className="fixTextSize" style={{ ...styles.contentTextRight, width: "65%", textTransform: "uppercase" }}>
                                                    {i.category === "1" ? movie[i.movieIndex].name : comingSoon[i.movieIndex].name}
                                                </div>
                                            </div>
                                            <div style={styles.contentWrapper}>
                                                <div className="fixTextSize" style={{ ...styles.contentTextLeft, width: "35%", }}>Số ghế:</div>
                                                <div className="fixTextSize" style={{ ...styles.contentTextRight, width: "65%" }}>{i.seat}</div>
                                            </div>
                                            <div style={styles.contentWrapper}>
                                                <div className="fixTextSize" style={{ ...styles.contentTextLeft, width: "35%", }}>Tổng tiền:</div>
                                                <div className="fixTextSize" style={{ ...styles.contentTextRight, width: "65%", textTransform: "uppercase" }}>{i.cost}₫</div>
                                            </div>
                                        </div>
                                        <div style={{ width: "5%", float: "left", height: "auto" }}>
                                            <div
                                                onClick={() => { this.onDeleteTicket(index) }}
                                            >
                                                <img style={{ padding: 5, width: "30px", float: "right", height: "30px" }}
                                                    src={deleteIcon}
                                                    alt="Xóa"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Col>
                    <Col xs={1} sm={4} md={4} lg={4} xl={8}></Col>
                </Row>
                {/* Footer */}
                <FooterComponent />
            </div >
        );
    }
};

export default HistoryComponent;