import React, {Component} from 'react';
import './ContactUs.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.jumpRef = React.createRef();
    }

    componentDidMount() {
        this.jumpRef.current.scrollIntoView();
    }

    render() {
        const style = { width: '400px', height: '400px' }
        const containerStyle = { position: 'relative' }
        return (

        <div className='contact' ref={this.jumpRef}>
            <h1>Contact Us</h1>
            <h2>Fashion Dome Store</h2>
            <p>Fill out the form below and a representative will contact you by e-mail or phone within 24 business hours.</p>
            <div className="contact-form">
				<form action="contact.php" method="post" name="contact" className="form-part0" id="contact-form">
					
					<div className="form-part1">
						<input type="text" id="name" name="name" placeholder="Name" maxLength="40" />
						<div className="formname"></div>
						<input type="email" id="email" name="email" placeholder="Email" maxLength="40" />
						<div className="formemail"></div>
					</div>

					<div className="form-part2">
						<input type="text" id="subject" name="subject" placeholder="Subject" />
						<div className="formsubject"></div>
					</div>

					<div className="form-part3">
						<textarea id="message" name="message" rows="6" placeholder="Message" maxLength="500"></textarea>
						<div className="formmessage"></div>
					</div>

					<div className="form-button">
						<input type="button" value="Send" id="form-button" name="form-button" onClick={() => alert('This website is only a presentation')} />
					</div>
				</form>
			</div>
            <div className='contact-map'>
                <Map 
                    google={this.props.google} 
                    zoom={13}
                    initialCenter={{
                        lat: 40.73253537695762,
                        lng: -74.00523489019966
                    }}
                    style={style}
                    containerStyle={containerStyle}
                >
                <Marker />
                </Map>
            </div>
        </div>
           
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('')
   }) (ContactUs);