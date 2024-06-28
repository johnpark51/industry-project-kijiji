import io from "socket.io-client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import backArrow from "../../assets/images/chevron_right-24px.svg";
import lama from "../../assets/images/lama.jpeg";
import "./Chat.scss";

const socket = io("http://localhost:3001");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userId] = useState(uuidv4());

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit("chat message", { userId, text: input });
      setInput("");
    }
  };

  return (
    <div className="message-page__left">
      <div className="message-page__left--back">
        <img src={backArrow} alt="back arrow" />
        <p className="back-msg">Back to My Messages</p>
      </div>
      <div className="message-page__left--chat">
        <div className="message-page__left--chat--header">
          <img src={lama} alt="lama" className="lama" />
          <div className="header-text">
            <p className="header-text--name">Cute Lama</p>
            <p className="header-text--price">$5.00</p>
          </div>
        </div>
        <div className="chat-container">
          <ul id="messages" className="messages-box">
            {messages.map((msg, index) => (
              <li
                key={index}
                className={`message ${msg.userId === userId ? "sender" : "receiver"}`}
              >
                {msg.text}
              </li>
            ))}
          </ul>
          <form onSubmit={sendMessage}>
            <input
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              onKeyPress={(e) => e.key === "Enter" && sendMessage(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
