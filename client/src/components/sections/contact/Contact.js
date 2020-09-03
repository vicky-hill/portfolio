import React from 'react';
import picture from '../../../images/vicky.png';

const Contact = () => {
    return (
        <section id="contact" >
            <div className="section footer">

                <div className="row">
                    <div className="col col1">
                        <img class="hide" id="potrait" src={picture} />
                    </div>

                    <div className="col col2">
                        <h2 id="letschat">Let's Chat!</h2>
                        <p id="contactmeat">Contact me at</p>
                        <p id="contactmeatb">vicky.ungemach95@gmail.com</p>
                        <br />
                        <p id="contactmeat">or give me a call</p>
                        <p id="contactmeatb"><b>(213) 284-2812</b></p>
                    </div>
                </div>


            </div>
            <div className="copyright">
                <p id="copyright">COPYRIGHT © VICKY UNGEMACH 2020</p>
            </div>
        </section>
    )
}

export default Contact;