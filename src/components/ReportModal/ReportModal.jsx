import "./ReportModal.scss";

function ReportModal() {
	return (
		<div className="modal">
			<h5 className="modal__header">Are you sure you want to report this user?</h5>
			<div className="modal__list">
				<input type="checkbox" className="modal__checkbox" />
                <p className="modal__check-text">User did not pay for the item</p>
			</div>
			<div className="modal__list">
				<input type="checkbox" className="modal__checkbox" />
                <p className="modal__check-text">User sent threatening language</p>
			</div>
			<div className="modal__list">
				<input type="checkbox" className="modal__checkbox" />
                <p className="modal__check-text">User did not show up during hand off of item</p>
			</div>
			<div className="modal__list">
				<input type="checkbox" className="modal__checkbox" />
                <p className="modal__check-text">User is attempting to scam me with messages or links</p>
			</div>
			<div className="modal__list">
				<input type="checkbox" className="modal__checkbox" />
                <p className="modal__check-text">Other</p>
			</div>
            <input className="modal__input" placeholder="Describe why you are reporting this user here"></input>
            <div className="modal__buttons">
                <button className="modal__button modal__button--cancel">Cancel</button>
                <button className="modal__button modal__button--report">Report</button>
            </div>
		</div>
	);
}
export default ReportModal;
