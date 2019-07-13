import React from 'react';
// import { SearchResult} from './components/SearchResult'
import BasketCard from "../components/BasketCard"
import ImageUpload from '../components/ImageUpload'

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
    // this.fecthBasket();
  }

  fecthBasket = () => {

    // https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=-73.582,45.511&count=3
      return fetch(`https://sports.api.decathlon.com/sports?q=swim`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
            }
        }).then((response) => response.json())
        .then((data) => {
          if (data.error) {
            return false;
            // ERRORs
          } else {
            this.setState({ baskets: data })
          }
        });
    }


  addReview = () => {

  }

  render() {
    const { username } = this.props;
    return (
      <React.Fragment>
        { <BasketCard />  }
        <br/>
        <hr/>
        <br/>
          <ImageUpload />
        <br/>
        <br/>


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


