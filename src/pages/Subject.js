import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { getSubjects, getQuizes } from "../Data";

const Subject = () => {
  // Get route params
  const { subject_id } = useParams();
  const navigate = useNavigate();

  const [subjects, setSubjects] = React.useState([]);
  const [quizes, setQuizes] = React.useState([]);

  React.useEffect(() => {
    getSubjects(setSubjects);
    getQuizes((quizes) => {
      setQuizes(quizes.filter((quiz) => quiz.subject === subject_id));
    });
  }, [subject_id]);

  console.log({ quizes });

  const subject = subjects.find((subject) => subject.id === subject_id);

  const no_quizes = quizes.length === 0;

  return (
    <Container sx={{ pt: 3 }}>
      <Typography variant="h4" textAlign={"start"} sx={{ paddingBottom: 3 }}>
        {subject?.name}
      </Typography>
      {no_quizes && (
        <Typography variant="h6" textAlign={"start"}>
          No quizes available
        </Typography>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 16 }}
      >
        {quizes.map(({ name, id }, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card
              variant="elevation"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/quiz/" + id);
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  height: 100,
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Subject;
