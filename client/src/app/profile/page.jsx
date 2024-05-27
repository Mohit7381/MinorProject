"use client";
import Image from "next/image";
import { useState } from "react";
const StatCard = ({ color, title, value }) => (
  <div className="m-3">
    <div className={`${color} w-40 h-40 rounded-full flex justify-center items-center`}>
      <div className="bg-gray-300 text-black font-bold text-center w-28 h-28 rounded-full flex justify-center items-center">
        <h1 className="font-mono">{value}</h1>
      </div>
    </div>
    <h1 className="text-center mt-5 font-mono">{title}</h1>
  </div>
);

const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const logout = () => {
    alert("Logout function to be written");
  };

  const weakTopics = ["Typescript", "DSA", "Option 3"];
  const allTopics = ["Typescript", "DSA", "Option 3"];

  const Topic = ({ topic }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <a
        href="/"
        className={`bg-black p-2 rounded-xl px-4 text-white inline-block transition-all duration-300 ease-in-out ${
          isHovered ? "bg-green-700 text-white" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Play a quiz" : topic}
      </a>
    );
  };
  
  const renderTopics = (topics) => (
    <div className="flex items-center space-x-4 mb-4 p-3 rounded-lg">
      {topics.map((topic, index) => (
        <Topic key={index} topic={topic} />
      ))}
    </div>
  );
  

  return (
    <div className="container mx-auto p-5 bg-gray-700 rounded-md">
      <div className="flex items-center space-x-4 mb-4 p-3 rounded-lg">
        <Image
          src="/img/user.png"
          alt=""
          className="rounded-full w-32 h-32 object-cover"
          width={500}
          height={500}
        />
        <div>
          <p className="text-yellow-500 text-2xl">User 1</p>
          <p className="text-xl">XYZ School</p>
          <p className="text-4xl ">
            Grade: <span className="text-yellow-500">4th</span>
          </p>
          <p className="bg-gray-100 p-2 m-3 ml-0 rounded-lg text-black text-center">
            Computer Science
          </p>
        </div>
      </div>
      <h1 className="text-sm text-red-500">Click on any topic to play Quiz</h1>
      <div className="p-4 bg-gray-800 rounded-lg font-mono overflow-auto">
        <p>Weak Topics:</p>
        {renderTopics(weakTopics)}
      </div>
      <div className="p-4 bg-gray-800 rounded-lg mt-4 font-mono">
        <p>All Topics:</p>
        {renderTopics(allTopics)}
      </div>
      <h1 className="text-4xl font-bold mt-5">Stats:</h1>
      <div className="flex justify-center flex-wrap bg-gray-900 p-10 my-5 rounded-lg">
        <StatCard color="bg-purple-500" title="Assessment given" value="231" />
        <StatCard color="bg-yellow-500" title="Time Spent" value="4 hours/day" />
        <StatCard color="bg-orange-500" title="Streak" value="13 days" />
      </div>
      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-md">
        <h1 className="overflow-auto">
          You logged in as <span className="text-xl text-yellow-500 ">longUsername@gmail.com</span>
        </h1>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
