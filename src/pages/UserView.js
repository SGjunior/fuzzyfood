import React from 'react';
// import { SearchResult} from './components/SearchResult'

import BasketsCarousel from "../components/BasketsCarousel"
import Pickupdetails from "../components/Pickupdetails"

class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baskets: null,
      results: null,
      popup: 224,
      hoursMenuState: false
    }
  }

  componentDidMount() {
    this.fetchBasket();
  }

  fetchBasket = () => {

    // https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=-73.582,45.511&count=3
      return fetch(`https://sports.api.decathlon.com/sports?q=swim`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
            }
        }).then(response => response.json())
        .then((data) => {
          if (data.error) {
            return false;
            // ERRORs
          } else {
            console.log(data)
            this.setState({ baskets: data })
          }
        });
    }

    showPopup = (popupId) => {
      // get clicked basket id
      this.setState({ popup: popupId })
    }


    closePopup = (e) => {
      // get clicked basket id
      this.setState({ popup: 0 })
    }

  addReview = () => {
    this.props.changePage("login")
  }

  render() {

    // console.log("username" + this.state.username)
    const { username } = this.props;
    const allBaskets = this.state.baskets
    console.log(allBaskets)

    let basket = null;
    if (allBaskets) {
      basket = allBaskets["data"].find((basket) => {
        return basket.id === this.state.popup
      })  
    }
    console.log("basket")
    console.log(basket)

    return (
      <React.Fragment>
        <div className="user-view-container">
        {
          this.state.popup  === 0 && (
            <React.Fragment>
              <h1>hello, bob</h1>
              <h4>baskets near you :</h4>
               <BasketsCarousel baskets={allBaskets}/>}
            </React.Fragment>
          )
        }

        {this.state.popup  > 0 && <Pickupdetails basket={basket} closePopup={this.closePopup } />}

        </div>
      </React.Fragment>
    )
  }
}

export default UserView;


  // // 1. Fetch list of customers matchin input values.



  // handleInputChange = (e) => {
  //   const value = e.target.value;

  //   this.setState({ searchValue: value });

  //   debounceRecommendations(value);
  // }

  // queryRecommendations = () => {
  //   this.setState({ loading: true })

  //   // fecthCustomersByFirstNameAndLastName(this.props.sessionData, this.state.firstName, this.state.lastName)
  //   // .then((results) => {
  //   //   if (results) {
  //   //     this.setState({
  //   //       customerMatches: results,
  //   //       selectedCustomerId: results.length !== 0 ? results[0]["id"] : null,
  //   //       loading: false
  //   //     });
  //   //   }
  //   // })
  // }


