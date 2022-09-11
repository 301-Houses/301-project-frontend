import React from "react";
import "./Footer.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Footer extends React.Component {
  render() {
    return (
      <div class="footer-clean">
        <footer>
          <div class="three-dev">
            {/* 1 div */}

            <div class="col-sm-4 col-md-3 item">
              <div class="col-lg-3 item social">
                <div id="Footer-logo">
                  <img src="./img/mg.jpg" /> {/* logo image */}
                </div>
                <a href="#">
                  <i class="icon ion-social-facebook">
                    <img src="./" />
                    {/* image for weps */}
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
                <p class="copyright">sweet home team</p>
              </div>
            </div>
            {/*  */}
            <div class="col-sm-4 col-md-3 item">
              {/* 2 div */}
              <ul>
                <li>
                  <img src="./" />
                  <a href="#">email@email.com</a>
                </li>
                <li>
                  <img src="./" />
                  <a href="#">07********</a>
                </li>
              </ul>
            </div>
            {/* div 3 */}
            <div>
              <div class="col-md-2">
                <h5 class="text-md-right">Contact Us</h5>
                <br />
              </div>
              <div class="col-md-5">
                <Form className="form">
                  <Form.Group className="input-email" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group  controlId="formBasicPassword">
                    <Form.Control className="input-massage" type="massage" placeholder="massage" />
                  </Form.Group>

                  <Button className="Button" variant="primary" type="submit">
                    send massage
                  </Button>
                </Form>
            
              </div>
            </div>
            {/*  */}
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
