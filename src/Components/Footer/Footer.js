import React from "react";
import "./Footer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "./Logo1.png";

class Footer extends React.Component {
  render() {
    return (
      <>
      <footer
        className="FooterContainer
    "
      >
        <div className="socialDiv">
          <div id="Footer-logo">
            <img
              src={logo}
              width={"200px"}
            />
          </div>
          <div className="iconsDiv">
            <a href="#">
              <i class="icon ion-social-facebook">
                <img class="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png" />
              </i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter">
                <img class="icons" src="https://www.nicepng.com/png/full/130-1309928_free-png-twitter-icon-ios-7-png-images.png" />
              </i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat">
                <img class="icons" src="https://i0.wp.com/logotaglines.com/wp-content/uploads/2021/09/Snapchat-Logo-Tagline-Slogan-Owner-Developer-Founder.jpg?fit=640%2C640&ssl=1" />
              </i>
            </a>
            <a href="#">
              <i class="icon ion-social-instagram">
                <img class="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346" />
                
              </i>
            </a>
          </div>
          <p class="copyright">sweet home team</p>
        </div>

        <div className="midDiv">
          <div className="midDivItem">
            <img class="icons" src="https://pixy.org/download/101169/"  />
            <a href="#">email@email.com</a>
          </div>
          <div className="midDivItem">
            <img class="icons" src="https://i.pinimg.com/736x/00/3d/ff/003dfff29dc38294446b0a306d0e5079.jpg"  />
            <a href="#">0712345678</a>
          </div>
        </div>

        <div className="messageDiv">
          <h3>Contact us</h3>
          <Form className="form">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="input-email inputs"
                placeholder="Enter email"
              />
            </Form.Group>

            <textarea></textarea>

            <Button className="Button" variant="primary">
              <a href="mailto: test@gmail.com ? {asdasdasdasdasd}= {Test} & body = {test again}">
                send{" "}
              </a>
            </Button>
          </Form>
        </div>
      </footer>
    </>
    );
  }
}
export default Footer;
