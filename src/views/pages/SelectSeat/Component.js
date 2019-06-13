import React, { Component } from "react";
import { Row, Col, Input } from "antd";

// Styles
import styles from "./styles";

// Component
import HeaderComponent from "./../../common/components/banner"
import SlideComponent from "./../../common/components/slide"
import FooterComponent from "./../../common/components/footer"

// Constants
const seatDatas = [
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
    { n: "1" }, { n: "2" }, { n: "3" }, { n: "4" }, { n: "5" }, { n: "6" }, { n: "7" }, { n: "8" }, { n: "9" }, { n: "10" },
];

const seatKeys = [
    { n: "A" }, { n: "B" }, { n: "C" }, { n: "D" }, { n: "E" }, { n: "F" }, { n: "G" }, { n: "H" }, { n: "J" }, { n: "K" }
];


class SelectSeatComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TabMoviesList1: false,
            fullName: "",
            phoneNumber: "",
            age: "",
            seatSelected: [
                {
                    seat: ""
                },
                {
                    seat: ""
                },
                {
                    seat: ""
                },
                {
                    seat: ""
                },
            ]
        }
    }

    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    resetSeatSelected = () => {
        this.setState({
            seatSelected: [
                {
                    seat: ""
                },
                {
                    seat: ""
                },
                {
                    seat: ""
                },
                {
                    seat: ""
                },
            ]
        })
    }

    onClickSubmit = () => {
        const { fullName, phoneNumber, age, seatSelected } = this.state;
        if (fullName.length >= 1 && phoneNumber.length >= 1 && age.length >= 1 && seatSelected[0].seat !== "") {
            this.setState({
                fullName: "",
                phoneNumber: "",
                age: "",
                seatSelected: [
                    {
                        seat: ""
                    },
                    {
                        seat: ""
                    },
                    {
                        seat: ""
                    },
                    {
                        seat: ""
                    },
                ]
            });
        }
        else return alert("Vui lòng điền đầy đủ thông tin và chọn ghế!");
    }

    convertThisIndex = (index) => {
        let row = "";
        let seatNumber = index + 1;
        if (index <= 9) row = "A";
        if (index >= 10 && index <= 19) {
            row = "B";
            seatNumber = seatNumber - 10;
        }
        if (index >= 20 && index <= 29) {
            row = "C";
            seatNumber = seatNumber - 20;
        }
        if (index >= 30 && index <= 39) {
            row = "D";
            seatNumber = seatNumber - 30;
        }
        if (index >= 40 && index <= 49) {
            row = "E";
            seatNumber = seatNumber - 40;
        }
        if (index >= 50 && index <= 59) {
            row = "F";
            seatNumber = seatNumber - 50;
        }
        if (index >= 60 && index <= 69) {
            row = "G";
            seatNumber = seatNumber - 60;
        }
        if (index >= 70 && index <= 79) {
            row = "H";
            seatNumber = seatNumber - 70;
        }
        if (index >= 80 && index <= 89) {
            row = "J";
            seatNumber = seatNumber - 80;
        }
        if (index >= 90 && index <= 99) {
            row = "K";
            seatNumber = seatNumber - 90;
        }
        const result = `${row}-${seatNumber}`;
        return result;
    }

    selectThisSeat = (index) => {
        const { seatSelected } = this.state;
        let newData = [...seatSelected];
        if (seatSelected[0].seat === "") {
            newData[0].seat = `${this.convertThisIndex(index)};`;
            this.setState({ seatSelected: newData })
        }
        else if (seatSelected[1].seat === "") {
            newData[1].seat = `${this.convertThisIndex(index)};`;
            this.setState({ seatSelected: newData })
        }
        else if (seatSelected[2].seat === "") {
            newData[2].seat = `${this.convertThisIndex(index)};`;
            this.setState({ seatSelected: newData })
        }
        else if (seatSelected[3].seat === "") {
            newData[3].seat = this.convertThisIndex(index);
            this.setState({ seatSelected: newData })
        }
    }
    render() {
        const { TabMoviesList1, fullName, phoneNumber, age, seatSelected } = this.state;
        return (
            <div style={styles.container}>
                {/* Header */}
                <HeaderComponent />
                {/* Slide */}
                <SlideComponent
                    text="Phim HOT tại rạp" />
                <Row>
                    <Col style={{ color: "white" }} xs={0} sm={2} md={4} lg={5} xl={8}></Col>
                    <Col style={{ color: "white" }} xs={24} sm={20} md={16} lg={14} xl={8}>
                        <div style={styles.bodyWrapper}>
                            <Row>
                                <Col span={24}>
                                    {/* Screen */}
                                    <div style={styles.screenStyle}>
                                        Screen
                        </div>
                                </Col>
                                <Col span={24}>
                                    <div style={{ width: "100%", height: "auto" }}>
                                        <Col style={styles.columnRow} span={2}>
                                            {seatKeys.map((seat, index) => (
                                                <div key={index} style={{ width: "100%", height: "auto", float: "left", margin: 1 }}>
                                                    <button
                                                        disabled
                                                        style={{ ...styles.seatBtn, backgroundColor: "pink" }}
                                                        onClick={() => this.selectThisSeat(index)}
                                                    >
                                                        {seat.n}
                                                    </button>
                                                </div>
                                            ))}
                                        </Col>
                                        <Col span={22}>
                                            <div style={styles.seatWrapper}>
                                                <Row>
                                                    <Col span={24}>
                                                        {seatDatas.map((seat, index) => (
                                                            <div key={index} style={{ width: "9.2%", height: "auto", float: "left", margin: 1 }}>
                                                                <button
                                                                    style={styles.seatBtn}
                                                                    onClick={() => this.selectThisSeat(index)}
                                                                >
                                                                    {seat.n}
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <div style={{
                                            padding: 20, width: "100%", height: "auto", textAlign: "center", clear: "both"
                                        }}>
                                            <div style={{ fontWeight: "bold", color: "black" }}>Lưu ý: Bạn được chọn 4 chỗ ngồi, nếu chọn sai hãy nhấn vào nút hoàn tác để chọn lại.</div>
                                            <button onClick={this.resetSeatSelected} style={styles.resetBtn}>Hoàn tác</button>
                                        </div>
                                        <div style={{ width: "100%", height: "20px", float: "left" }}></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col style={{ color: "white" }} xs={0} sm={2} md={4} lg={5} xl={8}></Col>
                </Row>
                {/* Form */}
                <Col style={{ color: "white" }} xs={1} sm={1} md={4} lg={5} xl={8}></Col>
                <Col style={{ color: "white" }} xs={22} sm={22} md={16} lg={14} xl={8}>
                    <Input
                        size="large"
                        style={styles.formInput}
                        onChange={this.handleChange}
                        placeholder="Họ và tên"
                        value={fullName || ""}
                        type="text"
                        name="fullName"
                    />
                    <Input
                        size="large"
                        style={styles.formInput}
                        onChange={this.handleChange}
                        placeholder="Số điện thoại"
                        value={phoneNumber || ""}
                        type="text"
                        name="phoneNumber"
                    />
                    <Input
                        size="large"
                        style={styles.formInput}
                        onChange={this.handleChange}
                        placeholder="Tuổi"
                        value={age || ""}
                        type="text"
                        name="age"
                    />
                    <Input
                        style={{ ...styles.formInput, fontWeight: "bold", color: "black" }}
                        size="large"
                        disabled
                        placeholder="Chưa chọn ghế"
                        value={`${seatSelected[0].seat} ${seatSelected[1].seat} ${seatSelected[2].seat} ${seatSelected[3].seat}` || ""}
                    />
                </Col>
                <Col style={{ color: "white" }} xs={1} sm={1} md={4} lg={5} xl={8}></Col>
                <div style={{ float: "left", height: "10px", width: "100%" }}></div>
                <div style={styles.customBtn}>
                    <button
                        style={TabMoviesList1 ? styles.TabMoviesListBtnHovered : styles.TabMoviesListBtn}
                        onMouseEnter={() => {
                            this.setState({ TabMoviesList1: true })
                        }}
                        onMouseLeave={() => {
                            this.setState({ TabMoviesList1: false })
                        }}
                        onClick={this.onClickSubmit}
                    >
                        Đồng ý
                        </button>
                </div>
                {/* Footer */}
                <FooterComponent />
            </div >
        );
    }
};

export default SelectSeatComponent;