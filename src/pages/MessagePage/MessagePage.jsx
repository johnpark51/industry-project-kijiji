import "./MessagePage.scss";
import Chat from "../../components/Chat/Chat";

function MessagePage() {
  return (
    <div id="container">
      <div className="message-page__right">
        <Chat />
        <h1>Put User Profile component here</h1>
      </div>
    </div>
  );
}

export default MessagePage;
