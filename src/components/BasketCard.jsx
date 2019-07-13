import React from "react";
import croissant from "../images/croissant.svg"

class BasketCard extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="basket-card" onClick={() => {this.props.showPopup(this.props.basket_id)}}>

          <div className="basket-icon">

            <img src={croissant} alt=""/>

          </div>

          <div className="basket-header">

            <h3>automne</h3>

            <p className="address">
              6500 Ave Christophe-Colomb, <br/>
              Montréal, QC H2S 2G8
            </p>

            <p className="opening">
              <span className="today">opening hours for today : </span>
              <span className="hours">7:00 AM to 8:00 PM</span>
            </p>

          </div>

          <div className="basket-content">

            <img src="https://source.unsplash.com/random/400x325" alt=""/>
            <p className="content-comment">
            « we have a batch of smashed strawberry pies that we cannot sell. they will be good until tomorrow, come and pick them up ! »
            </p>

          </div>

          <div className="basket-footer">
            <p className="basket-comments">7 comments</p>
            <p className="basket-photos">3 photos</p>
          </div>


        </div>
        {/* end of .basket-card */}
      </React.Fragment>

    )
  }
}

export default BasketCard;
