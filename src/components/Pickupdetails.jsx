import React from 'react';
import ImageUpload from './ImageUpload';

class Pickupdetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
  render() {
    return(
    	<div className="container">
    		<br/>
    		<br/>
    		<br/>
    		<span onClick={this.props.closePopup}> test </span>
    		<h1>Restaurant name</h1>
    		<p>more infos</p>
    		<p>add comment</p>
	    	<div>
	    		<p>posted at ... by ...</p>
	    		<img src="https://source.unsplash.com/random/400x325" alt=""/>
	    		<p style={{textAlign:"left"}}><strong>Basket description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio molestias quidem ipsa aliquid atque eaque, nulla, vero hic placeat quas eligendi voluptates ducimus consequuntur voluptate excepturi rem eveniet! Ratione, repellat.</p>
	    	</div>




	    	<div className="comments-container">
	    		<h3>add a comment</h3>
					<form>
					  <label>
					    <p>your comment:</p>
					    <input className="comments" type="text" name="name" />
					  </label>
					  <input className="btn-primary" type="submit" value="ADD A COMMENT" />
            <ImageUpload />
					  <button className="btn-primary"> BACK TO HOMEPAGE</button>
					</form>
	    	</div>
    	</div>
    )
  }
}

export default Pickupdetails;
