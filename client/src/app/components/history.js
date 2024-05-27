const History = () => {
  const handleNewChat = () => {
    alert("New chat algorithm has to be written");
  };

  return (
    <div className="bg-gray-600 h-screen overflow-y-auto hidden md:block w-1/5 p-5">
      <button
        className="rounded-full bg-yellow-500 text-black font-bold px-4 py-2 flex items-center"
        onClick={handleNewChat}
      >
        New Chat <span className="ml-2">+</span>
      </button>
      <hr className="my-3" />
      <h1 className="text-white font-semibold">History</h1>
      {/* Fetch and display past chats here */}
    </div>
  );
};

export default History;
