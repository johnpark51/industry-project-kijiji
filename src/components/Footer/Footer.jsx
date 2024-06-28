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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 40 85.6"
							aria-hidden="true"
							class="sc-de6b7fc2-9 fHVoPS"
							focusable="false"
							height="20"
							width="20">
							<path
								fill="currentColor"
								d="M26.7 85.6h-16V42.8H0V28h10.7v-8.7C10.7 7.3 13.9 0 28.1 0h11.8v14.8h-7.4c-5.5 0-5.8 2.1-5.8 5.9v7.4H40l-1.6 14.7H26.7v42.8z"></path>
						</svg>
					</button>
					<button className="sns-button--round">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 40 40"
							aria-hidden="true"
							class="sc-de6b7fc2-10 hyExHD"
							focusable="false"
							height="20"
							width="20">
							<path
								fill="currentColor"
								d="M20 3.6c5.3 0 6 0 8.1.1 1.9.1 3 .4 3.7.7.9.4 1.6.8 2.3 1.5.7.7 1.1 1.4 1.5 2.3.3.7.6 1.8.7 3.7.1 2.1.1 2.7.1 8.1s0 6-.1 8.1c-.1 1.9-.4 3-.7 3.7-.4.9-.8 1.6-1.5 2.3-.7.7-1.4 1.1-2.3 1.5-.7.3-1.8.6-3.7.7-2.1.1-2.7.1-8.1.1s-6 0-8.1-.1c-1.9-.1-3-.4-3.7-.7-.9-.4-1.6-.8-2.3-1.5-.7-.7-1.1-1.4-1.5-2.3-.3-.7-.6-1.8-.7-3.7-.1-2.1-.1-2.8-.1-8.1s0-6 .1-8.1c.1-1.9.4-3 .7-3.7.4-.9.8-1.6 1.5-2.3.7-.7 1.4-1.1 2.3-1.5.7-.3 1.8-.6 3.7-.7 2.1-.1 2.8-.1 8.1-.1M20 0c-5.4 0-6.1 0-8.2.1-2.2.1-3.6.5-4.9.9-1.3.6-2.4 1.2-3.5 2.4C2.2 4.5 1.6 5.6 1 6.9.5 8.2.2 9.6.1 11.8 0 13.9 0 14.6 0 20c0 5.4 0 6.1.1 8.2.1 2.1.4 3.6.9 4.9.5 1.3 1.2 2.4 2.3 3.5 1.1 1.1 2.2 1.8 3.5 2.3 1.3.5 2.7.8 4.9.9 2.2.2 2.9.2 8.3.2s6.1 0 8.2-.1c2.1-.1 3.6-.4 4.9-.9 1.3-.5 2.4-1.2 3.5-2.3 1.1-1.1 1.8-2.2 2.3-3.5.5-1.3.8-2.7.9-4.9.2-2.2.2-2.9.2-8.3s0-6.1-.1-8.2c-.1-2.1-.4-3.6-.9-4.9-.5-1.3-1.2-2.4-2.3-3.5-1.1-1.1-2.2-1.8-3.5-2.3-1.3-.5-2.7-.8-4.9-.9C26.1 0 25.4 0 20 0z"></path>
							<path
								fill="currentColor"
								d="M20 9.7C14.3 9.7 9.7 14.3 9.7 20S14.3 30.3 20 30.3 30.3 25.7 30.3 20 25.7 9.7 20 9.7zm0 17a6.7 6.7 0 110-13.4 6.7 6.7 0 010 13.4z"></path>
							<circle cx="30.7" cy="9.3" r="2.4" fill="currentColor"></circle>
						</svg>
					</button>
					<button className="sns-button--round">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 40 32.5"
							aria-hidden="true"
							class="sc-de6b7fc2-11 iIEVGq"
							focusable="false"
							height="20"
							width="20">
							<path
								fill="currentColor"
								d="M38.9.6c-1.6.9-3.3 1.6-5.2 2C32.2 1 30.1 0 27.7 0c-4.5 0-8.2 3.7-8.2 8.2 0 .6.1 1.3.2 1.9-6.8-.4-12.9-3.6-16.9-8.6-.7 1.2-1.1 2.6-1.1 4.1 0 2.8 1.4 5.4 3.6 6.8-1.3 0-2.6-.4-3.7-1v.1c0 4 2.8 7.3 6.6 8-.7.2-1.4.3-2.2.3-.5 0-1 0-1.5-.1 1 3.3 4.1 5.6 7.7 5.7-2.9 2.2-6.4 3.5-10.2 3.5-.7 0-1.3 0-2-.1 3.6 2.3 7.9 3.7 12.6 3.7 15.1 0 23.3-12.5 23.3-23.3V8.1c1.6-1.2 3-2.6 4.1-4.2-1.5.7-3.1 1.1-4.7 1.3 1.7-1.1 3-2.7 3.6-4.6z"></path>
						</svg>
					</button>
					<button className="sns-button--round">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 63.7 61.6"
							aria-hidden="true"
							class="sc-de6b7fc2-12 ePTkmt"
							focusable="false"
							height="20"
							width="20">
							<path
								fill="currentColor"
								d="M57.6 35.1c-2.1 0-4.1 1.1-5.2 2.9l-6.8-2.3c.7-3.2.2-6.5-1.3-9.4l5.6-3.8c1.1 1 2.6 1.6 4.1 1.6 3.4 0 6.1-2.7 6.1-6.1 0-3.4-2.7-6.1-6.1-6.1-3.4 0-6.1 2.7-6.1 6.1 0 .8.1 1.5.4 2.1L42.7 24c-2.3-2.7-5.4-4.4-8.9-4.8l.1-7.1c2.8-.7 4.7-3.1 4.7-6 0-3.4-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1c0 2.8 1.9 5.3 4.7 6l-.1 7c-5.7.5-10.4 4.5-11.9 9.8l-6.7-1.2c-.2-3.3-2.9-5.8-6.1-5.8C2.7 21.9 0 24.6 0 28s2.7 6.1 6.1 6.1c2.4 0 4.6-1.4 5.6-3.7l6.7 1.2c0 .4 0 .7-.1 1.1 0 4.4 2.1 8.3 5.3 10.8l-3.8 6.1c-3.2-1.1-6.7.6-7.8 3.8-.2.6-.3 1.3-.3 2 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-1.6-.6-3.2-1.8-4.3l3.8-6.1c1.9.9 3.9 1.4 6 1.4 5.6 0 10.4-3.3 12.5-8.1l6.8 2.3v.5c0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c.3-3.3-2.4-6-5.8-6M54 14.8c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.9 1.5-3.3 3.3-3.3M6.1 31.3c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3M18 58.8c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3c-.1 1.8-1.5 3.3-3.3 3.3M29.1 6.1c0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3m3 37.6c-6 0-10.9-4.9-10.9-10.9s4.9-10.9 10.9-10.9S43 26.8 43 32.8s-4.9 10.9-10.9 10.9m25.5.8c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3"></path>
						</svg>
					</button>
					<button className="sns-button--round">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 37.3 26.6"
							aria-hidden="true"
							class="sc-de6b7fc2-13 knXZh"
							focusable="false"
							height="20"
							width="20">
							<path fill="none" d="M1 1h35.3v24.6H1z"></path>
							<path
								fill="none"
								stroke="#fff"
								stroke-miterlimit="10"
								stroke-width="2"
								d="M34.8 3.4c-1-1.7-2-2-4.1-2.2-2.2-.1-7.5-.2-12.1-.2s-9.9.1-12 .2c-2.1.1-3.1.4-4.1 2.2C1.5 5.1 1 8.1 1 13.3s.5 8.2 1.5 9.9c1 1.7 2 2 4.1 2.2 2.1.1 7.4.2 12 .2s9.9-.1 12-.2c2.1-.1 3.1-.5 4.1-2.2 1-1.7 1.5-4.7 1.5-9.9.1-5.2-.5-8.2-1.4-9.9z"
								clip-rule="evenodd"></path>
							<path fill="#fff" d="M15.1 6.8v13l10-6.5z"></path>
						</svg>
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
