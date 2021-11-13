import React from 'react';
import { Grid, Row, Col} from 'rsuite';

const Footer = () => {
    return (
        <div>
           <footer style={{fontFamily: "Quicksand, sans-serif", background:"#2a465c", padding:"20px", color: "white"}}>
               <Grid>
                   <Row>
                       <Col xs={24} sm={24} md={8}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h5>About Us</h5></center><br/>
                               <p>
                                   Quickfix was created with the sole intention of providing
                                   our customers with a nationwide service that is both fast and reliable.
                               </p>
                           </ul>
                       </Col>
                       <Col xs={24} sm={24} md={8}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h4>Follow Us</h4></center><br/>
                               <li>Twitter</li>
                               <li>Facebook</li>
                               <li>Google plus</li>
                               <li>Youtube</li>
                           </ul>
                       </Col>
                       <Col xs={24} sm={24} md={8}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h4>Contact Us</h4></center><br/>
                               <li>Phone : 0722779770</li>
                               <li>Email : Info@QuicKfix-Si.Com</li>
                               <li>Address : Po box   4788 -00200 City Square Nairobi</li>
                           </ul>
                       </Col>
                   </Row>
               </Grid>
           </footer>
        </div>
    );
};

export default Footer;