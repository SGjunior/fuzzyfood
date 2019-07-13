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

        {basketsData ?
          basketsData.map( b => <BasketCard basket={b} key={b.id} /> ) :
          <h4>there are no basket for the moment.</h4>}



      </Carousel>

      </div>
    )
  }
}

export default BasketsCarousel;

