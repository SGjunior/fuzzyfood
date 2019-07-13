import React from 'react';

class Pickupdetails extends React.Component {
  render() {
    return(
    	<div className="container">
    		<h1>Restaurant name</h1>
    		<p>more infos</p>
    		<p>add comment</p>
	    	<div>
	    		<p>posted at ... by ...</p>
	    		<img src="https://source.unsplash.com/random/400x325" alt=""/>
	    		<p style={{textAlign:"left"}}>Basket description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio molestias quidem ipsa aliquid atque eaque, nulla, vero hic placeat quas eligendi voluptates ducimus consequuntur voluptate excepturi rem eveniet! Ratione, repellat.</p>
	    	</div>

	    	<div className="comments-container">
					<form>
					  <label>
					    <p>your comment:</p> 
					    <input className="comments" type="text" name="name" />
					  </label>
					  <input className="btn-primary" type="submit" value="ADD A COMMENT" />
					</form>
	    	</div>
    	</div>
    )
  }
}

export default Pickupdetails;
