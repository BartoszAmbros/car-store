import React from 'react'

function Contact() {
    return (
        <div className="contact-component">
            <h3>Our stores</h3>
            <div className="contact-content">
                <article>
                    <h4>Store 1</h4>
                    <img src="https://www.carstore.com/-/media/carstore/locations/car-store-gloucester-1200x675px.ashx" alt="" />
                    <p>Location: London, Howard Street</p>
                    <p>Email: <a href="mailto:">london.howard@carstore.com</a></p>
                    <p>Phone: <a href="tel:+">123456789</a></p>
                </article>
                <article>
                    <h4>Store 2</h4>
                    <img src="https://glyntaylorwilliams.com/wp-content/uploads/2020/09/Car-Store-Background.jpg" alt="" />
                    <p>Location: Birmingham, Radford Road</p>
                    <p>Email: <a href="mailto:">birmingham.radford@carstore.com</a></p>
                    <p>Phone: <a href="tel:+">123456789</a></p>
                </article>
                <article>
                    <h4>Store 3</h4>
                    <img src="https://i.dailymail.co.uk/1s/2019/09/18/11/18619048-0-image-a-47_1568804037184.jpg" alt="" />
                    <p>Location: Leeds, Water Lane</p>
                    <p>Email: <a href="mailto:">leeds.water@carstore.com</a></p>
                    <p>Phone: <a href="tel:+">123456789</a></p>
                </article>
            </div>
        </div>
    );
}

export default Contact;