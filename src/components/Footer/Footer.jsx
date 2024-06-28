import "./Footer.scss";

import googlePlay from "../../assets/images/google-play.png";
import apple from "../../assets/images/apple.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import kijijiCentral from "../../assets/images/kijiji-central.png";
import youtube from "../../assets/images/youtube.png";

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
				<div className="footer__buttons">
					<button className="sns-button">
						<img src={apple} className="sns-button__apple-img" />
						<div>
							<span className="sns-button__top-text">Download on the</span>
							<br />
							App Store
						</div>
					</button>
					<button className="sns-button sns-button--google">
						<img src={googlePlay} className="sns-button__google-img" />
						<div>
							<span className="sns-button__top-text">GET IT ON</span>
							<br />
							Google Play
						</div>
					</button>
                    <button className="sns-button--round">
                        <img src={facebook} className="sns-button__logo"/>
                    </button>
                    <button className="sns-button--round">
                        <img src={instagram} className="sns-button__logo"/>
                    </button>
                    <button className="sns-button--round">
                        <img src={twitter} className="sns-button__logo"/>
                    </button>
                    <button className="sns-button--round">
                        <img src={kijijiCentral} className="sns-button__logo"/>
                    </button>
                    <button className="sns-button--round">
                        <img src={youtube} className="sns-button__logo"/>
                    </button>
				</div>

				<p className="footer__rights">
					All rights reserved. Google, Google Play, YouTube and other marks are
					trademarks of Google Inc.
				</p>
			</footer>
		</div>
	);
}

export default Footer;
