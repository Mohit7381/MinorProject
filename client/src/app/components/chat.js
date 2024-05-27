import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Chat = () => {
  // State and Refs
  const [messages, setMessages] = useState([]);
  const [nochat, setNochat] = useState(true);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  // Scroll to bottom of chat o message update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  // Send message when Enter key is pressed
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  // Send message to API
  const sendMessage = async () => {
    setNochat(false);
    if (!inputText.trim()) return;

    setLoading(true);
    const userMessage = { text: inputText, type: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");

    try {
      const response = await fetch(`https://text-reply/api/${encodeURIComponent(inputText)}`);
      if (response.ok) {
        const data = await response.json();
        const assistantMessage = { type: "assistant", text: data.message };
        updateMessages(userMessage, assistantMessage);
      } else {
        handleErrorResponse();
      }
    } catch (error) {
      handleErrorResponse(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Update messages based on API response
  const updateMessages = (userMsg, assistantMsg) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => (message === userMsg ? assistantMsg : message))
    );
  };

  // Handle error response from API
  const handleErrorResponse = (errorMessage = "Failed to fetch response") => {
    console.error("Error:", errorMessage);
    const errorMessageObj = { text: `Error: ${errorMessage}`, type: "assistant" };
    setMessages((prevMessages) => [...prevMessages, errorMessageObj]);
  };

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col justify-between items-center md:w-4/5">
      {/* Chat container */}
      <div
        ref={chatContainerRef}
        className="overflow-y-auto flex-1 w-full p-4 md:p-20 md:px-32"
        style={{ maxHeight: "80vh" }}
      >
        {/* Tips here */}
        {nochat && (
          <div className="text-sm md:text-base">
            <div className="bg-gray-800 p-3 rounded my-2">
              <p className="py-3">
                <span className="p-1 bg-gray-700 rounded">Pro Tip:</span> Ask like{" "}
                <span className=" font-mono">
                  {"I will explain While Loop and then give me a score based on my answer."}
                </span>{" "}
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded my-2">
              <p className="py-3">
                <span className="p-1 bg-gray-700 rounded">Pro Tip:</span>
                <span className=" font-mono">
                  {" "}
                  You can play Quiz to improve your subjects. Click to go to
                  <a href="/profile" className="text-yellow-500">
                    {" Profile"}
                  </a>
                </span>{" "}
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col text-white">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              } mb-2 items-center`}
            >
              {/* Assistant profile image */}
              {message.type === "assistant" && (
                <Image
                  src="/img/gdscnie.jpg"
                  alt="Assistant Profile"
                  className="w-8 h-8 rounded-full mr-2 bg-white"
                  width={500}
                  height={300}
                />
              )}
              {/* Chat message bubble */}
              <div
                className={`${
                  message.type === "user" ? "bg-gray-600" : "bg-yellow-500"
                } text-white p-2 rounded-lg max-w-xs`}
              >
                <p className="text-sm leading-6">{message.text}</p>
              </div>
              {/* User or assistant profile image will be fetched from the data stored from Login gmail*/}
              {message.type === "user" && (
                <Image
                  src="/img/Mohit Singh.png"
                  alt="User Profile"
                  className="w-8 h-8 rounded-full ml-2"
                  width={500}
                  height={300}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Message input and send button */}
      <div className="p-5 md:w-4/5 mb-16">
        <div className="flex items-center md:text-xl">
          <div className="flex-grow px-2">
            <textarea
              placeholder="Ask Questions and press ⏎ (Enter) or ⇧+⏎ (Shift+Enter) to change line"
              className="w-full outline-none resize-none rounded-lg p-4 text-black"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
          </div>
          <div className="ml-2">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className={`text-yellow-500 cursor-pointer ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={sendMessage}
              disabled={loading}
            />
          </div>
        </div>

        {/* Terms and conditions */}
        <h1 className="text-white text-center px-3">
          By using our service, you agree to our{" "}
          <a className="text-yellow-500" href="terms-conditions">
            Terms & conditions
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Chat;
