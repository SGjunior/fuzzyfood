import React from "react";
// import Slider from "react-slick";
import BasketCard from "./BasketCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class BasketsCarousel extends React.Component {

  render() {
    const allBaskets = this.props.baskets
    // need to add that condition because
    // baskets is null (see state in app)
    // at the beginning
    if (allBaskets) {
      console.log('all baskets :', allBaskets["data"])
    }

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


      // { allBaskets ?
      //   <Carousel >
      //     {allBaskets["data"].map( b => <BasketCard key={b.id} />)}
      //   </Carousel> :
      //   <p>there are no basket in your area for the moment.</p>
      // }
