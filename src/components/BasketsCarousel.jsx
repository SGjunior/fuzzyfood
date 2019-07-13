import React from "react";
import Slider from "react-slick";
import BasketCard from "./BasketCard";

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
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    // console.log('testing baskets:', basketsData)
    return(
      <div className="baskets-carousel">
      { basketsData ?
        <Slider {...sliderSettings}>
          {basketsData.data.map( b => <BasketCard key={b.id} />)}
        </Slider> :
        <p>there are no basket in your area for the moment.</p>
      }

      </div>
    )
  }
}

export default BasketsCarousel
;
