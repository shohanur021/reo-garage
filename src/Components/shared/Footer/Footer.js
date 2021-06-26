import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer id="aboutUs" className='text-center' style={{ backgroundColor: '#f5bcd3' }}>
            <div className="row w-100 p-3">
                <div className="col-md-4 borderCol">
                    <address className="d-flex flex-row">
                    <FontAwesomeIcon className="d-flex align-self-center mr-2" icon={faMapMarkerAlt} size="2x" style={{color: 'rgb(43, 69, 100)' }}/>
                        <h4 style={{textAlign:'left'}}>
                            House#501, Rode#34, New DOHS, Mohakhali
                        </h4>
                    </address>
                </div>
                <div className="col-md-2 borderCol">
                    <h5>Company</h5>
                    <p className="m-0">About</p>
                    <p className="m-0">Project</p>
                    <p className="m-0">Our Team</p>
                    <p className="m-0">Partner Info</p>
                </div>
                <div className="col-md-2 borderCol">
                    <h5>Quick Links</h5>
                    <p className="m-0">Rental</p>
                    <p className="m-0">Scale</p>
                    <p className="m-0">Our blogs</p>
                    <p className="m-0">glory</p>
                </div>
                <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>We always provide you best services</p>
                    <div className="iconsStyle">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="3x" style={{ backgroundColor: "white", color: 'rgb(43, 69, 100)', borderRadius: '5px' }} />
                        </a>
                        <a href="https://twitter.com/link?lang=en" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="3x" style={{ backgroundColor: "#2DA9C8", color: "white", marginLeft: '25px', borderRadius: '5px' }} />
                        </a>
                        <a href="https://www.youtube.com/watch?v=DNfxdWorwwA" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutubeSquare} size="3x" style={{ backgroundColor: "white", color: "red", marginLeft: '25px', borderRadius: '5px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;