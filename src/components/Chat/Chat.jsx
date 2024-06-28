import io from "socket.io-client";
import { useEffect, useState } from "react";
import backArrow from "../../assets/images/chevron_right-24px.svg";
import lama from "../../assets/images/lama.jpeg";
import "./Chat.scss";

const socket = io("http://localhost:3001");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit("chat message", { username, text: input });
      setInput("");
    }
  };

  return (
    <div className="message-page__left">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            className="name-input"
          />
          <button type="submit" className="login-btn">
            Join Chat
          </button>
        </form>
      ) : (
        <>
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
              <ul id="messages" className="messages-inputs">
                {messages.map((msg, index) => (
                  <li
                    key={index}
                    className={`message ${msg.username === username ? "sender" : "receiver"}`}
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
        </>
      )}
    </div>
  );
};

export default Chat;
