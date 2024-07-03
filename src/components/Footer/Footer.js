import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";


const Footer = () => {
    return (
        
        <Box>
            <h1
                style={{
                    color: "#c02755",
                    textAlign: "center",
                    marginTop: "10px",
                    fontFamily: "Quicksand",
                    fontSize: "35px",
                }}
            >
                 Please reach out:
            </h1>
            <FooterContainer>
                <Row>

                    <Column>
                        <Heading>Our Location</Heading>
                        <p 
                            style={{
                                    color: "white",
                                    textAlign: "center",
                                    marginTop: "5px",
                                    fontSize: "18px",
                                    fontFamily: "Quicksand",
                            }}>
                    23 Dan Leckie Way, Toronto, Canada M5V 7N8 </p>
                    </Column>
                    
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="mailto:info@platformart.com">
                            Email: info@platformart.com
                        </FooterLink>
                        <FooterLink href="tel:+1649859501">
                            Phone: +1649859501
                        </FooterLink>
                        <FooterLink target="_blank" href="https://www.tripadvisor.com/">
                            Tripadvisor
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink target="_blank" href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink target="_blank" href="https://www.instagram.com/">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink target="_blank" href="https://www.twitter.com/">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                    
                </Row>
            </FooterContainer>
            <p
                style={{
                color: "white",
                textAlign: "center",
                marginTop: "25px",
                fontFamily: "Quicksand",
                
                }}>
                    © 2024 Platformart. All rights reserved</p>
        </Box>
    );
};
export default Footer;