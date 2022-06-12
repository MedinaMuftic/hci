import {
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { getQuizes, getSubjects } from "../Data";

const Quiz = () => {
  // Get route params
  const { quiz_id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = React.useState({});
  const [subject, setSubject] = React.useState({});

  React.useEffect(() => {
    getSubjects((subjects) => {
      setSubject(subjects.find((subject) => subject.id === quiz?.subject));
    });
    getQuizes((quizes) => {
      setQuiz(quizes.find((quiz) => quiz.id === quiz_id));
    });
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [answered, setAnswered] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const question = quiz?.questions?.[currentQuestionIndex];

  if (!question) return;

  const correctAnswer = question.answers.find(
    (answer) => answer.id === question.correctAnswer
  );

  const chosenAnswer = question.answers.find(
    (answer) => answer.id === Number(answers[currentQuestionIndex])
  );

  const isCorrect = correctAnswer?.id === chosenAnswer?.id;

  const onAnswer = () => {
    setAnswered(true);
  };

  const onNext = () => {
    if (finished) {
      navigate(-1);
    } else {
      setAnswered(false);
      if (isCorrect) setScore(score + 1);
      if (!isLastQuestion) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setFinished(true);
      }
    }
  };

  const totalQuestions = quiz?.questions?.length;

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <Container sx={{ pt: 3 }}>
      <Typography variant="h4" textAlign={"start"} sx={{ paddingBottom: 3 }}>
        {subject?.name} / {quiz?.name}
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 600,
        }}
      >
        <Card
          sx={{
            width: 600,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            backgroundColor: answered
              ? isCorrect
                ? "#c2ffc2"
                : "#ffaeae"
              : "#fff",
          }}
        >
          {!answered && !finished && (
            <FormControl sx={{ marginBottom: 2 }}>
              <FormLabel
                id={"radio-question" + currentQuestionIndex}
                sx={{ textAlign: "start", marginBottom: 2 }}
              >
                {currentQuestionIndex + 1}. {question.question}
              </FormLabel>
              {question && (
                <RadioGroup
                  name={"radio-" + question.id}
                  onChange={(e) => {
                    setAnswers([
                      ...answers.slice(0, currentQuestionIndex),
                      e.target.value,
                    ]);
                  }}
                  value={answers[currentQuestionIndex] || ""}
                >
                  {question.answers.map((answer) => {
                    return (
                      <FormControlLabel
                        key={answer.id}
                        value={answer.id}
                        control={<Radio />}
                        label={answer.text}
                      />
                    );
                  })}
                </RadioGroup>
              )}
            </FormControl>
          )}
          {answered && !isCorrect && (
            <Typography variant="h6" style={{ textDecoration: "line-through" }}>
              {chosenAnswer?.text}
            </Typography>
          )}
          {answered && (
            <Typography variant="h6">{correctAnswer?.text}</Typography>
          )}
          {finished && (
            <Typography>
              Final score: {score} / {totalQuestions}{" "}
            </Typography>
          )}
          <Button
            disabled={!answers[currentQuestionIndex]}
            onClick={answered || finished ? onNext : onAnswer}
          >
            {answered
              ? isLastQuestion
                ? "Finish"
                : "Continue"
              : finished
              ? "Back to quizes"
              : "Answer"}
          </Button>
        </Card>
      </Container>
    </Container>
  );
};

export default Quiz;
