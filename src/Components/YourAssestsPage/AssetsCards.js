import React, { Component } from "react";
import AssetsModal from "./AssetsModal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import "./AssetsCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
export class AssetsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      housesArr: [],
      email: "",
      showModals: false,
      modalData: {},
      name: "",
    };
  }
  componentDidMount() {
    const { user } = this.props.auth0;
    this.setState({
      housesArr: this.props.userData,
      email: user.email,
    });

    console.log(this.state.email);
  }
  handelDelete = async (id) => {
    let result = await swal("Are you sure you want to do this?", {
      buttons: ["Cancel", true],
    });
    if (result) {
      console.log("asdasd");
      let email = this.state.email;
      console.log(id);
      axios
        .delete(`https://sell-houses-301.herokuapp.com/${id._id}/${email}`)
        .then((result) => {
          console.log("deleted");
          this.setState({
            housesArr: result.data,
          });
        });
    }
  };
  handelShow = (ele) => {
    this.setState({
      showModals: true,
      modalData: ele,
    });
  };
  handelSubmite = (e) => {
    e.preventDefault();

    console.log(e.target.status.value);
    let id = this.state.modalData._id;
    let email = this.state.email;
    let obj = {
      imgURL: e.target.imgURL.value,
      ownerName: e.target.ownerName.value,
      houseAddress: e.target.houseAddress.value,
      numOfRoomse: e.target.numOfRoomse.value,
      houseSize: e.target.houseSize.value,
      price: e.target.price.value,
      phoneNumber: e.target.phoneNumber.value,
      ispremium: e.target.ispremium.checked,
      status: this.state.name,
      isSold: false,
    };
    console.log(obj.stsus);

    axios
      .put(`https://sell-houses-301.herokuapp.com/house/${id}/${email}`, obj)
      .then((result) => {
        this.setState({
          housesArr: result.data,
        });
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      showModals: false,
    });
  };
  handelCloseOnHide = () => {
    this.setState({
      showModals: false,
    });
  };
  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target.theName);

    this.setState({
      name: e.target.id,
    });
  };

  render() {
    let Data = [];
    if (this.state.housesArr.length != 0) {
      Data = this.state.housesArr;
    } else {
      Data = this.props.userData;
    }

    return (
      <div style={{ marginTop: "140px", marginBottom: "140px" }}>
        <Row xs={1} md={3} className="g-4">
          {Data.map((ele) => {
            return (
              <Col>
                <div className="houseCard2">
                  <div id="houseCard_hover" className="houseCard_box">
                    <img className="img00" src={ele.imgURL} alt="#" />
                    <div className="det">
                      <div>
                        <h1>$ {ele.price} </h1>
                      </div>
                      <div>
                        <span id="loc">{ele.houseAddress}</span>
                      </div>

                      <div>
                        <span id="loc">{ele.ownerName}</span>
                      </div>
                    </div>
                    <div className=".btn">
                      <button
                        onClick={() => this.handelShow(ele)}
                        className="btn btn-outline-primary"
                        data-mdb-ripple-color="dark"
                      >
                        Edit House
                      </button>

                      <button
                        onClick={() => this.handelDelete(ele)}
                        className="btn btn-outline-primary"
                        data-mdb-ripple-color="dark"
                      >
                        Delete House
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <AssetsModal
          show={this.state.showModals}
          handelSubmite={this.handelSubmite}
          modalData={this.state.modalData}
          handelCloseOnHide={this.handelCloseOnHide}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default withAuth0(AssetsCards);
