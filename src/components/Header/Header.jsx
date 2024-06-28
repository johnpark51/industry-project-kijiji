import "./Header.scss";

import kijiji from "../../assets/images/kijiji.png";

function Header() {
	return (
		<div id="container">
			<header className="header">
				<img className="header__logo" src={kijiji} />
				<input
					type="text"
					className="header__input"
					placeholder="What are you looking for?"></input>
				<button className="header__search-button">Search</button>
				<button className="header__location">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						focusable="false"
						height="32"
						width="32">
						<path
							d="M12.6 21s-1.9-1.6-3.8-3.9S5 12 5 9.5c0-2.2.9-4.1 2.2-5.4C8.7 2.7 10.6 2 12.6 2c2 0 3.9.8 5.2 2.1C19.2 5.4 20 7.3 20 9.5c0 2.5-1.9 5.4-3.8 7.6-1.9 2.2-3.6 3.9-3.6 3.9z"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M15.6 8.5c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9s-1.6.3-2.1.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.1c.5.6 1.3.9 2.1.9"
							stroke="currentColor"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
					</svg>
					Oakville/Halton R...
				</button>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					height="32"
					width="32">
					<path
						d="M19.221 5.914c-1.605-1.686-4.413-1.785-6.118-.198l-.2.198-.903.794-.903-.893C9.493 4.13 6.684 4.03 4.98 5.715l-.2.2c-1.705 1.784-1.705 4.66 0 6.445l6.82 6.942c.1.099.2.198.401.198.1 0 .3 0 .401-.1l6.82-6.94c1.705-1.885 1.705-4.76 0-6.546z"
						stroke="currentColor"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"></path>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					aria-hidden="true"
					focusable="false"
					height="32"
					width="32">
					<path
						fill="currentColor"
						d="M19.964 17.315l-.304-.758A12.15 12.15 0 0118.414 11v-.582a6.332 6.332 0 00-5.43-6.338c.002-.028.016-.052.016-.08a1 1 0 00-2 0c0 .028.014.052.016.08a6.332 6.332 0 00-5.43 6.338V11a12.37 12.37 0 01-1.271 5.62l-.28.695A.5.5 0 004.5 18h3.674A4.283 4.283 0 0012 21a3.968 3.968 0 003.864-3H19.5a.5.5 0 00.464-.685zM12 20a3.246 3.246 0 01-2.76-2h5.578A2.889 2.889 0 0112 20zm3.5-3H5.24l.002-.006A13.294 13.294 0 006.585 11v-.582a5.414 5.414 0 1110.83 0V11a13.074 13.074 0 001.318 5.932l.027.068z"></path>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					aria-hidden="true"
					data-testid="messages-icon"
					focusable="false"
					height="32"
					width="32">
					<path
						fill="currentColor"
						d="M19.5 20.002a.514.514 0 01-.098-.01l-2.206-.44-1.43-.356a.525.525 0 00-.354.04 6.207 6.207 0 01-3.412.766 8 8 0 118-8 8.988 8.988 0 01-.859 3.598l.408 2.04.436 1.741a.5.5 0 01-.485.621zm-7.5-15a7 7 0 000 14 5.258 5.258 0 002.98-.668 1.516 1.516 0 011.027-.109l1.408.35 1.408.282-.25-.998-.446-2.23a.502.502 0 01.048-.33A8.147 8.147 0 0019 12.003a7 7 0 00-7-7zm3.195 13.783z"></path>
				</svg>
			</header>
		</div>
	);
}

export default Header;
