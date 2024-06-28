import "./Footer.scss";

function Footer() {
	return (
		<div id="footer-container">
			<footer className="footer">
                <div className="footer__nav">
                    <section className="footer__column">
                        <h4 className="footer__subheader">KIJIJI</h4>
                        <p className="footer__links">About</p>
                        <p className="footer__links">Join Us</p>
                        <p className="footer__links">Member Benefits</p>
                        <p className="footer__links">Advertise on Kijiji</p>
                    </section>
                    <section className="footer__column">
                        <h4 className="footer__subheader">EXPLORE</h4>
                        <p className="footer__links">Kijiji Autos</p>
                        <p className="footer__links">Kijiji Central</p>
                        <p className="footer__links">Tools to promote ads</p>
                    </section>
                    <section className="footer__column">
                        <h4 className="footer__subheader">INFO</h4>
                        <p className="footer__links">Terms of Use</p>
                        <p className="footer__links">Privary Policy</p>
                        <p className="footer__links">Posting Policy</p>
                        <p className="footer__links">AdChoices</p>
                    </section>
                    <section className="footer__column">
                        <h4 className="footer__subheader">SUPPORT</h4>
                        <p className="footer__links">Help Desk</p>
                        <p className="footer__links">Kijiji en Francais</p>
                        <p className="footer__links">Accessibility</p>
                        <p className="footer__links">Change Contrast</p>
                    </section>
                </div>
                <div>

                </div>
                <p className="footer__rights">All rights reserved. Google, Google Play, YouTube and other marks are trademarks of Google Inc.</p>
			</footer>
		</div>
	);
}

export default Footer;