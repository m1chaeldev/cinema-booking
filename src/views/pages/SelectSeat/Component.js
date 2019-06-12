import React, { Component } from "react";

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
        })
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
        const { fullName, phoneNumber, age, seatSelected } = this.state;
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
                <div style={styles.bodyWrapper}>
                    <div style={styles.contentWrapper}>
                        {/* Screen */}
                        <div style={styles.screenStyle}>
                            Screen
                        </div>
                        <div style={styles.seatWrapper}>
                            <div style={{ ...styles.columnRow, float: "left" }}>A B C D E F G H J K</div>
                            <div style={{ ...styles.columnRow, float: "right" }}>A B C D E F G H J K</div>
                            <div style={styles.allSeat}>
                                {seatDatas.map((seat, index) => (
                                    <div key={index} style={{ width: "10%", height: "40px", float: "left", textAlign: "center" }}>
                                        <button
                                            style={styles.seatBtn}
                                            onClick={() => this.selectThisSeat(index)}
                                        >
                                            {seat.n}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{
                            marginTop: "10px", width: "100%", height: "auto", float: "left", textAlign: "center"
                        }}>
                            <div style={{ fontWeight: "bold" }}>Lưu ý:</div> Bạn được chọn 4 chỗ ngồi, nếu chọn sai hãy nhấn vào nút hoàn tác để chọn lại.<br></br>
                            <button onClick={this.resetSeatSelected} style={styles.resetBtn}>Chọn lại</button>
                        </div>
                        {/* Form */}
                        <form style={{
                            marginTop: "20px", width: "70%", margin: "auto"
                        }}>
                            <label>
                                <div style={styles.formLabel}>
                                    Họ và tên:
                                </div>
                                <input
                                    style={styles.formInput}
                                    onChange={this.handleChange}
                                    placeholder="Ví dụ: Nguyễn Văn A"
                                    value={fullName || ""}
                                    type="text"
                                    name="fullName" />
                            </label>
                            <label>
                                <div style={styles.formLabel}>
                                    Số điện thoại:
                                </div>
                                <input
                                    style={styles.formInput}
                                    onChange={this.handleChange}
                                    placeholder="Ví dụ: 0123456789"
                                    value={phoneNumber || ""}
                                    type="text"
                                    name="phoneNumber" />
                            </label>
                            <label>
                                <div style={styles.formLabel}>
                                    Tuổi:
                                </div>
                                <input
                                    style={styles.formInput}
                                    onChange={this.handleChange}
                                    placeholder="Ví dụ: 22"
                                    value={age || ""}
                                    type="text"
                                    name="age" />
                            </label>
                            <label>
                                <div style={styles.formLabel}>
                                    Ghế đã chọn:
                                </div>
                                <input
                                    style={{ ...styles.formInput, fontWeight: "bold", color: "black" }}
                                    disabled
                                    value={`${seatSelected[0].seat} ${seatSelected[1].seat} ${seatSelected[2].seat} ${seatSelected[3].seat}` || ""}
                                    type="text"
                                    name="seatSelected" />
                            </label>
                        </form>
                        <div style={{ width: "100%", height: "20px", float: "left" }}></div>
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
                    </div>
                </div>
                {/* Footer */}
                <FooterComponent />
            </div >
        );
    }
};

export default SelectSeatComponent;