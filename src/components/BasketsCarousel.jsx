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
    let basketsData

    if (rawBasketsData) {
      console.log('all baskets :', rawBasketsData.data)
      basketsData = rawBasketsData.data
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

        <BasketCard />
        <BasketCard />
        <BasketCard />

      </Carousel>

      </div>
    )
  }
}

export default BasketsCarousel;

