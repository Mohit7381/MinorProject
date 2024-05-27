import Link from "next/link";
import Image from "next/image";

// Quiz UI Component
export default function QuizUI() {
  return (
    <div className="mx-auto  max-w-5xl p-10 bg-gray-800 rounded md:mt-10">
      <h1 className="text-2xl mb-8 text-center bg-gray-900 p-3 rounded-xl md:w-2/3 mx-auto">
        <span className="text-yellow-500">Hey User 1 </span>Click on any topic to start a quiz.
      </h1>
      <div className="flex justify-center flex-col md:flex-row">
        <QuizSection title="Weak topics" img="/img/weaktopics.jpg"/>
        <QuizSection title="All topics" img="/img/alltopics.jpg"/>
      </div>
    </div>
  );
}

// Quiz Section Component
function QuizSection({ title,img }) {
  return (
    <div className="flex flex-col bg-gray-600 rounded-xl m-5 relative">
      <Image src={img} alt={img} className="aspect-video mix-blend-overlay w-full rounded-xl" width={300} height={300} />
      <h2 className="text-xl font-bold absolute p-2">{title}</h2>
      <div className="scroll-container">
        <QuizButton label="JavaScript" />
        <QuizButton label="ReactJS" />
        <QuizButton label="Node.js" />
        <QuizButton label="JavaScript" />
        <QuizButton label="ReactJS" />
        <QuizButton label="Node.js" />
        <QuizButton label="JavaScript" />
        <QuizButton label="ReactJS" />
        <QuizButton label="Node.js" />
      </div>
    </div>
  );
}

// Quiz Button Component
function QuizButton({ label }) {
  //fetch the userId stored in localstorage
    const UserID="Qm74wifuwb4797g34r";
  return (
    <Link href={`/quiz/${label}-${UserID}`} className="flex flex-col items-center text-center justify-center">
      <div className="bg-black w-1/3 rounded-full p-2 m-2 hover:bg-green-700">{label}</div>
    </Link>
  );
}
