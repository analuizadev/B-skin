import Container from '../layout/Container';
import styles from './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephone} from 'react-icons/bs';

function Contact(){

    return(
        <>
            <Container>
                <div class="body">

                    <div class="help">
                        <h2>Get help</h2>
                        <div>
                            <ul>
                                <li>
                                    <h2>Delivery</h2>
                                    <div class="text">
                                        <p><a>Is it possible to change the delivery address after making the purchase?</a></p>
                                        <p><a>What should I do if I still haven't received my order and the delivery time has already passed?</a></p>
                                        <p><a>How to identify the best shipping option for my order?</a></p>
                                    </div>
                                </li>
                                <li>
                                    <h2>Returns</h2>
                                    <div class="text">
                                        <p><a>What is B-Skin's return policy?</a></p>
                                        <p><a>How do I return my B-Skin order?</a></p>
                                        <p><a>How to prepare a package or product for the return process?</a></p>
                                        <p><a>Where is my refund?</a></p>
                                    </div>
                                </li>
                                <li>
                                    <h2>Orders</h2>
                                    <div class="text">
                                        <p><a>Where is my Nike order?</a></p>
                                        <p><a>Can I cancel or change my B-Skin order?</a></p>
                                        <p><a>How do I find the right size and fit?</a></p>
                                        <p><a>Is it possible to change an order after closing?</a></p>
                                    </div>
                                </li>
                                <li>
                                    <h2>Payment</h2>
                                    <div class="text">
                                        <p><a>My ticket expired. How should I proceed?</a></p>
                                        <p><a>What is the approval period for my order?</a></p>
                                        <p><a>What payment options are available?</a></p>
                                    </div>
                                </li>
                                <li>
                                    <h2>General Questions</h2>
                                    <div class="text">
                                        <p><a>I don't remember my account password. How should I proceed?</a></p>
                                        <p><a>How do I make changes to my shopping cart?</a></p>
                                        <p><a>How to make a purchase at the B-Skin online store?</a></p>
                                    </div>
                                </li>
                                <li>
                                    <h2>Privacy Policy</h2>
                                    <div class="text">
                                        <p><a>Privacy Policy</a></p>
                                    </div>
                                </li>
                                <li>
                                    <h2>Service Terms</h2>
                                    <div class="text">
                                        <p><a>Service Terms</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="contact">
                        <h2>Contact Us</h2>
                        <p>Our service team is available from Monday to Friday from 8am to 8pm, except holidays.</p>
                        <div class="contact-body">
                            <ul>
                                <li>
                                    <h1><HiOutlineMail /></h1>
                                    <h2>Email</h2>
                                    <p>bskin@contact.com</p>
                                </li>
                                <li class="phone">
                                    <h1><BsTelephone /></h1>
                                    <h2>Phone</h2>
                                    <p>(63) 3009-3313</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </>
    )
}

export default Contact