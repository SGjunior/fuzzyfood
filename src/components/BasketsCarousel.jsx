import React from "react";
import BasketCard from "./BasketCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class BasketsCarousel extends React.Component {

  render() {
    const rawBasketsData = this.props.baskets
    // need to add that condition because
    // baskets is null (see state in app)
    // at the beginning
    let basketsData = null;

    if (rawBasketsData) {
      console.log('all baskets (carrousel) :', rawBasketsData)
      basketsData = rawBasketsData
    }

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(

      <div className="baskets-carousel">

      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        >

        {basketsData ?
          basketsData.map( b => <BasketCard basket={b} basket_id={b.id} key={b.id} showPopup={this.props.showPopup} /> ) :
          <h4>there are no basket for the moment.</h4>}



      </Carousel>

      </div>
    )
  }
}

export default BasketsCarousel;

