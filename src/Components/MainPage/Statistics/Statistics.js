import React, { Component } from "react";
import "./Statistics.css";
// import img1 from "../assets/for-rent.png";
// import img2 from "../assets/for-sale.png";
// import img3 from "../assets/home.png";
// import img4 from "../assets/sold.png";
import $ from "jquery";
export class Statistics extends Component {
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
    $("#number1").jQuerySimpleCounter({ end: 414, duration: 3000 });
    $("#number2").jQuerySimpleCounter({ end: 55, duration: 3000 });
    $("#number3").jQuerySimpleCounter({ end: 359, duration: 2000 });
    $("#number4").jQuerySimpleCounter({ end: 246, duration: 2500 });
  }

  render() {
    return (
      <div className="container2">
        <div className="card2">
          {/* <img src={"img3"} className="img"></img> */}
          <label id="number1" className="number">
            100
          </label>
          <label>
            <label className="text">Available</label>
          </label>
        </div>
        <div className="card2">
          {/* <img src={img1} className="img"></img> */}
          <label id="number2" className="number">
            200
          </label>
          <label>
            <label className="text">For-Rent</label>
          </label>
        </div>
        <div className="card2">
          {/* <img src={img2} className="img"></img> */}
          <label id="number3" className="number">
            100
          </label>
          <label className="text">For-Sale</label>
        </div>
        <div className="card2">
          {/* <img src={img4} className="img"></img> */}
          <label id="number4" className="number">
            100
          </label>
          <div>
            <label className="text" id="number2">
              Sold
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
