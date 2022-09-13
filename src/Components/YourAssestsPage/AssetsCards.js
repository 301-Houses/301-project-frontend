import React, { Component } from 'react'
import AssetsModal from './AssetsModal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { withAuth0 } from "@auth0/auth0-react";
export class AssetsCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            housesArr: [],
            email: "",
            showModals: false,
            modalData: {},
            name:""
        }

    }
    componentDidMount() {
        const { user } = this.props.auth0;
        this.setState({
            housesArr: this.props.userData,
            email: user.email
        })


        console.log(this.state.email)
    }
    handelDelete = (id) => {
        let email = this.state.email
        axios.delete(`http://localhost:3001/house/${id}/test2@gmail.com`).then(result => {
            this.setState({
                housesArr: result.data
            })


        })


    }
    handelShow = (ele) => {

        this.setState({
            showModals: true,
            modalData: ele

        })

    }
    handelSubmite=(e) => {
        e.preventDefault()
    
        console.log(e.target.status.value)
        let id=this.state.modalData._id
        let email=this.state.email
        let obj = {
            imgURL:e.target.imgURL.value,
            ownerName:e.target.ownerName.value,
            houseAddress:e.target.houseAddress.value,
            numOfRoomse:e.target.numOfRoomse.value,
            houseSize:e.target.houseSize.value,
            price:e.target.price.value,
            phoneNumber:e.target.phoneNumber.value,
            ispremium:e.target.ispremium.checked,
            status:this.state.name,
            isSold: false
        }
        console.log(obj.stsus)
        
         axios.put(`http://localhost:3001/house/${id}/test2@gmail.com`,obj).then(result=>{
          this.setState({
            housesArr:result.data
          })
          console.log(result.data)

         }).catch(err=>{
          console.log(err)
         })
        this.setState({
            showModals: false

        })
    }
    handelCloseOnHide = () => {
        this.setState({
            showModals: false

        })

    }
    handleChange=(e)=>{
        console.log("hello")
        
        console.log(e.target.id)
        this.setState({
            name:e.target.id
        })
    }

    
    render() {

        let Data = [];
        if (this.state.housesArr.length != 0) {
            Data = this.state.housesArr
        }
        else {
            Data = this.props.userData;
        }


        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {Data.map(ele => {
                        return (
                            <Col>
                                <div className="services" >
                                    <div id="serv_hover" className="services_box">
                                        <img className="img00" src={ele.imgURL} alt="#" />
                                        <h1>For sell</h1>
                                        <p id="status"> {ele.isSold ? "sold" : "available"} </p>
                                        <p>{ele.houseAddress}</p>
                                        <button onClick={() => this.handelShow(ele)}>Edit House</button>
                                        <button onClick={() => { this.handelDelete(ele._id) }}> Delet House</button>
                                    </div>


                                </div>
                            </Col>
                        )

                    })}
                </Row>
                <AssetsModal show={this.state.showModals} handelSubmite={this.handelSubmite} modalData={this.state.modalData} handelCloseOnHide={this.handelCloseOnHide} handleChange={this.handleChange} />

            </>
        )
    }
}

export default withAuth0(AssetsCards)