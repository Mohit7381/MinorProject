"use client";
import { useState } from "react";
import questions from "@/app/data/datasets.json";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@/app/components/Layout"));
const Question = dynamic(() => import("@/app/components/Questions"));

export default function Page({ params }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  let score = 0;
  const handleAnswer = (questionId, option) => {
    const index = selectedOptions.findIndex((obj) => obj.questionId === questionId);

    if (index !== -1) {
      console.log("index matched:", index, "questionId:", questionId, "option:", option);
      selectedOptions.splice(index, 1, { questionId, option });
    } else {
      selectedOptions.push({ questionId, option });
    }

    setSelectedOptions(selectedOptions);
  };

  const handleSubmit = async () => {
    selectedOptions.sort();
    if (selectedOptions.length > 0) {
      for (let i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i].option === questions.questions[i].answer) {
          score++;
        }
      }
    }
    console.log("score:", score);
    //code to send the score to database also fetch userId from localStorage
    // const response = await fetch("/api/send-score", {
    //const difficulty=questions.questions[0].difficulty
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ score,difficulty,userId }),
    // });
    // const data = await response.json();
    // console.log("Data:", data);
    window.location.replace("/");
  };

  return (
    <Layout>
      {questions.questions.map((question, index) => (
        <Question
          key={index}
          questionId={question.questionId}
          question={question}
          handleAnswer={handleAnswer}
          topic={question.topic}
          difficulty={question.difficulty}
        />
      ))}
      <div className="flex justify-center">
        <button
          className="bg-black hover:bg-gray-700 text-gray-200 font-bold py-2 px-6 my-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </Layout>
  );
}
