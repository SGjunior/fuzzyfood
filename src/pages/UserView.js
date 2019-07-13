import React from 'react';
// import { SearchResult} from './components/SearchResult'
import BasketsCarousel from "../components/BasketsCarousel"

class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baskets: null,
      results: null,
      popup: false,
      hoursMenuState: false
    }
  }

  componentDidMount() {
    this.fetchBasket();
  }

  fetchBasket = () => {

    // https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=-73.582,45.511&count=3
      return fetch(`https://14be4fe1.ngrok.io/baskets`, {
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
            console.log('new data', data)
            this.setState({ baskets: JSON.stringify(data) })
          }
        }
      );
    }


  addReview = () => {
    this.props.changePage("login")
  }

  render() {

    // console.log("username" + this.state.username)
    const { username } = this.props;
    const allBaskets = JSON.parse(this.state.baskets)
    return (
      <React.Fragment>
        <div className="user-view-container">

          <h1>hello, bob</h1>
          <h4>baskets near you :</h4>

          <BasketsCarousel baskets={allBaskets} />

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


