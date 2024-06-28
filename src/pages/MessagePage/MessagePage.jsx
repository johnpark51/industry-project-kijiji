import Feedback from "../../components/Feedback/Feedback";
import ReportModal from "../../components/ReportModal/ReportModal";
import ReportedUser from "../../components/ReportedUser/ReportedUser";
import UserCard from "../../components/UserCard/UserCard";
import "./MessagePage.scss";
import Chat from "../../components/Chat/Chat";

function MessagePage() {
  return (
    <div id="messagepage-container">
      <div className="message-page__right">
        <Chat />
        <UserCard />
      </div>
    </div>
  );
}

export default MessagePage;
