import { useQuiz } from "../Contexts/QuizContext";

function StartScreen() {
  const { dispatch, questions } = useQuiz();
  const numQuestions = questions.length;

  function handleStart() {
    dispatch({ type: "start" });
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
