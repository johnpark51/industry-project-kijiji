import ReportModal from "../../components/ReportModal/ReportModal";
import UserCard from "../../components/UserCard/UserCard";
import "./MessagePage.scss";

function MessagePage() {
	return (
		<div id="message-container">
			<div className="message-page__left">
                <p>Back to My Messages</p>
				<h1>Put Message box component here</h1>
			</div>
			<div className="message-page__right">
				<UserCard />
                <ReportModal />
			</div>
		</div>
	);
}

export default MessagePage;
