"use client";
import History from "./components/history";
import Chat from "./components/chat";
import QuizUI from "./components/cards";
export default function Home() {
  return (
    <main>
      {/* <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex">
          <History />
          <Chat />
        </div>
      </div> */}
        <QuizUI />
    </main>
  );
}
