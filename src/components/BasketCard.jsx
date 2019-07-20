import React from "react";
import croissant from "../images/croissant.svg"

class BasketCard extends React.Component {
  render() {
    const basket = this.props.basket
    console.log("rendering basket vcard props")
    console.log(this.props)
    return(
      <React.Fragment>
        <div className="basket-card" onClick={() => {this.props.showPopup(this.props.basket_id)}}>

          <div className="basket-icon">

            <img src={croissant} alt=""/>

          </div>

          <div className="basket-header">

            <h3>{basket.retail.name}</h3>

            <p className="address">
              {basket.retail.adress}
            </p>

            <p className="opening">
              <span className="today">opening hours for today : </span>
              <span className="hours">7:00 AM to 8:00 PM</span>
            </p>

          </div>

          <div className="basket-content">

            <img src={`https://14be4fe1.ngrok.io/${basket.picture_url}`} alt=""/>
            <p className="content-comment">
            {basket.description}
            </p>

          </div>

          <div className="basket-footer">
            <p className="basket-comments">7 comments</p>
            <p className="basket-photos"> {Math.floor(Math.random() * 10)} 3 photos</p>
          </div>


        </div>
        {/* end of .basket-card */}
      </React.Fragment>

    )
  }
}

export default BasketCard;
