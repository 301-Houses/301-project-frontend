import React, { Component } from 'react'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalsBrowseHouses from './ModalsBrowseHouses'
import axios from 'axios'
export class CardsBrowseHouses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModals: false,
            modalData: {},
            sold: false
        };

    }
    handelShow = (ele) => {
        this.setState({
            showModals: true,
            modalData: ele

        })

    }
    handelClose = () => {
        let data = this.state.modalData
        console.log(data)
        let obj = {
            imgURL: data.imgURL,
            ownerName: data.ownerName,
            houseAddress: data.houseAddress,
            email: data.email,
            houseSize: data.houseSize,
            numOfRoomse: data.numOfRoomse,
            isSold: true,
            price: data.price,
            phoneNumber: data.phoneNumber,
            status: data.status
        }

        axios.put(`http://localhost:3001/house/${data._id}`, obj).then(result => {
            this.setState({
                sold: result.data.isSold
            })
            console.log(this.state.sold)
            this.setState({
                showModals: false

            })
        })

    }

    handelCloseOnHide = () => {
        this.setState({
            showModals: false

        })

    }
    render() {
        return (<>
            <Row xs={1} md={3} className="g-4">
                {this.props.cardsHouses.map(ele => {
                    return (
                        <Col>
                            <div className="services" onClick={()=>{this.handelShow(ele)}}>
                                <div id="serv_hover" className="services_box">
                                    <img className="img00" src={ele.imgURL} alt="#" />
                                    <h1>For sell</h1>
                                     <p id="status"> {ele.isSold?"sold":"available"} </p>
                                    <p>{ele.houseAddress}</p>
                                </div>


                            </div>
                        </Col>
                    )

                })}
            </Row>
            <ModalsBrowseHouses show={this.state.showModals} handelClose={this.handelClose} modalData={this.state.modalData} handelCloseOnHide={this.handelCloseOnHide} />

        </>
        )
    }
}

export default CardsBrowseHouses