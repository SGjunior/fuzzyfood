import React from 'react';
import {IoIosCloseCircleOutline} from 'react-icons/io'

class Popup extends React.Component {  
  render() {  
return (  
			<div className='popup'>  
				<div className='popup\_inner'>  
					<div className="close-circle-box">
						<IoIosCloseCircleOutline className="close-circle" onClick={this.props.closePopup}/>
					</div>
					<h1>{this.props.text}</h1>
				</div>  
			</div>  
			);  
		}  
	}  

export default Popup;

