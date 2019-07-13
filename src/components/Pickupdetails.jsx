import React from 'react';
import ImageUpload from './ImageUpload';
import Popup from './Popup';

class Pickupdetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopup: false
		}
	}

	togglePopup() {  
		this.setState({  
		   showPopup: !this.state.showPopup  
		});  
	}

  render() {
    return(

						<React.Fragment>
    	

    	<div className="container">
    		<span onClick={this.props.closePopup}> close </span>
    		<h1>Restaurant name</h1>

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
					  <button className="btn-secondary"> back to homepage</button>
            <ImageUpload />
					</form>
	    	</div>
    	</div>
						</React.Fragment>

    )
  }
}

export default Pickupdetails;
