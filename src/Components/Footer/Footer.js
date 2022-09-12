import React from "react";
import "./Footer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-be453KJhBoemf-BLoPq0C2Kuj8YdyVV-Q&usqp=CAU"
                width={"80px"}
              />
            </div>
            <div className="iconsDiv">
              <a href="#">
                <i class="icon ion-social-facebook">
                  <img src="asdasd" />
                </i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter">
                  <img src="./" />
                </i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat">
                  <img src="./" />
                </i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram">
                  <img src="./" />
                </i>
              </a>
            </div>
            <p class="copyright">sweet home team</p>
          </div>

          <div className="midDiv">
            <div className="midDivItem">
              <img src="./" width={"40px"} />
              <a href="#">email@email.com</a>
            </div>
            <div className="midDivItem">
              <img src="./" width={"40px"} />
              <a href="#">07********</a>
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
