import React from "react";
import Slider from "react-slick";
import BasketCard from "./BasketCard";

class BasketsCarousel extends React.Component {

  render() {
    const allBaskets = this.props.baskets
    // need to add that condition because
    // baskets is null (see state in app)
    // at the beginning
    if (allBaskets) {
      console.log('all baskets :', allBaskets["data"])
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
      { allBaskets ?
        <Slider {...sliderSettings}>
          {allBaskets["data"].map( b => <BasketCard key={b.id} />)}
        </Slider> :
        <p>there are no basket in your area for the moment.</p>
      }

      </div>
    )
  }
}

export default BasketsCarousel
;
