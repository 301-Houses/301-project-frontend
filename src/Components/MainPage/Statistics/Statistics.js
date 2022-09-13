import React, { Component } from "react";
import "./Statistics.css";
import img1 from "../../assets/for-rent.png";
import img2 from "../../assets/for-sale.png";
import img3 from "../../assets/home.png";
import img4 from "../../assets/sold.png";
import $ from "jquery";
export class Statistics extends Component {
  render() {
    return (
      <div className="statisticsContainer">
        <div className="sectiontitle">
          <h2>Projects statistics</h2>
          <span className="headerLine"></span>
        </div>
        <div id="projectFacts" className="section className">
          <div className="fullWidth eight columns">
            <div className="projectFactsWrap ">
              <div
                className="item wow fadeInUpBig animated animated"
                data-number="12"
              >
                {/* <i className="fa fa-briefcase"></i> */}
                <p id="number1" className="number">
                  12
                </p>
                <span></span>
                <p>Projects done</p>
              </div>
              <div
                className="item wow fadeInUpBig animated animated"
                data-number="55"
              >
                {/* <i className="fa fa-smile-o"></i> */}
                <p id="number2" className="number">
                  55
                </p>
                <span></span>
                <p>Happy clients</p>
              </div>
              <div
                className="item wow fadeInUpBig animated animated"
                data-number="359"
              >
                {/* <i className="fa fa-coffee"></i> */}
                <p id="number3" className="number">
                  359
                </p>
                <span></span>
                <p>Cups of coffee</p>
              </div>
              <div
                className="item wow fadeInUpBig animated animated"
                data-number="246"
              >
                {/* <i className="fa fa-camera"></i> */}
                <p id="number4" className="number">
                  246
                </p>
                <span></span>
                <p>Photos taken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  /*
  componentDidMount() {
    $.fn.jQuerySimpleCounter = function (options) {
      var settings = $.extend(
        {
          start: 0,
          end: 100,
          easing: "swing",
          duration: 400,
          complete: "",
        },
        options
      );

      var thisElement = $(this);

      $({ count: settings.start }).animate(
        { count: settings.end },
        {
          duration: settings.duration,
          easing: settings.easing,
          step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
          },
          complete: settings.complete,
        }
      );
    };

    $("#number1").jQuerySimpleCounter({ end: 12, duration: 3000 });
    $("#number2").jQuerySimpleCounter({ end: 55, duration: 3000 });
    $("#number3").jQuerySimpleCounter({ end: 359, duration: 2000 });
    $("#number4").jQuerySimpleCounter({ end: 246, duration: 2500 });

    /* AUTHOR LINK 
    // $(".about-me-img").hover(
    //   function () {
    //     $(".authorWindowWrapper")
    //       .stop()
    //       .fadeIn("fast")
    //       .find("p")
    //       .addClass("trans");
    //   },
    //   function () {
    //     $(".authorWindowWrapper")
    //       .stop()
    //       .fadeOut("fast")
    //       .find("p")
    //       .removeClass("trans");
    //   }
    // );
  }

  */
}

export default Statistics;
/*
    <footer>
    <div  className="about-me-img">
        <a href="http://www.jakubtursky.sk" target="_blank">
        <img src="http://www.jakubtursky.sk/public/images/logo-brand-shadow-logo.png" alt="Jakub Turský" width="120px" />
        </a>
        <div  className="authorWindowWrapper">
            <div  className="authorWindow">
                <p><strong>Project statistics with counter </strong><br>
                    Created by - <a href="http://www.jakubtursky.sk" target="_blank"><strong>Jakub Turský</strong></a> <br>
                    For next info about me you can visit me site - <a href="http://www.jakubtursky.sk" target="_blank"> www.jakubtursky.sk </a> <br>
                </p>
            </div>
        </div>
    </div>
</footer>
*/

/*

      <div  classNameName="container2">
        <div  classNameName="card2">
          <img src={img3}  classNameName="img"></img>
          <label>100</label>
          <label>
            <span>Available</span>
          </label>
        </div>
        <div  classNameName="card2">
          <img src={img1}  classNameName="img"></img>
          <label>200</label>
          <label>
            <span>For-Rent</span>
          </label>
        </div>
        <div  classNameName="card2">
          <img src={img2}  classNameName="img"></img>
          <label>100</label>
          <label>
            <span>For-Sale </span>
          </label>
        </div>
        <div  classNameName="card2">
          <img src={img4}  classNameName="img"></img>
          <label>100</label>
          <label>
            <span>Sold</span>
          </label>
        </div>
      </div>

*/
