import React from "react";
import BasketCard from "./BasketCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class BasketsCarousel extends React.Component {

  render() {
    const allBaskets = this.props.baskets
    // need to add that condition because
    // baskets is null (see state in app)
    // at the beginning
    let basketsData
    if (allBaskets) {
      console.log('all baskets :', allBaskets.data)
      basketsData = allBaskets.data
    }
    // console.log('testing baskets:', basketsData)

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

