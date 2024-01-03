import { useQuiz } from "../Contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];

  //   console.log(question);
  return (
    <div>
      <h3>{question.question}</h3>
      <Options />
    </div>
  );
}

export default Question;
