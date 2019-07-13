import React from 'react';
import ImageUpload from './ImageUpload';
import Popup from './Popup';

class Pickupdetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopup: false,
       basket: this.props.basket
		}
	}

	togglePopup() {
		this.setState({
		   showPopup: !this.state.showPopup
		});
	}


  handleFormUpload = (event) => {
    event.preventDefault();
    const comment = document.getElementById("comment").value;

    const currentBasket = this.state.basket;
    // const currentComments = currentBasket.comment
    console.log(comment)
    console.log(currentBasket["comment"])
    const newComments = currentBasket["comment"]
    newComments.push({ value: comment })
    console.log(newComments)


    currentBasket["comment"] = newComments;
    // const newBasket = { comment: newComments, ...currentBasket }
    console.log(console.log(currentBasket))
    this.setState({ basket: currentBasket })
    // console.log("currentBasket")
    // console.log(currentBasket)
    // this.sendComment(comment)
    // this.sendComment(comment)
    // .then((data => {
    //   console.log("received data")
    //   console.log(data)

    //     this.setState({ basket: data })
    // }))
    document.getElementById("comment").value = " "

  }

sendComment = (comment) => {

    // return fetch(`https://14be4fe1.ngrok.io/baskets/${this.props.basket[0].id}/update`, {
    //   method: "POST",
    //   headers: {
    //       "Content-Type": "application/json"
    //     },
    //   body: JSON.stringify({ comment: comment })
    // }).then(response => response.json())
    // .then(data => {
    //   if (data.error) {

    //     return false;
    //   } else {
    //   console.log("received data")
    //   console.log(data)
    //     return data;
    //   }
    // })
  }


  render() {
    // const { basket } = this.state;
    console.log("rendering details : ")

    // console.log(basket)
    const basket = this.state.basket

    console.log(basket)
    // console.log(typeof this.state.basket)
    // let basket = null
    // if (typeof this.state.basket != "object" ) {
      // basket = JSON.parse(this.state.basket);

    // }


    return(
      <React.Fragment>

    	<div className="container">
	    	<div>
					<button onClick={this.togglePopup.bind(this)}> <p>more info</p></button>
					{
						this.state.showPopup && (
							<Popup
								text="hackerfest
									<h3>65 Chemin des Floralies</h3>
									<p>open hours: right now</p>"
			          closePopup={this.togglePopup.bind(this)}
							/>
						)
					}
				</div>

    		<h1>{basket.retail.name}</h1>
    		<p>{basket.retail.adress}</p>
        <a href="#comment-form">add a comment</a>


	    	<div>
	    		<p>posted at 7:AM</p>
	    		<img src={`https://14be4fe1.ngrok.io/${basket.picture_url}`} alt=""/>
	    		<p><strong>Basket description:</strong><br/> {basket.description}</p>
	    	</div>


        { basket && basket["comments"] && (
            basket["comments"]
          )}


        <div>
          { basket.comment.map((comment) => {
            return (
              <p>
              {comment.value}
              </p>
            )
          })}

        </div>
	    	<div className="comments-container">
	    		<h3>add a comment</h3>
					<form id="comment-form">
					  <label>
					    <p>your comment:</p>
					    <input className="comments" type="text" name="name" id="comment" />
					  </label>
					  <input className="btn-primary" type="submit" value="ADD A COMMENT" onClick={this.handleFormUpload}/>
					  <button className="btn-secondary"> back to homepage</button>
					</form>
	    	</div>
    	</div>
						</React.Fragment>

    )
  }
}

export default Pickupdetails;
