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
      popup: 0,
      hoursMenuState: false
    }
  }

  componentDidMount() {
    this.fetchBasket();
  }

  fetchBasket = () => {

    // https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=-73.582,45.511&count=3
      return fetch(`https://floating-beach-89597.herokuapp.com/baskets`, {
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
            console.log('raw data : ', JSON.parse(data["data"]))
            this.setState({ baskets: JSON.parse(data["data"]) })
          }
        }
      );
    }

    showPopup = (popupId) => {
      // set the state with the id of the retail
      this.setState({ popup: popupId })
    }


    closePopup = (e) => {
      // set the popup state back to 0
      this.setState({ popup: 0 })
    }

    addReview = () => {
      this.props.changePage("login")
    }

  render() {

    const { username } = this.props;
    const allBaskets = this.state.baskets


    //pop up logic

    let basket = null;
    if (allBaskets) {
      console.log('all baskets from json :', allBaskets)
      console.log(typeof allBaskets)
      basket = allBaskets.find((basket) => {
        return basket.id === this.state.popup
      })
    }


    // let basketsRawData = []
    // console.log('basket raw data :', basketsRawData)
    // if (basketsRawData) {
    //   basketsRawData = JSON.parse(this.state.baskets)
    // }

    console.log("rendering")
    console.log(allBaskets)

    return (
      <React.Fragment>

        <div className="user-view-container container">
        {
          (this.state.popup  === 0 && allBaskets) &&  (
            <React.Fragment>
              <h1>hello, bob</h1>
              <h4>baskets near you :</h4>
               <BasketsCarousel baskets={allBaskets} showPopup={this.showPopup} />
              }
            </React.Fragment>
          )
        }

        {(this.state.popup  > 0 && basket) && ( <Pickupdetails basket={basket} closePopup={this.closePopup } /> )}

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


