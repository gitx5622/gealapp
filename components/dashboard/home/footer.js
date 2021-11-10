import React from 'react';
import { Grid, Row, Col} from 'rsuite';

const Footer = () => {
    return (
        <div>
           <footer style={{fontFamily: "Quicksand, sans-serif", background:"#2a465c", padding:"20px", color: "white"}}>
               <Grid>
                   <Row>
                       <Col xs={6}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h4>QUICKFIX-SI</h4></center><br/>
                               <li>FAQ</li>
                               <li>About Us</li>
                               <li>Privacy Policy</li>
                           </ul>
                       </Col>
                       <Col xs={6}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h5>QUICKFIX-SI</h5></center><br/>
                               <li>FAQ</li>
                               <li>About Us</li>
                               <li>Privacy Policy</li>
                           </ul>
                       </Col>
                       <Col xs={6}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h5>QUICKFIX-SI</h5></center><br/>
                               <li>FAQ</li>
                               <li>About Us</li>
                               <li>Privacy Policy</li>
                           </ul>
                       </Col>
                       <Col xs={6}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h4>About Us</h4></center><br/>
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