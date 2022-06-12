import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { getSubjects } from "../Data";
import { useNavigate } from "react-router-dom";
import * as Icons from "@mui/icons-material";

const Dashboard = () => {
  const navigate = useNavigate();

  const [subjects, setSubjects] = React.useState([]);

  React.useEffect(() => {
    getSubjects(setSubjects);
  }, []);

  return (
    <Container sx={{ pt: 3 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 16 }}
      >
        {subjects.map(({ name, icon, id }) => (
          <Subject
            key={id}
            name={name}
            Icon={Icons[icon]}
            id={id}
            navigate={navigate}
          />
        ))}
      </Grid>
    </Container>
  );
};

const Subject = ({ name, id, navigate, Icon }) => {
  const onClick = () => {
    navigate(`/subject/${id}`);
  };

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card
        variant="elevation"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
        onClick={onClick}
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
        <Icon fontSize="inherit" sx={{ height: 100, fontSize: 55 }} />
      </Card>
    </Grid>
  );
};

export default Dashboard;
