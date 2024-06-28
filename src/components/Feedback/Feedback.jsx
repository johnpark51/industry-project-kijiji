import "./Feedback.scss";

function Feedback() {
	return (
		<div className="feedback">
            <h5 className="feedback__header">Thank you for your feedback!</h5>
            <p className="feedback__text">We will review your report to ensure that users adhere to our community guidelines. Your input helps us maintain a safe and respectful environment for everyone on Kijiji</p>
            <button className="feedback__button">Continue</button>
		</div>
	);
}
export default Feedback;