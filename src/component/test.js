/* eslint-disable react-hooks/rules-of-hooks */
import questionsData from "../resource/questions.json";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import YouTube from 'react-youtube';
import { Message } from 'primereact/message';
import MathJax from "react-mathjax2";

export default function Test() {
  const { t } = useTranslation();
  const questions = [...questionsData.questions];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(questions[1]);

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const [answered, setAnswered] = useState(false);

  const handleSubmitClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswered(true);
  };

  const handleNextButton = () => {
    const nextQuestion = currentQuestion + 1;
	setAnswered(false);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };




  const opts = {
    height: '240',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };
  return (
    <div>
      {showScore ? (
        <div>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <div className="card">
            <p>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </p>
         
            <MathJax.Context>
            <MathJax.Text text= {t(questions[currentQuestion].code)}></MathJax.Text>
            </MathJax.Context>
           
          </div>
          <div className="card flex justify-content-center">
            <div className="flex flex-column gap-5">
              {questions[currentQuestion].answers.map((answerOption) => {
                return (
                  <div
                    key={answerOption.code}
                    className="flex align-items-center"
                  >
                    <RadioButton disabled={answered}
                      inputId={answerOption.key}
                      name="category"
                      value={answerOption}
                      onChange={(e) => setSelectedCategory(e.value)}
                      checked={selectedCategory.code === answerOption.code}
                    />
                    <label htmlFor={answerOption.code} className="ml-2">
                      {answerOption.code +
                        ". " +
                        t(
                          questions[currentQuestion].code +
                            "." +
                            answerOption.code
                        )}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="card flex flex-wrap justify-content-center  gap-5 mb-10">
            {!answered ? (
              <Button
                onClick={() => handleSubmitClick(selectedCategory.isCorrect)}
              >
                Submit
              </Button>
            ) : (
			<div>
				<div className="flex flex-wrap align-content-right">
				<Button icon="pi pi-chevron-circle-right" iconPos="right"
                onClick={() => handleNextButton(selectedCategory.isCorrect)}
              >
                Next
              </Button>
				</div>					
              <p>{selectedCategory.isCorrect ? (<Message severity="success" text="Your answer is correct"/>) : (<Message severity="error" text="Your answer is  incorrect" />)}</p>
			  <br/>
			  <YouTube videoId={t(questions[currentQuestion].video)} containerClassName="embed embed-youtube" opts={opts} />
			  </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
