import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const officePosition = [4.837170740460468, 7.010718374473379]

const officeIcon = L.divIcon({
    className: 'custom-pin-wrapper',
    html: '<div class="custom-pin"><span></span></div>',
    iconSize: [42, 52],
    iconAnchor: [21, 52],
    popupAnchor: [0, -48]
})

const OfficeMap = () => (
    <div className="map-container">
        <MapContainer
            center={officePosition}
            zoom={15}
            zoomControl={false}
            scrollWheelZoom={false}
            className="office-map"
        >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={officePosition} icon={officeIcon}>
                <Popup className="office-popup">
                    <img src="/park.jpg" alt="Our office" />

                    <div className="popup-content">
                        <h3>Our offices</h3>
                        <p>
                            Pleasure Park<br />
                            Abuja, Nigeria
                        </p>

                        <a
                            href="https://maps.app.goo.gl/5dEnYso91xPXgwTm9"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open location in Google Maps"
                        >
                            ↗
                        </a>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    </div>
)

const Contact = () => {
    return (
        <>
            <section className="navbar-section">
                <Navbar />
            </section>

            <section className="ContactPage">
                <div className="ContactInfo">
                    <div className="contact-block">
                        <h3>Contact us</h3>

                        <div className="ContactIcons">
                            <span>✉</span>
                            <p>ikemdavid8@gmail.com</p>
                        </div>

                        <div className="ContactIcons">
                            <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M19.275 21.885q-.157.001-.315-.02A19.17 19.17 0 0 1 2.135 5.04c-.09-.76.15-1.53.665-2.11C3.325 2.34 4.08 2 4.87 2h3.995c.565 0 1.06.38 1.21.925l.99 3.69c.115.43-.01.895-.325 1.21l-1.91 1.91a14.4 14.4 0 0 0 5.44 5.44l1.91-1.91c.315-.315.775-.44 1.21-.325l3.69.99c.545.145.925.645.925 1.21v3.995c0 .79-.34 1.545-.93 2.07a2.7 2.7 0 0 1-1.795.685zM4.87 3.5c-.36 0-.705.155-.945.425c-.235.265-.34.595-.3.94a17.664 17.664 0 0 0 15.51 15.51c.34.04.675-.065.94-.3c.27-.24.425-.585.425-.945v-3.805l-3.365-.9l-2.59 2.59l-.485-.25A15.9 15.9 0 0 1 7.235 9.94l-.25-.485l2.59-2.59l-.9-3.365z"/></svg></span>
                            <p>+234 8100 3231 80</p>
                        </div>
                    </div>

                    <div className="contact-block">
                        <h3>Media contact</h3>

                        <div className="ContactIcons">
                            <span>✉</span>
                            <p>davidikem8@gmail.com</p>
                        </div>

                        <div className="ContactIcons">
                            <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M19.275 21.885q-.157.001-.315-.02A19.17 19.17 0 0 1 2.135 5.04c-.09-.76.15-1.53.665-2.11C3.325 2.34 4.08 2 4.87 2h3.995c.565 0 1.06.38 1.21.925l.99 3.69c.115.43-.01.895-.325 1.21l-1.91 1.91a14.4 14.4 0 0 0 5.44 5.44l1.91-1.91c.315-.315.775-.44 1.21-.325l3.69.99c.545.145.925.645.925 1.21v3.995c0 .79-.34 1.545-.93 2.07a2.7 2.7 0 0 1-1.795.685zM4.87 3.5c-.36 0-.705.155-.945.425c-.235.265-.34.595-.3.94a17.664 17.664 0 0 0 15.51 15.51c.34.04.675-.065.94-.3c.27-.24.425-.585.425-.945v-3.805l-3.365-.9l-2.59 2.59l-.485-.25A15.9 15.9 0 0 1 7.235 9.94l-.25-.485l2.59-2.59l-.9-3.365z"/></svg></span>
                            <p>+234 8100 3030 80</p>
                        </div>
                    </div>

                    <div className="contact-block">
                        <h3>Advertising and sponsorship requests</h3>

                        <div className="ContactIcons">
                            <span>✉</span>
                            <p>ikemmarketing8@gmail.com</p>
                        </div>
                    </div>
                </div>

                <OfficeMap />

                <div className="ContactForm">
                    <div className="contact-form-intro">
                        <h2>We are here to help</h2>
                        <p>Need to contact us? Please fill this form.</p>
                    </div>

                    <form action="" method="post">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                        <input type="email" placeholder="Email address" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact