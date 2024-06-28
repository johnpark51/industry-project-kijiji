import "./UserCard.scss";

import { useState } from "react";

function UserCard() {
    const [open, setOpen] = useState(null)

	return (
		<section className="user">
			<div className="user__top">
				<div className="user__top-left">
					<div className="user__photo"></div>
					<p>Don</p>
				</div>
				<div className="user__x">X</div>
			</div>
            <p className="user__listings">View 1 Listing</p>
            <section className="user__stats">
                <div>
                    <h4>1 day+</h4>
                    <p>avg reply</p>
                </div>
                <div>
                    <h4>75%</h4>
                    <p>reply rate</p>
                </div>
                <div>
                    <h4>12 yrs</h4>
                    <p>on kijiji</p>
                </div>
            </section>
            <button className="user__report" onClick={() => {
                setOpen(true)
            }}>Report</button>
		</section>
	);
}

export default UserCard;
