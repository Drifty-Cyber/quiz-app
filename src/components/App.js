// import DateCounter from "./DateCounter";
import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuiz } from "../Contexts/QuizContext";

export default function App() {
  const { status, dispatch } = useQuiz();

  useEffect(
    function () {
      async function fetchData() {
        try {
          const res = await fetch("http://localhost:8000/questions");
          const data = await res.json();
          dispatch({ type: "dataReceived", payload: data });
          // console.log(data);
        } catch (err) {
          // console.error(err);
          dispatch({ type: "dataFailed" });
        }
      }

      fetchData();
    },
    [dispatch]
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
