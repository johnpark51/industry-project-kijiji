import "./NavBar.scss";

import settings from "../../assets/images/settings.png"

function NavBar() {
	return (
		<div id="container-navbar">
			<nav className="navbar">
                <button className="navbar__button">My Ads</button>
                <button className="navbar__button navbar__button--messages"><p className="messages">My Messages</p></button>
                <button className="navbar__button navbar__button--favourites">My Favourites</button>
                <button className="navbar__button">My Orders</button>
                <button className="navbar__button">My Profile</button>
            </nav>
            <div className="navbar__right">
                <button className="navbar__button--trending">Account Settings</button>
                <img className="navbar__settings" src={settings} />
            </div>
		</div>
	);
}

export default NavBar;