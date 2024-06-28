import "./UserCard.scss";

import { useState } from "react";
import { createPortal } from "react-dom";

import alert from "../../assets/images/alert.png";
import ReportModal from "../ReportModal/ReportModal";

function UserCard() {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			{createPortal(
				<ReportModal
					open={openModal}
					onClose={() => setOpenModal(false)}
				/>,
				document.body
			)}
			<div className="card">
				<div className="card__top-half">
					<section className="card__top">
						<div className="card__photo">A</div>
						<h4 className="card__name">Angelique</h4>
					</section>
					<section className="card__stats">
						<div className="card__stats-section">
							<h5>4hrs</h5>
							<p className="card__stats-text">avg reply</p>
						</div>
						<div className="card__stats-section--middle">
							<h5>75%</h5>
							<p className="card__stats-text">reply rate</p>
						</div>
						<div className="card__stats-section">
							<h5>5yrs</h5>
							<p className="card__stats-text">on Kijiji</p>
						</div>
					</section>
					<button
						onClick={() => {
							setOpenModal(true);
						}}
						className="card__report">
						Report
					</button>
				</div>
				<div className="card__bottom-half">
					<h5 className="card__suspicious-text">
						We suspect suspicious activity with this user
					</h5>
					<div className="card__alerts">
						<img className="card__alert-img" src={alert} />
						<p className="card__alert-text">
							Inactive account for long periods of time
						</p>
					</div>
					<div className="card__alerts">
						<img className="card__alert-img" src={alert} />
						<p className="card__alert-text">No reply rate</p>
					</div>
					<div className="card__alerts">
						<img className="card__alert-img" src={alert} />
						<p className="card__alert-text">Mass messaging detected</p>
					</div>
					<p className="card__bottom-text">
						When receiving replies regarding your ad, be suspicious of
						communication that does not make specific reference to what your ad
						is about, such as:
					</p>
					<p className="card__bottom-text">
						"Is there anything to add or does the ad say it all?"
					</p>
					<p className="card__bottom-text">
						"I'm ready to pick up this item, can you give me your price and is
						the condition as lister?"
					</p>
					<p className="card__bottom-text">
						Replies like this are generally sent out en mass by fraudsters
						hoping to get as many responses as possible. If you would like more
						information about scams and safety,{" "}
						<span className="card__click-here">click here.</span>
					</p>
				</div>
			</div>
		</>
	);
}
export default UserCard;
