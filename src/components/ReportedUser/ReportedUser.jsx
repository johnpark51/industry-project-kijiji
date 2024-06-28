import "./ReportedUser.scss";

function ReportedUser() {
	return (
		<div className="reported-card">
			<div className="reported-card__top-half">
				<section className="reported-card__top">
					<div className="reported-card__photo">A</div>
					<h4 className="reported-card__name">Angelique</h4>
				</section>
				<section className="reported-card__stats">
					<div className="reported-card__stats-section">
						<h5>4hrs</h5>
						<p className="reported-card__stats-text">avg reply</p>
					</div>
					<div className="reported-card__stats-section--middle">
						<h5>75%</h5>
						<p className="reported-card__stats-text">reply rate</p>
					</div>
					<div className="reported-card__stats-section">
						<h5>5yrs</h5>
						<p className="reported-card__stats-text">on Kijiji</p>
					</div>
				</section>
            </div>
            <p className="reported-card__feedback">You have reported this user</p>
		</div>
	);
}
export default ReportedUser;
