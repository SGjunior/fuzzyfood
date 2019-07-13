import React from 'react';
import ImageUpload from './ImageUpload';

class Pickupdetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      basket: this.props.basket
		}
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
    	<div className="container">

    		<span onClick={this.props.closePopup}> close </span>

    		<h1>Restaurant name</h1>
    		<p>more infos</p>
    		<p>add comment</p>
	    	<div>
	    		<p>posted at ... by ...</p>
	    		<img src="https://source.unsplash.com/random/400x325" alt=""/>
	    		<p style={{textAlign:"left"}}><strong>Basket description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio molestias quidem ipsa aliquid atque eaque, nulla, vero hic placeat quas eligendi voluptates ducimus consequuntur voluptate excepturi rem eveniet! Ratione, repellat.</p>
	    	</div>


        { basket && basket["comments"] && (
            basket["comments"]
          )}


        <div>
          { basket.comment.map((comment) => {
            return (
              <p>
              <br/>
              {comment.value}
              </p>
            )
          })}
        </div>
	    	<div className="comments-container">
	    		<h3>add a comment</h3>
					<form>
					  <label>
					    <p>your comment:</p>
					    <input className="comments" type="text" name="name" id="comment" />
					  </label>
					  <input className="btn-primary" type="submit" value="ADD A COMMENT" onClick={this.handleFormUpload}/>
					  <button className="btn-secondary"> back to homepage</button>
					</form>
	    	</div>
    	</div>
    )
  }
}

export default Pickupdetails;
