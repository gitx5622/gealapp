import React from 'react';
import { Grid, Row, Col} from 'rsuite';

const Footer = () => {
    return (
        <div>
           <footer style={{background:"#3498ff", padding:"20px", color: "white"}}>
               <Grid>
                   <Row>
                       <Col xs={6}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h5 style={{color:"black"}}>GEAL Limited</h5></center><br/>
                               <li>FAQ</li>
                               <li>About Us</li>
                               <li>Privacy Policy</li>
                           </ul>
                       </Col>
                       <Col xs={6}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h5 style={{color:"black"}}>GEAL Limited</h5></center><br/>
                               <li>FAQ</li>
                               <li>About Us</li>
                               <li>Privacy Policy</li>
                           </ul>
                       </Col>
                       <Col xs={6}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h5 style={{color:"black"}}>GEAL Limited</h5></center><br/>
                               <li>FAQ</li>
                               <li>About Us</li>
                               <li>Privacy Policy</li>
                           </ul>
                       </Col>
                       <Col xs={6}>
                           <ul style={{listStyle: 'none', fontSize:"18px", textAlign:"center"}}>
                               <center><h5 style={{color:"black"}}>GEAL Limited</h5></center><br/>
                               <li>FAQ</li>
                               <li>About Us</li>
                               <li>Privacy Policy</li>
                           </ul>
                       </Col>
                   </Row>
               </Grid>
           </footer>
        </div>
    );
};

export default Footer;